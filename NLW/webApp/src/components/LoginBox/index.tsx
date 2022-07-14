import { Container, GithubIcon, Image, LoginButton, Text } from "./styles";
import bannergirl from '../../assets/banner-girl.png'
import { useContext, useEffect } from "react";
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/auth";



const LoginBox = () => {
    const { signInUrl } = useContext(AuthContext);
    


    return (
        <Container>
            <Image src={bannergirl}/>

            <Text>Envie e compartilhe<br/> sua mensagem</Text>

            <LoginButton href={signInUrl}>
                <GithubIcon />

                <p>ENTRAR COM GITHUB</p>
            </LoginButton>
        </Container>
    )
}

export default LoginBox;