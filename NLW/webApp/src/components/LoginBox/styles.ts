import styled from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos';

export const Container = styled.div`
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    height: 100vh;
    width: 350px;
    background-color: var(--login-background);

    margin-left: 65vw;

`;

export const Image = styled.img`
    width: 350px;

    background: var(--gradient);
`;

export const Text = styled.p`
    color: var(--white);

    font-size: 30px;
    text-align: center;
`;

export const GithubIcon = styled(Github)`
    color: var(--black);
    width: 30px;
    margin-left: -4px;

`;

export const LoginButton = styled.a`
    display: flex;
    align-items: center;

    background: var(--yellow-button);
    padding: 8px 25px;
    border-radius: 1px;

    font-size: 15px;
    text-decoration: none;
    color: var(--black);

    transition: padding 0.2s ease-in-out;
    &:hover{
        padding: 10px 27px;
    }
`;