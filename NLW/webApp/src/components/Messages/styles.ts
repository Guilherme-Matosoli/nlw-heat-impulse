import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    width: 400px;
    height: auto;

    padding: 10px;
    border-bottom: 3px solid #161515;

    &:nth-child(2n){
        margin-left: 100px;
    }

`;

export const MessageText = styled.p`
    color: var(--coment-color);
    font-size: 20px;
`;

export const UserData = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const ImageCircle = styled.div`

    display: flex;
    align-items: center;

   padding: 2px;
   background: linear-gradient(100deg, #ff008e 0%, #ffcd1e 100%);
   border-radius: 50%;
   line-height: 0;
`;

export const UserImage = styled.img`
    width: 50px;
    height: 50px;

    border: 4px solid var(--body-background);
    border-radius: 50%;
`;

export const UserName = styled.p`
    color: var(--coment-color);
    font-size: 15px;
`;