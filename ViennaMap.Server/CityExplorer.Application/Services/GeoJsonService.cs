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

    public async Task<GeoJsonFeatureCollection> GetAllAsync()
    {
        var places = await _repo.GetAllAsync();

        var features = places.Select(p => new GeoJsonFeature
        {
            Geometry = new
            {
                type = "Point",
                coordinates = new[] { p.Lng, p.Lat }
            },
            Properties = new
            {
                p.Id,
                p.Name,
                p.Category
            }
        }).ToList();

        return new GeoJsonFeatureCollection
        { 
            Features = features
        };
    }
}
