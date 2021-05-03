
export interface GooglePlacesAddressChangeData {
    address_components: object[],
    formatted_address: string,
    geometry: GooglePlacesAddressGeometry,
    html_attributes: object[],
    place_id: string,
    utc_offset: () => object
}

export interface GooglePlacesAddressGeometry {
    location:GooglePlacesAddressLocation
}

export interface GooglePlacesAddressLocation {
    lat: () => any,
    lng: () => any
}