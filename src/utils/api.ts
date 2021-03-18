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

export type TimeLine = {
  time: string;
  content: string | string[];
}

export type WebHistory = {
  timelines: TimeLine[];
  curtain?: string;
}

export const getHistory = () => {
  return fetchJSON('/data/history.json') as Promise<WebHistory>
}

export type Friend = {
  name: string;
  href: string;
  icon?: string;
}

export type Friends = Friend[]

export const getFriends = () => {
  return fetchJSON('/data/friends.json') as Promise<{friends: Friends}>
}
