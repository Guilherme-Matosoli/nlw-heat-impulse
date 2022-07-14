import React, { useContext, useState, FormEvent } from "react";
import { BackgroundImage, Container, SendMessageArea, SignOutIcon, SingOutButton, UserInfo, UserImageBox, UserImage, UserName, UserLink, MessageForm, MessageTitle, UserInfoWrapper, MessageArea, MessageBox, SendMessageButton } from './styles';
import background from '../../../assets/background.svg';
import { AuthContext } from "../../../contexts/auth";
import { Github } from '@styled-icons/boxicons-logos/Github';
import { api } from "../../../services/api";

const SendMessageForm = () => {
    const { user } = useContext(AuthContext);
    const profileLink = `https://github.com/${user?.login}`;
    const [message, setMessage] = useState('');

    function logOut(){
        localStorage.clear();
        location.reload()
    }; 

    async function handleSendMessage(event: FormEvent) {
        event.preventDefault();

        if (!message.trim()){
            return;
        };


        await api.post('messages', { message });

        setMessage('');
    };


    return (
        <Container>
            <BackgroundImage src={background}/>

            <SendMessageArea>

                    <SingOutButton onClick={() => logOut()}>

                        <SignOutIcon />

                    </SingOutButton>

                    <UserInfoWrapper>

                        <UserInfo>

                            <UserImageBox> 

                                <UserImage src={user?.avatar_url} alt={user?.name} />

                            </UserImageBox>


                            <UserName>
                                {user?.name}
                            </UserName>


                            <UserLink href={profileLink} target="_blank">
                                <Github size="20" color="#E1E1E6"/>
                                {user?.login}
                            </UserLink>

                        </UserInfo>

                    </UserInfoWrapper>



                    <MessageForm onSubmit={handleSendMessage}>

                        <MessageTitle>Mensagem</MessageTitle>

                        <MessageArea>

                            <MessageBox
                             name="message"
                             id="message"
                             placeholder="Escreva aqui o que vier em sua mente."
                             onChange={event => setMessage(event.target.value)}
                             value={message}
                               />

                            <SendMessageButton type="submit"> Enviar mensagem </SendMessageButton>


                        </MessageArea>

                    </MessageForm>

            </SendMessageArea>


        </Container>
    )
}

export default SendMessageForm;