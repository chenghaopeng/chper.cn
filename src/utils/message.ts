let node: HTMLElement
let timeout: number

const displayMessage = (message: string) => {
  if (node && document.body.contains(node)) {
    node.remove()
  }
  node = document.createElement('div')
  node.innerText = message
  node.className = 'message'
  node.onclick = () => {
    node.remove()
  }
  document.body.appendChild(node)
  if (timeout) {
    clearTimeout(timeout)
    timeout = 0
  }
  timeout = setTimeout(() => node.remove(), 3000)
}

export default displayMessage
