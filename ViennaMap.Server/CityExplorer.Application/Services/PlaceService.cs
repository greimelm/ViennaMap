using ViennaMap.Server.CityExplorer.Application.Interfaces;
using ViennaMap.Server.CityExplorer.Domain.Entities;

namespace ViennaMap.Server.CityExplorer.Application.Services
{
    public class PlaceService : IPlaceService
    {
        public Task<IEnumerable<Place>> GetAllAsync()
        {
            var places = new List<Place>
            {
                new Place { Id = 1, Name = "Cafe A", Category = "cafe", Lat = 48.2, Lng = 16.37 },
                new Place { Id = 2, Name = "Bar B", Category = "bar", Lat = 48.21, Lng = 16.38 }
            };

            return Task.FromResult<IEnumerable<Place>>(places);
        }
    }
}
