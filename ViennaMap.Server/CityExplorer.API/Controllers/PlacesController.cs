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
    public async Task<IActionResult> Get([FromQuery] string? category)
    {
        var data = await _geoJsonService.GetAllAsync(category);
        return Ok(data);
    }

}
