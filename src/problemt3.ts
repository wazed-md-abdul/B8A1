function formatCoordinate(coordinate: readonly [number, number, string]): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location ${locationName} (${latitude}, ${longitude})`;
}