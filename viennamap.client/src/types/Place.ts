export interface Place {
    id: number;
    name: string;
    category: "cafe" | "bar" | "restaurant";
    lat: number;
    lng: number;
    description: string;
}
