using CityExplorer.Domain.Entities;
using CityExplorer.Infrastructure.Persistence;

public static class InitialPlaceSeeder
{
    public static void Seed(AppDbContext context)
    {
        if (context.Places.Any())
            return;

        var places = new List<Place>
        {
            new Place { Name = "Cafe Central", Category = "cafe", Lat = 48.210033, Lng = 16.363449 },
            new Place { Name = "Demel", Category = "cafe", Lat = 48.209373, Lng = 16.367222 },
            new Place { Name = "Cafe Sperl", Category = "cafe", Lat = 48.198904, Lng = 16.362278 },

            new Place { Name = "1516 Brewing Company", Category = "bar", Lat = 48.205226, Lng = 16.368013 },
            new Place { Name = "Loos American Bar", Category = "bar", Lat = 48.207596, Lng = 16.369934 },
            new Place { Name = "Praterdome", Category = "bar", Lat = 48.216247, Lng = 16.400377 },

            new Place { Name = "Figlmüller", Category = "restaurant", Lat = 48.208517, Lng = 16.377131 },
            new Place { Name = "Plachutta Wollzeile", Category = "restaurant", Lat = 48.207996, Lng = 16.379663 },
            new Place { Name = "Zum Schwarzen Kameel", Category = "restaurant", Lat = 48.210658, Lng = 16.369239 },

            new Place { Name = "Naschmarkt Stand", Category = "restaurant", Lat = 48.198451, Lng = 16.361603 },
            new Place { Name = "Donaukanal Bar", Category = "bar", Lat = 48.218105, Lng = 16.378207 },
            new Place { Name = "Cafe Landtmann", Category = "cafe", Lat = 48.213568, Lng = 16.361969 },

            new Place { Name = "Billa Praterstern", Category = "store", Lat = 48.217560, Lng = 16.391602 },
            new Place { Name = "Spar Mariahilfer Straße", Category = "store", Lat = 48.198765, Lng = 16.343210 },

            new Place { Name = "TU Wien", Category = "education", Lat = 48.198545, Lng = 16.369784 },
            new Place { Name = "Uni Wien Hauptgebäude", Category = "education", Lat = 48.213192, Lng = 16.360041 }
    };

        context.Places.AddRange(places);
        context.SaveChanges();
    }
}
