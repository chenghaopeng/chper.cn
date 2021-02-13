const openInNewTab = (href: string) => {
  const a = document.createElement('a')
  a.href = href
  a.target = '_blank'
  document.body.appendChild(a)
  a.click()
  a.remove()
}

export default openInNewTab
