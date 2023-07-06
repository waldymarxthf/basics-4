import { cookies } from './storage.js'
import { parseMessage } from './logic.js'


const updateSocket = (message) => {
  const url = 'wss://edu.strada.one/websockets'
  const token = cookies.getCode()
  const socket = new WebSocket(`${url}?${token}`)

  socket.onopen = () => {
    socket.send(JSON.stringify({ text: message }))
  }

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    parseMessage(data)
  }

  socket.onclose = (event) => {
    if (event.wasClean) {
      console.log(
        `Соединение закрыто без ошибок, код: ${event.code}, причина: ${event.reason}`
      )
    }

    if (!event.wasClean) {
      console.log(`Соединение закрыто принудительно, либо произошла ошибка`)
    }
  }

  socket.onerror = (error) => {
    console.log(`Ошибка: ${error}`)
  }
}

export { updateSocket }
