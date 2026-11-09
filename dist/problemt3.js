function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Location ${locationName} (${latitude}, ${longitude})`;
}
export {};
