export const OssPrefix = 'https://chper-assets.oss-cn-shanghai.aliyuncs.com/chper.cn'

export const DataPrefix = OssPrefix + '/data'

export const fetchJSON = (url: string) => {
  return fetch(url).then(res => res.json())
}

export const fetchData = (name: string) => {
  return fetchJSON(`${DataPrefix}/${name}.json`)
}
