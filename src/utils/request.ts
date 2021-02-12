export const fetchJSON = (url: string) => {
  return fetch(url).then(res => res.json())
}
