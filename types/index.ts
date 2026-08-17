export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type PageProps<T = Record<string, unknown>> = T & {
  title?: string;
};
