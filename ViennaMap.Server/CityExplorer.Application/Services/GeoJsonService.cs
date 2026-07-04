using CityExplorer.Application.DTOs;
using CityExplorer.Application.Interfaces;

namespace CityExplorer.Application.Services;

public class GeoJsonService
{
    private readonly IPlaceRepository _repo;

    public GeoJsonService(IPlaceRepository repo)
    {
        _repo = repo;
    }

    public async Task<GeoJsonFeatureCollection> GetAllAsync(string? category)
    {
        var places = await _repo.GetPlacesAsync(category);

        return new GeoJsonFeatureCollection
        {
            Features = places.Select(p => new GeoJsonFeature
            {
                Geometry = new Geometry
                {
                    Coordinates = new[] { p.Lng, p.Lat }
                },
                Properties = new Properties
                {
                    Name = p.Name,
                    Category = p.Category
                }
            }).ToList()
        };
    }
}
