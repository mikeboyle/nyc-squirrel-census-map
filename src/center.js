export const center = (sightings) => {
  let minX = Number(sightings[0]['x']);
  let maxX = Number(sightings[0]['x']);
  let minY = Number(sightings[0]['y']);
  let maxY = Number(sightings[0]['y']);

  for (let sighting of sightings) {
    const currentX = Number(sighting.x);
    const currentY = Number(sighting.y);
    if (currentX < minX) {
      minX = currentX;
    }
    if (currentX > maxX) {
      maxX = currentX;
    }

    if (currentY < minY) {
      minY = currentY;
    }

    if (currentY > maxY) {
      maxY = currentY;
    }
  }

  return {
    x: (minX + maxX) / 2,
    y: (minY + maxY) / 2,
  };
};
