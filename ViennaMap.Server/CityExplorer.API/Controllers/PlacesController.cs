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
        public IActionResult GetPlaces()
        {
            var geoJson = new
            {
                type = "FeatureCollection",
                features = new[]
                {
                    new
                    {
                        type = "FeatureCollection",
                        features = new[]
                        {
                            new
                            {
                                type = "Feature",
                                properties = new
                                {
                                    id = 1,
                                    name = "Cafe Central",
                                    category = "cafe"
                                },
                                geometry = new
                                {
                                    type = "Point",
                                    coordinates = new[] {16.365, 48.210}
                                }
                            },
                            new
                            {
                                type = "Feature",
                                properties = new
                                {
                                    id = 2,
                                    name = "Bar Example",
                                    category = "bar"
                                },
                                geometry = new
                                {
                                    type = "Point",
                                    coordinates = new[] {16.37, 48.208 }
                            }
                        }
                    }
                }
            }
                return Ok(geoJson);
        }

        //public async Task<IActionResult> Get(string? category)
        //{
        //    var places = await _placeService.GetAllAsync();

        //    if (!string.IsNullOrEmpty(category) && category != "all")
        //        places = places.Where(p => p.Category == category);

        //    return Ok(places);
        //}
    }
}
