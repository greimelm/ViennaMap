namespace ViennaMap.Server.CityExplorer.Domain.Entities
{
    public class Place
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public double Lat {  get; set; }
        public double Lng { get; set; }
    }
}
