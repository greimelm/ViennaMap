using Microsoft.AspNetCore.Mvc;
using CityExplorer.Application.Services;

namespace CityExplorer.API.Controllers;

[ApiController]
[Route("api/[controller]")]

public class PlacesController : ControllerBase
{
    private readonly GeoJsonService _geoJsonService;

    public PlacesController(GeoJsonService geoJsonService)
    {
        _geoJsonService = geoJsonService;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var data = await _geoJsonService.GetAllAsync();
        return Ok(data);
    }

    [HttpGet]
    public async Task<IActionResult> GetPlaces([FromQuery] string? category)
    {
        var places = await _repo.GetPlacesAsync(category);
        return Ok(places);
    }

}
