using System;
using swensen_api.Context;
using swensen_api.Entity;

namespace swensen_api
{
    public static class DbInitializer
    {
        public static async Task SeedAuthentication(EFContext context)
        {

            if (context == null)
            {
                throw new ArgumentNullException("Context");
            }

            if (context.Database == null)
            {
                throw new ArgumentNullException("Database");
            }

            context.Database.EnsureCreated();

            await context.Example.AddAsync(new ExampleModel()
            {
                UID = new Guid(),
                Name = "Example"
            });

            await context.Products.AddAsync(new Product()
            {

                NameProduct = "Test",
                Category = "A"
            });

            await context.SaveChangesAsync();
        }
    }
}
