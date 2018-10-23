using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
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
        [HttpGet]
        [Route("")]
        [Route("/")]
        public IActionResult Index()
        {
            var collections = _context.Collections.Where(m => m.Active == true).ToList();
            return View(collections);
        }

        // GET: /<controller>/:id
        [HttpGet]
        [Route("{id}")]
        public IActionResult Show(int id)
        {
            var collection = _context.Collections.Find(id);
            if(collection == null){
                return NotFound();
            }
            return View(collection);
        }

        // GET: /<controller>/:id
        [HttpGet]
        [Route("new")]
        public IActionResult New()
        {
            return View();
        }

        // GET: /<controller>/:id
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Route("create")]
        public async Task<IActionResult> Create([Bind("Name")] Collection collection)
        {
            collection.Active = true;
            if (ModelState.IsValid)
            {
                _context.Add(collection);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return RedirectToAction("New");
        }



        // GET: /<controller>/:id
        [HttpGet]
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

        [HttpPost]
        [Route("{id}/update")]
        public async Task<IActionResult> Update(int id, [Bind("Name")] Collection collection)
        {
            var db_collection = _context.Collections.Find(id);
            if (db_collection == null)
            {
                return RedirectToAction("Index");
            }
            db_collection.Name = collection.Name;
            _context.Update(db_collection);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        [HttpGet, ActionName("DeleteCollection")]
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
            return RedirectToAction("Index");
        }

    }
}
