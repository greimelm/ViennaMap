using ViennaMap.Server.CityExplorer.Application.Interfaces;
using ViennaMap.Server.CityExplorer.Application.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddScoped<IPlaceService, PlaceService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod());
}); //insecure?

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=places.db"));

builder.Services.AddScoped<GeoJsonService>();

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
