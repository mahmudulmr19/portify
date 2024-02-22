/**
 * Public routes accessible without authentication
 * @type {string[]}
 */
const publicRoutes = ["/", "/contact", "/support", "/legal/:path*", "/pricing"];

/**
 * Authentication routes requiring user authentication
 * @type {string[]}
 */
const authRoutes = ["/auth/:path*"];

/**
 * Prefix for authentication-related API routes
 * @type {string}
 */
const authPrefix = "/api/auth";

/**
 * Default redirect URL after successful login
 * @type {string}
 */
const DEFAULT_LOGIN_REDIRECT_URL = "/";

/**
 * Checks if the provided `pathname` matches any route in the given array of `routes`.
 * @param {string[]} routes - Array of route patterns to match against.
 * @param {string} pathname - The path to check for a match.
 * @returns {boolean} - True if a match is found, false otherwise.
 */
function matchRoute(routes: string[], pathname: string) {
  return routes.some((route) => {
    if (route.endsWith("/:path*")) {
      return pathname.startsWith(route.slice(0, -8));
    }
    return pathname === route;
  });
}

export {
  publicRoutes,
  authRoutes,
  authPrefix,
  DEFAULT_LOGIN_REDIRECT_URL,
  matchRoute,
};
