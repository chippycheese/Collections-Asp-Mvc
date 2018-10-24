using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNet.Contexts;
using AspNet.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspNet.Controllers
{
    [Route("api/items")]
    public class ItemsAPIController : Controller
    {

        private readonly MySqlContext _context;

        public ItemsAPIController(MySqlContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet("")]
        public IEnumerable<Item> Get()
        {
            return _context.Items.ToList();
        }

        [HttpGet("collection/{collectionId}")]
        public IEnumerable<Item> GetCollection(int collectionId)
        {
            return _context.Items.Where(m => m.CollectionId == collectionId).ToList();
        }

        [HttpGet("{id}"), ActionName("GetCollectionItem")]
        public async Task<ActionResult<Item>> Get(int id)
        {
            return await _context.Items.FindAsync(id);
        }

        // POST api/values
        [HttpPost("")]
        public async Task<ActionResult<Item>> Post([FromBody]Item value)
        {
            value.Active = true;
            _context.Add(value);
            await _context.SaveChangesAsync();
            await UpdateCollection(value.CollectionId);
            return value;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Item>> Put(int id, [FromBody]Item value)
        {
            var db_item = await _context.Items.FindAsync(id);
            db_item.Name = value.Name;
            db_item.Collected = value.Collected;
            db_item.Price = value.Price;
            await _context.SaveChangesAsync();
            await UpdateCollection(db_item.CollectionId);
            return db_item;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Item>> Delete(int id)
        {
            var db_item = await _context.Items.FindAsync(id);
            db_item.Active = false;
            _context.Update(db_item);
            await _context.SaveChangesAsync();
            await UpdateCollection(db_item.CollectionId);
            return db_item;
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
