using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNet.Contexts;
using AspNet.Models;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Cors;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspNet.Controllers
{
    [Route("api/items")]
    [EnableCors("ApiReady")]
    public class ItemsAPIController : Controller
    {

        private readonly MySqlContext _context;

        public ItemsAPIController(MySqlContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet("")]
        public ActionResult<string> Get()
        {
            var collectionItems = _context.Items.ToList();
            return JsonConvert.SerializeObject(collectionItems, Formatting.Indented);
        }

        [HttpGet("collection/{collectionId}")]
        public ActionResult<string> GetCollection(int collectionId)
        {
            var collectionItems = _context.Items.Where(m => m.CollectionId == collectionId).Where(m => m.Active == true).ToList();
            return JsonConvert.SerializeObject(collectionItems, Formatting.Indented);
        }

        [HttpGet("{id}"), ActionName("GetCollectionItem")]
        public async Task<ActionResult<string>> Get(int id)
        {
            return JsonConvert.SerializeObject(await _context.Items.FindAsync(id), Formatting.Indented);
        }

        // POST api/values
        [HttpPost("")]
        public async Task<ActionResult<string>> Post([FromBody]Item value)
        {
            value.Active = true;
            _context.Add(value);
            await _context.SaveChangesAsync();
            await UpdateCollection(value.CollectionId);
            return JsonConvert.SerializeObject(value, Formatting.Indented);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<ActionResult<string>> Put(int id, [FromBody]Item value)
        {
            var db_item = await _context.Items.FindAsync(id);
            db_item.Name = value.Name;
            db_item.Collected = value.Collected;
            db_item.Price = value.Price;
            await _context.SaveChangesAsync();
            await UpdateCollection(db_item.CollectionId);
            return JsonConvert.SerializeObject(db_item, Formatting.Indented);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<string>> Delete(int id)
        {
            var db_item = await _context.Items.FindAsync(id);
            db_item.Active = false;
            _context.Update(db_item);
            await _context.SaveChangesAsync();
            await UpdateCollection(db_item.CollectionId);
            return JsonConvert.SerializeObject(db_item, Formatting.Indented);
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
