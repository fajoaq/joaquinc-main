const getPathName = (originaPath) => {
  let pathName = originaPath;

  pathName = pathName.substring(0, pathName.lastIndexOf("/"));

  if (!pathName.length) pathName = originaPath;

  if (!pathName.length) pathName = "home";

  return pathName;
};

export { getPathName };
