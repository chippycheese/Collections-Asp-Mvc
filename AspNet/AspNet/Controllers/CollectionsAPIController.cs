using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNet.Contexts;
using AspNet.Models;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Cors;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspNet.Controllers
{
    [Route("api/collections")]
    [EnableCors("ApiReady")]
    public class CollectionsAPIController : Controller
    {
        private readonly MySqlContext _context;

        public CollectionsAPIController(MySqlContext context)
        {
            _context = context;
        }

        // GET: api/collections
        [HttpGet]
        [Route("")]
        public string Get()
        {
            return JsonConvert.SerializeObject(_context.Collections.Where(m => m.Active == true).ToList(), Formatting.Indented);
        }   

        // GET: /<controller>/:id
        [HttpGet]
        [Route("{id}", Name = "GetCollection")]
        public ActionResult<string> Get(int id)
        {
            var collection = _context.Collections.Find(id);
            if (collection == null)
            {
                return NotFound();
            }
            return JsonConvert.SerializeObject(collection, Formatting.Indented);
        }

        // GET: /<controller>/:id
        [HttpPost]
        [Route("")]
        public ActionResult<Collection> Post([FromBody]Collection value)
        {
            value.Active = true;
            _context.Collections.Add(value);
            _context.SaveChanges();
            return value;
        }

        [HttpPut]
        [Route("{id}")]
        public ActionResult<Collection> Put(int id, [FromBody]Collection value)
        {
            var collection = _context.Collections.Find(id);
            if (collection == null)
            {
                return NotFound();
            }
            collection.Name = value.Name;
            _context.Collections.Update(collection);
            _context.SaveChanges();
            return collection;
        }

        [HttpDelete]
        [EnableCors("ApiReady")]
        [Route("{id}")]
        public ActionResult<Collection> Delete(int id)
        {
            var collection = _context.Collections.Find(id);
            if (collection == null)
            {
                return NotFound();
            }
            collection.Active = false;
            _context.Collections.Update(collection);
            _context.SaveChanges();
            return collection;
        }

    }
}
