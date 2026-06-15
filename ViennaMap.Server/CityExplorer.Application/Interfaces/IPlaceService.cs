using ViennaMap.Server.CityExplorer.Domain.Entities;

namespace ViennaMap.Server.CityExplorer.Application.Interfaces
{
    public interface IPlaceService
    {
        Task<IEnumerable<Place>> GetAllAsync();
    }
}
