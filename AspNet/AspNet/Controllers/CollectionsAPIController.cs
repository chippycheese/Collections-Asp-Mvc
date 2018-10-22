﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNet.Contexts;
using AspNet.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspNet.Controllers
{
    [Route("api/collections")]
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
        public IEnumerable<Collection> Get()
        {
            return _context.Collections.ToList();
        }   

        // GET: /<controller>/:id
        [HttpGet]
        [Route("{id}", Name = "GetCollection")]
        public ActionResult<Collection> Get(int id)
        {
            var collection = _context.Collections.Find(id);
            if (collection == null)
            {
                return NotFound();
            }
            return collection;
        }

        // GET: /<controller>/:id
        [HttpPost]
        [Route("post")]
        public IActionResult Post([FromBody]Collection value)
        {
            value.Active = true;
            _context.Collections.Add(value);
            _context.SaveChanges();
            return CreatedAtRoute("GetCollection", new { id = value.CollectionId }, value);
        }

        [HttpPut]
        [Route("{id}/put")]
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
            return CreatedAtRoute("GetCollection", new { id = value.CollectionId }, collection);
        }

        [HttpDelete]
        [Route("{id}/delete")]
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
            return CreatedAtRoute("GetCollection", new { id = collection.CollectionId }, collection);
        }

    }
}