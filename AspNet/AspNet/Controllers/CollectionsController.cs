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
    [Route("collections")]
    public class CollectionsController : Controller
    {

        private readonly MySqlContext _context;

        public CollectionsController(MySqlContext context)
        {
            _context = context;
        }

        // GET: /<controller>/
        [HttpGet, ActionName("CollectionIndex")]
        [Route("")]
        [Route("/")]
        public IActionResult Index()
        {
            var collections = _context.Collections.Where(m => m.Active == true).ToList();
            return View(collections);
        }

        // GET: /<controller>/:id
        [HttpGet, ActionName("CollectionShow")]
        [Route("{id}")]
        public IActionResult Show(int id)
        {
            var collection = _context.Collections.Find(id);
            if(collection == null){
                return NotFound();
            }
            collection.Items = _context.Items.Where(m => m.CollectionId == collection.CollectionId).Where(m => m.Active == true).ToList();
            return View(collection);
        }

        // GET: /<controller>/:id
        [HttpGet, ActionName("CollectionNew")]
        [Route("new")]
        public IActionResult New()
        {
            return View();
        }

        // GET: /<controller>/:id
        [HttpPost, ActionName("CollectionCreate")]
        [ValidateAntiForgeryToken]
        [Route("create")]
        public async Task<IActionResult> Create([Bind("Name")] Collection collection)
        {
            collection.Active = true;
            if (ModelState.IsValid)
            {
                _context.Add(collection);
                await _context.SaveChangesAsync();
                return RedirectToAction("CollectionIndex");
            }
            return RedirectToAction("CollectionNew");
        }



        // GET: /<controller>/:id
        [HttpGet, ActionName("CollectionEdit")]
        [Route("{id}/edit")]
        public IActionResult Edit(int id)
        {
            var collection = _context.Collections.Find(id);
            if (collection == null)
            {
                return NotFound();
            }
            return View(collection);
        }

        [HttpPost, ActionName("CollectionUpdate")]
        [Route("{id}/update")]
        public async Task<IActionResult> Update(int id, [Bind("Name")] Collection collection)
        {
            var db_collection = _context.Collections.Find(id);
            if (db_collection == null)
            {
                return RedirectToAction("CollectionIndex");
            }
            db_collection.Name = collection.Name;
            _context.Update(db_collection);
            await _context.SaveChangesAsync();
            return RedirectToAction("CollectionShow", "Collections", new { id = id });
        }

        [HttpGet, ActionName("CollectionDestroy")]
        [Route("{id}/destroy")]
        public async Task<IActionResult> Destroy(int id)
        {
            var collection = _context.Collections.Find(id);
            if (collection == null)
            {
                return NotFound();
            }
            collection.Active = false;
            _context.Update(collection);
            await _context.SaveChangesAsync();
            return RedirectToAction("CollectionIndex");
        }

    }
}
