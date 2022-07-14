import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body{
        background: var(--body-background);
        overflow-y: hidden;
    }

    :root{
        --gradient: radial-gradient(50% 50% at 50% 50%, #FFC323 0%, rgba(18, 18, 20, 0) 100%);
        --white: #fff;
        --black: #09090A; 
        --coment-color: #E1E1E6;
        --yellow-button: #FFCD1E;
        --login-background: #17171A;
        --body-background: #121214;
    }

`