using Microsoft.AspNetCore.Mvc;
using ViennaMap.Server.CityExplorer.Application.Interfaces;

namespace ViennaMap.Server.CityExplorer.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class PlacesController : ControllerBase
    {
        private readonly IPlaceService _placeService;
        public PlacesController(IPlaceService placeService)
        {
            _placeService = placeService;
        }
        [HttpGet]
        public async Task<IActionResult> Get(string? category)
        {
            var places = await _placeService.GetAllAsync();

            if (!string.IsNullOrEmpty(category) && category != "all")
                places = places.Where(p => p.Category == category);

            return Ok(places);
        }
    }
}
