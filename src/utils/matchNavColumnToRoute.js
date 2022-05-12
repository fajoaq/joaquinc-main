const matchIconColumnToRoute = (arr, pathName) => {
  let isActive = false;

  arr.forEach((iconData) => {
    if (iconData.name == pathName) isActive = true;
  });

  return isActive;
};

export { matchIconColumnToRoute };
