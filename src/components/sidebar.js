import React from 'react';
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Input from "./input";


const sidebar = () => {
    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt=""/>
                <h3>Eli <span>Codes</span></h3>
            </LogoWrapper>
            <Form>
                <h3>Sign Up</h3>
                <Input placeholder="Full Name"/>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <Input type="password" placeholder="Confirm Password"/>
                <button>Sign Up</button>
            </Form>
            <div>
                <Terms>
                By signing up, I agree to the Privacy Policy <br/> and Terms of Service
                </Terms>
                <h4>Already have an account? <span>Sign In</span></h4>
            </div>
        </Container>
    );
};
const Terms = styled.p`
    padding:0 2rem;
    text-align:center;
    font-size:15px;
    color:#808080;
    font-weight:300;
    line-height:18px;

`;
const Form = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;

    h3{
        color: #666666;
        margin-bottom:2rem;
    }
    
    button{
        width:75%;
        max-width:350px;
        min-width:250px;
        height:40px;
        border:none;
        margin:1rem 0;
        background-color: #70EDB9;
        box-shadow: 0px 14px 9px -15px  rgba(0, 0, 0, 0.25);
        border-radius:8px;
        color:#fff;
        cursor:pointer;
        font-weight:600;
        transition: all 0.2s ease-in;
        &:hover{
        transform:translateY(-3px);
        }
    }

`;
const LogoWrapper = styled.div`
    img{
        height:6rem;
    }
    h3{
        text-align:center;
        color: #FF8D8D;
        font-size:22px;
    }
    span{
        color: #70EDB9;
        font-weight:300;
        font-size:18px;
    }
`;
const Container = styled.div`
    min-width:400px;
    backdrop-filter:blur(35px);
    background-color:rgba(255,255,255,0.8);
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    padding:1rem 2rem;

    @media (max-width:900px){
        width:100vw;
        position:absolute;
        padding:0;
    }
    h4{
        color:#808080;
        font-weight:bold;
        font-size:15px;
        margin-top:2rem;
        margin-left:1rem;
        span{
            color:#FF8D8D;
            cursor:pointer;
        }
    }

`;
export default sidebar;
