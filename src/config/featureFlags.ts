/**
 * Feature Flags — Route Publishing Control
 *
 * Toggle these to show/hide routes from the public experience.
 * Setting a flag to `false` will:
 *   - Hide it from Navbar and Footer navigation
 *   - Redirect direct URL access to /home
 *   - Preserve all code, components, and assets for future activation
 *
 * To re-enable a route, simply set its flag to `true`.
 */

export const PUBLISHED_ROUTES = {
  home: true,
  about: true,
  work: true,
  workshops: false,
  stock: false,
  rates: false,
  presenting: false,
  blog: false,
  contact: true,
} as const;

/** Helper to check if a route path is published */
export function isRoutePublished(path: string): boolean {
  const key = path.replace('/', '') as keyof typeof PUBLISHED_ROUTES;
  return PUBLISHED_ROUTES[key] ?? false;
}
