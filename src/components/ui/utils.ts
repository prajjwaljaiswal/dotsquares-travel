/**
 * Joins truthy class-name fragments together, filtering out falsy values.
 * Used across all components in src/components/ui to compose variant/size classes.
 *
 * @example
 * cn('ds-btn', 'ds-btn--md', isActive && 'ds-btn--active')
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
