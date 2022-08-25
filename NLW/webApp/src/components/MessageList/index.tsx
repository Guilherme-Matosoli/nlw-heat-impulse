import { Container, Header, Image, Comments, ContainerMessages } from "./styles";
import logo from '../../assets/logo.svg';
import Messages from "../Messages";
import { useEffect, useState } from "react";
import io from "socket.io-client";

import { api } from '../../services/api';

interface Message {
    id: string,
    text: string,
    user:{
        name: string;
        avatar_url: string;
    }
}

const messagesQueue: Message[] = [];

const socket = io('http://localhost:4000')

socket.on('new_message', (newMessage: Message) => {
    messagesQueue.push(newMessage)
})

export const MessageList = () => {

    const [ messages, setMessages ] = useState<Message[]>([]);

    useEffect (() => {
        const timer = setInterval(() => {
            if (messagesQueue.length > 0){
                setMessages(prevstate => [
                    messagesQueue[0],
                    prevstate[0],
                    prevstate[1],
                ].filter(Boolean))

                messagesQueue.shift()
            }
        }, 3000)
    }, [])

   useEffect( () => {

    api.get<Message[]>('messages/last3').then(response => {
        setMessages(response.data)
        // console.log(response.data)

    })  }, [] );

    return(
        <Container>
            <Header>
                <Image src={logo} alt="Dowhile 2022" />
            </Header>
                 
            <Comments>

                {messages.map( (message) => {
                    return(
                        <Messages key={message.id} avatar={message.user.avatar_url} message={message.text} user={message.user.name}  />
                    )
                } )}

            </Comments>

        </Container>
    )
};

export default MessageList;

