using Microsoft.EntityFrameworkCore;
using CityExplorer.Application.Services;
using CityExplorer.Application.Interfaces;
using CityExplorer.Infrastructure.Persistence;
using CityExplorer.Infrastructure.Repositories;

var builder = WebApplication.CreateBuilder(args);

//DB
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=cityexplorer.db"));

//DI
builder.Services.AddScoped<IPlaceRepository, PlaceRepository>();
builder.Services.AddScoped<GeoJsonService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddOpenApi();



builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod());
}); //insecure?


var app = builder.Build();

app.UseDefaultFiles();
app.MapStaticAssets();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("AllowFrontend");

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
