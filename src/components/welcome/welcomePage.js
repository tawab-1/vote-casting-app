import {Helmet} from 'react-helmet';
import {Row, Col, Button} from 'antd';
import styled from 'styled-components';
import topIcon from '../../assets/images/topicon.png';
import polygon from '../../assets/images/polygon.svg';

import {documentTitle} from '../../utils/page-title';
import React, {useState} from 'react';
import Loginpage from '../login/loginpage';

const WelcomePage = () => {
  const [isLoginRender, setIsLoginRender] = useState('');

  const loginHandler = (buttonProp) => {
    setIsLoginRender(buttonProp);
  };
  return isLoginRender === 'core_team' ||
    isLoginRender === 'polling_team' ||
    isLoginRender === 'online_user' ? (
    <Loginpage isLoginRender={isLoginRender} />
  ) : (
    <LoginWrapper>
      <Helmet>
        <title>{documentTitle.login}</title>
      </Helmet>
      <SignInFormWrapper>
        <Row>
          <Col xs={24} md={12} lg={12}>
            <StyledPolygonWrapper>
              <StyledFormWrapper>
                <h1>SignIn</h1>
                <p className='mb-4'>Select Your Related Login</p>
                <LoginButtonsWrapper>
                  <LoginButton
                    type='button'
                    className='login-form-button'
                    onClick={() => loginHandler('core_team')}
                  >
                    Log in Via Core Team
                  </LoginButton>
                  <LoginButton
                    type='button'
                    className='login-form-button'
                    onClick={() => loginHandler('polling_team')}
                  >
                    Log in Via Polling Team
                  </LoginButton>
                  <LoginButton
                    type='button'
                    className='login-form-button'
                    onClick={() => loginHandler('online_user')}
                  >
                    Log in Via Online User
                  </LoginButton>
                </LoginButtonsWrapper>
              </StyledFormWrapper>
            </StyledPolygonWrapper>
          </Col>
          <Col xs={24} md={12} lg={12}>
            <StyledRightWrapper>
              <StyledHeadingPara>
                <StyledHeading1>Welcome Pakistan</StyledHeading1>
                <p>
                  We are proud to introduce a secure voting system based on
                  fingerprint identification, aiming to eliminate corruption and
                  ensure fair elections. With our cutting-edge technology,
                  voters can now cast their votes conveniently and securely from
                  the comfort of their homes.
                </p>
              </StyledHeadingPara>
              <StyledMiddleImgWrapper>
                <StyledMiddleImg src={topIcon} alt={topIcon} />
              </StyledMiddleImgWrapper>
              <StyledHeading1>Election Commission of Pakistan</StyledHeading1>
            </StyledRightWrapper>
          </Col>
        </Row>
      </SignInFormWrapper>
    </LoginWrapper>
  );
};

export default WelcomePage;

const StyledMiddleImgWrapper = styled.div`
  background-color: white;
  border-radius: 240px 240px 40px 40px;
`;

const LoginButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const LoginButton = styled(Button)`
  background-color: rgb(31 90 50);
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
    border-color: rgb(31 90 50);
    span {
      color: rgb(31 90 50);
    }
  }
`;

const LoginWrapper = styled.div`
  .ant-form-item-label
    > label.ant-form-item-required:not(
      .ant-form-item-required-mark-optional
    )::before {
    display: none;
    visibility: hidden;
  }

  .ant-form-item-label
    > label.ant-form-item-required:not(
      .ant-form-item-required-mark-optional
    )::after {
    display: none;
    visibility: hidden;
  }
`;

const StyledPolygonWrapper = styled.div`
  background-image: url(${polygon});
  background-size: cover;
  background-position: right center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding-right: 4em;
`;

const StyledMiddleImg = styled.img`
  position: relative;
  top: -30px;
  width: 100%;
  max-width: 380px;

  @media (max-width: 1440px) {
    max-width: 350px;
  }

  @media (max-width: 1366px) {
    max-width: 388px;
  }
`;

const StyledRightWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 0 25px;
  gap: 30px;
`;
const StyledHeading1 = styled.h1`
  font-family: 'Poppins' !important;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
`;
const StyledHeadingPara = styled.div`
  p {
    font-weight: 400;
    margin-bottom: 0.5;
    text-align: center;
    padding: 0px 40px;
  }
`;

const StyledFormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 25px;

  h1 {
    font-family: 'Poppins' !important;
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    font-weight: 500;
  }

  p {
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  .textSpace {
    margin-bottom: 59px;
  }
`;

const SignInFormWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: #216036;
  font-family: 'poppins';

  * {
    word-spacing: 0px !important;
  }

  .ant-form-item-explain-error {
    color: red;
    word-spacing: 0 !important;
    font-style: italic;
    margin-top: 2px;
  }
`;
