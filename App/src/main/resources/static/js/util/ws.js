import SockJS from 'sockjs-client'
import {Stomp} from "@stomp/stompjs"
import {connect} from './util//ws'
const stompClient = new StompJs.Client({
    brokerURL: 'ws://localhost:8080/gs-guide-websocket'
})

stompClient.onConnect = (frame) => {
    console.log('Connected: ' + frame)
    stompClient.subscribe('/topic/activity', message => {
        //showGreeting(JSON.parse(greeting.body).content)
    })
}

stompClient.onWebSocketError = (error) => {
    console.error('Error with websocket', error);
}

stompClient.onStompError = (frame) => {
    console.error('Broker reported error: ' + frame.headers['message'])
    console.error('Additional details: ' + frame.body)
}


 export function connect() {
    stompClient.activate()
}

export function disconnect() {
    stompClient.deactivate()
    console.log("Disconnected")
}

export function sendMessage(message) {
    stompClient.publish({
        destination: "/app/changeMessage",
        body: JSON.stringify(message)
    })
}