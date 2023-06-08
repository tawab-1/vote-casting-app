import React from 'react';
import styled from 'styled-components';
import bgVideo from '../../assets/videos/bgVideo.mp4';
import {Layout, Button} from 'antd';

const WelcomePage = () => {
  return (
    <WelcomePageWrapper>
      <VideoElement src={bgVideo} autoPlay muted />
      <MobileWelcome>
        <h1>Welcome to</h1>
        <h2>Corruption free Pakistan</h2>
        <p>Collaborate with us to meke pakistan Corruption free</p>
      </MobileWelcome>
      <WelcomePageContent>
        <div>
          <h1>Criteria</h1>
          <p> Here will the </p>
          <p>Criteria to caste user votes</p>
        </div>
        <LoginButtonsWrapper>
          <LoginButton
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Log in Via Core Team
          </LoginButton>
          <LoginButton
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Log in Via Polling Team
          </LoginButton>
          <LoginButton
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Log in Via Online User
          </LoginButton>
        </LoginButtonsWrapper>
      </WelcomePageContent>
    </WelcomePageWrapper>
  );
};

export default WelcomePage;

const WelcomePageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 5%;
  background-color: #006b12;
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: 1015px) {
    object-fit: contain !important;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
const MobileWelcome = styled.div`
  height: 85%;
  padding-left: 20px;
  text-align: left;
  h1,
  h2 {
    text-align: center;
    font-size: 37px;
    font-weight: 500;
  }
  h2 {
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 15px;
  }
  @media (min-width: 700px) {
    display: none;
  }
`;
const WelcomePageContent = styled(Layout)`
  position: absolute;
  width: 40%;
  height: 85%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px, rgba(0, 0, 0, 0.1) 0px 45px 26px;
  background-color: #006b12;
  border-radius: 13px;
  margin: 24px 16px;
  padding: 24px;
  min-height: 280;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  @media (max-width: 700px) {
    position: relative;
  }
`;
const LoginButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const LoginButton = styled(Button)`
  background-color: #006b12;
  width: 100%;
  height: 50px;
  border: 1px solid hsla(0, 0%, 100%, 0.4);
  border-radius: 31px !important;
  font-weight: 400;
  font-size: 20px;
  transition: all 0.7s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  :hover {
    background-color: #ffffff !important;
    border-color: #006b12;
    span {
      color: #006b12;
    }
  }
`;
