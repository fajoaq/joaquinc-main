const matchNameToRoute = (name, href) => {
  // format the url path to "/route"
  // extract the route name "route"
  let url = window.location.href;
  url = url.substring(url.lastIndexOf("/")).toLowerCase();
  let route = href.substring(href.lastIndexOf("/")).toLowerCase();
  let routeName = url.substring(url.lastIndexOf("/") + 1).toLowerCase();

  if (routeName.length == 0) routeName = "home"; // home page route is empty string

  if (url == route || name.includes(routeName)) return true;

  return false;
};

const matchIconArrToRoute = (arr) => {
  let isActive = false;
  // format the url path to "/route"
  // extract the route name "route"
  let url = window.location.href;
  url = url.substring(url.lastIndexOf("/")).toLowerCase();
  let routeName = url.substring(url.lastIndexOf("/") + 1).toLowerCase();

  if (routeName.length == 0) routeName = "home"; // home page route becomes empty string

  arr.forEach((iconData) => {
    let route = iconData.href
      .substring(iconData.href.lastIndexOf("/"))
      .toLowerCase();

    if (url == route || iconData.name.includes(routeName)) isActive = true;
  });
  console.log(isActive);
  return isActive;
};

export { matchNameToRoute, matchIconArrToRoute };
