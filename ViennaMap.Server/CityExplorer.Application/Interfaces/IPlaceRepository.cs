using CityExplorer.Domain.Entities;

namespace CityExplorer.Application.Interfaces;

public interface IPlaceRepository
{
    Task<List<Place>> GetAllAsync();
}
