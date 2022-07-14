import { Container, Header, Image, Comments, ContainerMessages } from "./styles";
import logo from '../../assets/logo.svg';
import Messages from "../Messages";
import { useEffect, useState } from "react";

import { api } from '../../services/api';

interface Message {
    id: string,
    text: string,
    user:{
        name: string;
        avatar_url: string;
    }
}

export const MessageList = () => {

    const [ messages, setMessages ] = useState<Message[]>([]);

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

