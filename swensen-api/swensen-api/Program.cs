using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.Extensions.DependencyInjection;
using swensen_api;
using swensen_api.Context;
using swensen_api.Repositories;
using swensen_api.Services;
using Newtonsoft.Json;

var builder = WebApplication.CreateBuilder(args);

#region Config Cors origin
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});
#endregion

//builder.Services
//    .AddControllersWithViews()
//    .AddNewtonsoftJson(options =>
//    {
//        options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
//    });

builder.Services.AddDbContext<EFContext>(c =>
{
    c.UseInMemoryDatabase("EfDb")
    .ConfigureWarnings(w => w.Ignore(InMemoryEventId.TransactionIgnoredWarning));
});

// Add services to the container.
builder.Services.AddScoped<IProductService, ProductService>();

//Add Repo here
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped(typeof(IAsyncRepository<>), typeof(EfRepository<>));
builder.Services.AddDbContext<EFContext>();


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

#region DB Initializer
using (var scope = builder.Services.BuildServiceProvider().CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var context = services.GetRequiredService<EFContext>();
        DbInitializer.SeedAuthentication(context);
    }
    catch (Exception ex)
    {
        // Log the error or handle it appropriately
        Console.WriteLine("An error occurred while seeding the database: " + ex.Message);
    }
}


#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAuthentication();
app.UseRouting();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();

