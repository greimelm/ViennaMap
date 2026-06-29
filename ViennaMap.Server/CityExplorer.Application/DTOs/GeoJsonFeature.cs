namespace CityExplorer.Application.DTOs;
    
public class GeoJsonFeature
{
    public string Type { get; set; } = "Feature";
    public object Properties { get; set; } = default!;
    public object Geometry { get; set; } = default!;
}
