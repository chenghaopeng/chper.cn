import { fetchJSON } from './request'

export type App = {
  name: string;
  icon: string;
  description?: string;
  openInNew?: boolean;
  href: string;
  builtin?: boolean;
  repository?: string;
  url?: string;
}
export type Apps = App[]

export type Category = {
  name: string;
  icon: string;
  apps: Apps;
}
export type Categories = Category[]

export const getApps = () => {
  return fetchJSON('/data/apps.json') as Promise<{categories: Categories}>
}
