using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using mvcbackend.Contexts;
using mvcbackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace mvcbackend.Controllers
{
    [Route("api/collections")]
    public class CollectionsController : Controller
    {

        private readonly MySqlContext _context;

        public CollectionsController(MySqlContext context)
        {
            _context = context;
        }

        // GET: api/collections
        [HttpGet]
        public IEnumerable<Collection> Get()
        {
            return _context.Collections.ToList();
        }

        // GET api/collections/5
        [HttpGet("{id}", Name = "GetCollection")]
        public ActionResult<Collection> Get(int id)
        {
            var item = _context.Collections.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }

        // POST api/collections
        [HttpPost]
        public IActionResult Post([FromBody]Collection item)
        {
            _context.Collections.Add(item);
            _context.SaveChanges();
            return CreatedAtRoute("GetCollection", new { id = item.Id }, item);
        }

        // PUT api/collections/5
        [HttpPut("{id}")]
        public ActionResult<Collection> Put(int id,[FromBody]Collection value)
        {
            var item = _context.Collections.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            item.Title = value.Title;

            _context.Collections.Update(item);
            _context.SaveChanges();
            return item;
        }

        // DELETE api/collections/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var collection = _context.Collections.Find(id);
            if (collection == null)
            {
                return NotFound();
            }

            _context.Collections.Remove(collection);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
