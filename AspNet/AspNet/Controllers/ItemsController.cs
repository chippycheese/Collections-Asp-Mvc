using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.TagHelpers;
using AspNet.Contexts;
using AspNet.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspNet.Controllers
{
    [Route("collection/{collectionId}/items")]
    public class ItemsController : Controller
    {

        private readonly MySqlContext _context;

        public ItemsController(MySqlContext context)
        {
            _context = context;
        }

        // GET: /<controller>/:id
        [HttpGet, ActionName("ItemNew")]
        [Route("new")]
        public IActionResult New(int collectionId)
        {
            return View();
        }

        // GET: /<controller>/:id
        [HttpPost, ActionName("ItemCreate")]
        [ValidateAntiForgeryToken]
        [Route("create")]
        public async Task<IActionResult> Create(int collectionId, [Bind("Name,Price,Collected")] Item item)
        {
            item.Active = true;
            item.CollectionId = collectionId;
            if (ModelState.IsValid)
            {
                _context.Add(item);
                await _context.SaveChangesAsync();
                await UpdateCollection(collectionId);
                return RedirectToAction("CollectionShow","Collections", new { id = collectionId});
            }
            return RedirectToAction("ItemNew");
        }

        // GET: /<controller>/:id
        [HttpGet, ActionName("ItemEdit")]
        [Route("{id}/edit")]
        public IActionResult Edit(int collectionId, int id)
        {
            var item = _context.Items.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return View(item);
        }

        [HttpPost, ActionName("ItemUpdate")]
        [Route("{id}/update")]
        public async Task<IActionResult> Update(int collectionId, int id, [Bind("Name,Price,Collected")] Item item)
        {
            var db_item = _context.Items.Find(id);
            if (db_item == null)
            {
                return RedirectToAction("CollectionIndex");
            }
            db_item.Name = item.Name;
            db_item.Price = item.Price;
            db_item.Collected = item.Collected;
            _context.Update(db_item);

            await _context.SaveChangesAsync();

            await UpdateCollection(collectionId);

            return RedirectToAction("CollectionShow", "Collections", new { id = collectionId });
        }

        [HttpGet, ActionName("ItemCollect")]
        [Route("{id}/Collect")]
        public async Task<IActionResult> CollectItem(int collectionId, int id)
        {
            var db_item = _context.Items.Find(id);
            if (db_item == null)
            {
                return RedirectToAction("CollectionIndex");
            }
            db_item.Collected = true;
            _context.Update(db_item);
            await _context.SaveChangesAsync();

            await UpdateCollection(collectionId);

            return RedirectToAction("CollectionShow", "Collections", new { id = collectionId });
        }

        [HttpGet, ActionName("ItemDestroy")]
        [Route("{id}/destroy")]
        public async Task<IActionResult> Destroy(int collectionId, int id)
        {
            var item = _context.Items.Find(id);
            if (item == null)
                {
                    return NotFound();
                }
            item.Active = false;
            _context.Update(item);
            await _context.SaveChangesAsync();
            await UpdateCollection(collectionId);
            return RedirectToAction("CollectionShow", "Collections", new { id = collectionId });
        }

        public async Task UpdateCollection(int collectionId)
        {
            var collection = _context.Collections.Find(collectionId);
            var itemsInCollection = _context.Items.Where(m => m.CollectionId == collection.CollectionId).ToList();
            int collected = 0;
            int total = 0;
            foreach (var db_item in itemsInCollection)
            {
                if (db_item.Active)
                {
                    total++;
                    if (db_item.Collected)
                    {
                        collected++;
                    }
                }
            }
            collection.Collected = collected;
            collection.Total = total;
            _context.Update(collection);
            await _context.SaveChangesAsync();
        }

    }
}
