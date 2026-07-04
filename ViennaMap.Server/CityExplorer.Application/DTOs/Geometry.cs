namespace CityExplorer.Application.DTOs;

public class Geometry
{
    public string Type { get; set; } = "Point";
    public double[] Coordinates { get; set; } = Array.Empty<double>();
}
