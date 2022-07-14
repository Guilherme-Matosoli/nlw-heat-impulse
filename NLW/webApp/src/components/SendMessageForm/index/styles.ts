import styled from 'styled-components';
import { SignOut } from "@styled-icons/fluentui-system-regular/SignOut";

export const Container = styled.div`
    position: absolute;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 700px;
`;


export const BackgroundImage = styled.img`
    position: absolute;
    right: 0;
    z-index: -1;

    width: 350px;
    height: 100vh;
`;

export const SendMessageArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;

    background-color: var(--login-background);
    width: 400px;
    height: 550px;

    border-radius: 5px;

    padding: 20px;
`;

export const SignOutIcon = styled(SignOut)`
    position: absolute;

    width: 35px;
    color: var(--coment-color);

    transition: width 0.1s ease-in-out;

    &:hover{
        width: 40px;
    }
`;

export const SingOutButton = styled.button`
    position: absolute;
    background-color: transparent;
    border: none;

    cursor: pointer;
`;

export const UserInfoWrapper = styled.div``;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    width: auto;
    height: auto;

    margin: 0 auto;
`;

export const UserImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background: linear-gradient(100deg, #ff008e 0%, #ffcd1e 100%);

    width: 100px;
    height: 100px;
`;

export const UserImage = styled.img`
    width: 95px;
    height: 95px;

    border-radius: 50%;
    border: 6px var(--body-background) solid;
`;

export const UserName = styled.span`
    color: var(--white);
    font-size: 25px;
    font-weight: lighter;
`;

export const UserLink = styled.a`
    color: var(--coment-color);
    opacity: 0.5;
    font: 15px;

    text-decoration: none;

    transition: opacity 0.1s ease-in-out;
    &:hover{
        opacity: 1;
    }
`;

export const MessageForm = styled.form`
    width: 350px;
    height: auto;
`;

export const MessageTitle = styled.h2`
    display: flex;
    align-items: center;

    width: 100%;
    height: 50px;

    padding: 10px;

    background-color: #29292E;
    color: var(--coment-color);

    font-size: 20px;
    font-weight: 400;
    font-family: sans-serif;
`;

export const MessageArea = styled.div`
    display: flex;
    flex-direction: column;


    width: 100%;
    height: auto;

    background-color: #202024;

    padding: 10px;
`;

export const MessageBox = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 10px;

    border: none;
    outline: none;
    resize: none;

    background-color: inherit;
    color: var(--coment-color);
`;

export const SendMessageButton = styled.button`
    width: 150px;
    height: 50px;

    padding: 10px 20px;
    border: none;
    outline: none;

    color: var(--white);
    background-color: #FF008E;
    border-radius: 5px;

    cursor: pointer;
    align-self: flex-end;
    
    &:hover{
        transition: 0.3s ease-in-out;
        width: 170px;
    }
`;