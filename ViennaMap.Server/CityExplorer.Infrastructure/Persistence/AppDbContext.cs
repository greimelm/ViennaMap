using Microsoft.EntityFrameworkCore;
using CityExplorer.Domain.Entities;

namespace CityExplorer.Infrastructure.Persistence;

public class AppDbContext : DbContext
{
    public DbSet<Place> Places => Set<Place>();

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }
}
