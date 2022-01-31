export interface PlaceInterface {
    id: string;
    title: string;
    description: string;
    address: string;
    coordinates: google.maps.LatLngLiteral;
    image: string;
    creatorId: string;
}