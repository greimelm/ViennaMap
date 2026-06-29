using CityExplorer.Domain.Entities;
using CityExplorer.Infrastructure;

public class GeoJsonService
{
    private readonly AppDbContext _context;

    public GeoJsonService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<GeoJsonFeatureCollection> GetPlacesAsync(string? category)
    {
        var query = _context.Places.AsQueryable();

        if (!string.IsNullOrEmpty(category) && category != "all")
            query = query.Where(p => p.Category == category);

        var places = await query.ToListAsync();

        var features = places.Select(p => new GeoJsonFeature
        {
            Properties = new
            {
                p.Id,
                p.Name,
                p.Category
            },
            Geometry = new
            {
                type = "Point",
                coordinates = new[] { p.Longitude, p.Latitude }
            }
        }).ToList();

        return new GeoJsonFeatureCollection
        { 
            Features = features
        };
    }
}