import React from "react";
import { Container, ImageCircle, MessageText, UserData, UserImage, UserName } from './styles';

export interface Props{
    avatar: string,
    user: string,
    message: string,
   };

   const Message: React.FC<Props> = ({ avatar, user, message }) => {
    return(
       <Container>
           <MessageText>
                {message}
           </MessageText>

            <UserData>
                <ImageCircle>
                    <UserImage src={avatar}/>
                </ImageCircle>

                <UserName>{user}</UserName>
            </UserData>

       </Container>
    )
};

export default Message;