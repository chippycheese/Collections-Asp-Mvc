using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNet.Contexts;

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
            var collections = _context.Collections.ToList();
            return View(collections);
        }

        // GET: /<controller>/:id
        [HttpGet]
        [Route("{id}")]
        public IActionResult Show(int id)
        {
            return View();
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
        [Route("Create")]
        public IActionResult Create()
        {
            return View();
        }

        // GET: /<controller>/:id
        [HttpGet]
        [Route("{id}/edit")]
        public IActionResult Edit(int id)
        {
            return View();
        }

        [HttpPut]
        [Route("{id}/update")]
        public IActionResult Update(int id)
        {
            return View();
        }

        [HttpDelete]
        [Route("{id}/destroy")]
        public IActionResult Destory(int id)
        {
            return View();
        }

    }
}
