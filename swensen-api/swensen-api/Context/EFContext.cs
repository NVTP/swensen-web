using System;
using Microsoft.EntityFrameworkCore;
using swensen_api.Entity;

namespace swensen_api.Context
{
    public class EFContext : DbContext
    {

        public EFContext(DbContextOptions<EFContext> options) : base(options)
        {
            //this.Database.SetCommandTimeout(300);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase("InMemoryDatabaseName");
            base.OnConfiguring(optionsBuilder);

        }

        // set model and database here
        // and Mock useInmemoryDatabase
        public DbSet<ExampleModel> Example { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        }


    }
}

