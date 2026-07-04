namespace CityExplorer.Application.DTOs;
    
public class GeoJsonFeature
{
    public string Type { get; set; } = "Feature";
    public Geometry Geometry { get; set; } = new();
    public Properties Properties { get; set; } = new();
}
