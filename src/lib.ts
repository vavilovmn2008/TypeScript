
export function renderBlock(elementId: string, html: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const element:any = document.getElementById(elementId)

  element.innerHTML = html
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function renderToast(message: any, action: any = null) {
  let messageText = ''

  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }

  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null)
    }
  }
}