import ReactDomServer from 'react-dom/server'

export default function reactToDom(reactElement, onClick) {
  const el = document.createElement('div')
  el.insertAdjacentHTML(
    'afterbegin',
    ReactDomServer.renderToStaticMarkup(reactElement)
  )
  onClick !== undefined && el.addEventListener('click', onClick)
  return el
}
