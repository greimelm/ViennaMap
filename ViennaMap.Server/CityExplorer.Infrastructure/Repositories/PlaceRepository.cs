using Microsoft.EntityFrameworkCore;
using CityExplorer.Application.Interfaces;
using CityExplorer.Domain.Entities;
using CityExplorer.Infrastructure.Persistence;

namespace CityExplorer.Infrastructure.Repositories;

public class PlaceRepository : IPlaceRepository
{
    private readonly AppDbContext _context;

    public PlaceRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<Place>> GetAllAsync()
    {
        return await _context.Places.ToListAsync();
    }
}
