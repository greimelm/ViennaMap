
export type PlaceFeature = {
    type: "Feature";
    properties: {
        id: number;
        name: string;
        category: string;
    };
    geometry: {
        type: "Point";
        coordinates: [number, number];
    };
};

export type FeatureCollection = {
    type: "FeatureCollection";
    features: PlaceFeature[];
}
