import { useMemo } from "react";
import { NvBreadcrumbs, NvBreadcrumb } from "@nova-design-system/nova-react";
import { Link, useLocation, matchPath } from "react-router";
import { breadcrumbRoutes } from "~/routes";

/**
 * Dynamic breadcrumbs component that generates breadcrumb items based on the
 * current route
 */
const Breadcrumbs = () => {
  const location = useLocation();

  // Generate breadcrumb items based on the current location path
  const breadcrumbItems = useMemo(() => {
    // Always start with Home
    const items = [
      {
        path: "/",
        name: "Home",
      },
    ];

    // If we're already at home, just return the home item
    if (location.pathname === "/") {
      return items;
    }

    // Split the current path into segments and build the breadcrumb items
    const pathSegments = location.pathname
      .split("/")
      .filter((segment) => segment);
    let currentPath = "";

    // Add each path segment to the breadcrumbs
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;

      // Try to find a matching route to get the title from the route config
      // In a real app, you would integrate this with your route configuration
      // This is a simplified approach
      const routeTitle = getTitleForPath(currentPath);

      items.push({
        path: currentPath,
        name: routeTitle || segment.charAt(0).toUpperCase() + segment.slice(1),
      });
    });

    return items;
  }, [location.pathname]);

  // Whether an item is the last one (current page)
  const isCurrentPage = (index: number) => {
    return index === breadcrumbItems.length - 1;
  };

  return (
    <NvBreadcrumbs key={location.pathname}>
      {breadcrumbItems.map((item, index) => (
        <NvBreadcrumb key={item.path} current={isCurrentPage(index)}>
          <Link to={item.path}>{item.name}</Link>
        </NvBreadcrumb>
      ))}
    </NvBreadcrumbs>
  );
};

// Helper function to get title for a path
// In a real application, this would connect to your route configuration
const getTitleForPath = (path: string) => {
  const matchedRoute = breadcrumbRoutes.find((route) => {
    // Use matchPath to handle dynamic route parameters (like :id)
    return matchPath({ path: route.path, end: true }, path);
  });

  return matchedRoute?.title;
};

Breadcrumbs.displayName = "Breadcrumbs";

export default Breadcrumbs;
