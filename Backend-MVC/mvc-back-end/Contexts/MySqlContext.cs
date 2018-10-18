using System;
using mvcbackend.Models;
using Microsoft.EntityFrameworkCore;

namespace mvcbackend.Contexts
{
    public class MySqlContext :DbContext
    {
        public MySqlContext(DbContextOptions<MySqlContext> options)
        : base(options)
        {
        }
        public DbSet<mvcbackend.Models.Collection> Collections { get; set; }
    }

}