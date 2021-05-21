import styled from 'styled-components';

export const Section = styled.section`
    background-color: #f0f2f5;
    width: 100%;
`;

export const Body = styled.div`
    padding: 100px 0;
    display: flex;
    justify-content: space-around;
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    >h2{
        font-family: inherit;
        color: #1877f2;
        font-size: 40px;
    }
    >.access{
        font-size: 24px;
        line-height: 28px;
        padding-bottom: 5px;
    }
    >.click{
        padding-bottom: 30px;
        color: #606770;
        font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
        font-size: 15px;
    }
`;

export const Accounts = styled.div`
    display: flex;
`;

export const Profile = styled.img`
    width: 160px;
    height: 160px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const CardProfile = styled.div`
    display: flex;
    align-itens: center;
    flex-direction: column;
    text-align: center;
    background-color: #FFF;
    width: 160px;
    border-radius: 10px;
    margin: 0 10px;
    transition: .4s;
    >a{
        padding: 10px 0;
    }
    &:hover{
        box-shadow: 0 0 .4em black;
    }
`;

export const Form = styled.div`

`;