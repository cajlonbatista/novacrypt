import styled from 'styled-components';

export const HeaderContainer = styled.section`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 9;
    background: #15191E;
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    align-items: center;
    div:first-child{
        display: flex;
         align-items: center;
        
        img{
            width: 60px;
            margin-right: 10px;
        }
        span{
            font-family: Poppins;
            font-size: 16px;
            color: white;
            font-weight: 500;
        }
    }
    div:last-child{
        display: flex;
        align-items: center;
        a{
            display: flex;
            align-items: center;
            padding: 5px 10px;
            border-radius: 5px;
            justify-content: center;
            margin-right: 35px;
            font-family: Exo, sans-serif;
            text-decoration: none;
            color: white;
            font-weight: 500px;
            font-size: 13px;
            transition: all 0.3s;
            img{
                width: 20px;
                margin-right: 7px;
            }
            :hover{
                background: #00ADEF;
            }
        }
    }
`;