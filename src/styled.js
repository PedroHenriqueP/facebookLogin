import styled from 'styled-components';

export const Section = styled.section`
    background-color: #f0f2f5;
    width: 100%;
    height: 100vh;
`;

export const Body = styled.div`
    padding: 100px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
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

export const AddAccount = styled.img`
    width: 40px;
    height: 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin: auto;
`;

export const LimitProfile = styled.div`
    width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    background-color: #f0f2f5;
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
    box-shadow: 0 0 .1em #898989;
    transition: .4s;
    cursor: pointer;
    >a{
        padding: 10px 0;
        font-family: SFProText-Medium, Helvetica, Arial, sans-serif;
        color: #4b4f56;
    }
    >.add{
        background-color: #f0f2f5;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    &:hover{
        box-shadow: 0 0 .4em black;
    }
`;

export const Form = styled.div`
    background-color: #fff;
    box-shadow: 0 0 .8em #dddfe2;
    border-radius: 10px;
    height: 340px;
    display: flex;
    flex-direction: column;
    >a{
        color: #1c1e21;
        font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
        font-size: 14px;
        text-align: center;
    }
`;

export const Itens = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    >a{
        text-align: center;
        margin: 10px 0;
        color: #1877f2;
        font-size: 15px;
        text-decoration: none;
    }
    >.create{
        background-color: #5db82c;
        color: #fff;
        width: 190px;
        border-radius: 6px;
        font-size: 20px;
        line-height: 48px;
        font-family: inherit;
        margin: 20px auto;
        cursor: pointer;
    }
    >hr{
	    border-top: 10px solid #094CFA;
    }
`;

export const Line = styled.div`
    border-top: 1px solid #dddfe2;
`;

export const Login = styled.input`
    margin-bottom: 20px;
    font-family: inherit;
    border-radius: 6px;
    font-size: 17px;
    padding: 14px 16px;
    width: 330px;
    border: 1px solid #dddfe2;
    color: #1d2129;
`;

export const Password = styled.input`
    margin-bottom: 20px;
    font-family: inherit;
    border-radius: 6px;
    font-size: 17px;
    padding: 14px 16px;
    width: 330px;
    border: 1px solid #dddfe2;
    color: #1d2129;
`;

export const ButtonLogin = styled.button`
    background-color: #1877f2;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    line-height: 48px;
    color: #fff;
    font-family: inherit;
    cursor: pointer;
`;