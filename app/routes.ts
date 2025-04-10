import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/layout/layout.tsx", [
    index("routes/home.tsx"),
    route("support", "routes/support.tsx"),
  ]),
] satisfies RouteConfig;

export const breadcrumbRoutes = [
  { path: "/users", title: "Users" },
  { path: "/users/:id", title: "Rules" },
  { path: "/settings", title: "Settings" },
  // Add more routes as needed
] as const;
