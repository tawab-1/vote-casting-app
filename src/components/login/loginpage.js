import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import {Form, Row, Col} from 'antd';
import styled from 'styled-components';
import signInBg from '../../assets/images/signInBg.jpg';
import {MdMail, MdLock} from 'react-icons/md';
import CommonInput from '../../commonComponents/commonInput';
import CustomButton from '../../commonComponents/commonButton';
import {documentTitle} from '../../utils/page-title';
import FormItem from 'antd/es/form/FormItem';
import {FaIdCard} from 'react-icons/fa';
import CoreDashboard from '../coreTeamDashboard';

const Loginpage = ({isLoginRender}) => {
  const [coreLogin, setCoreLogin] = useState('');
  const [form] = Form.useForm();
  const [cnic, setCnic] = useState('');

  const handleCnicChange = (e) => {
    const value = e.target.value;
    const formattedValue = value
      .replace(/[^0-9-]/g, '') // Remove any non-numeric and non-dash characters
      .replace(/-{2,}/g, '-') // Replace multiple dashes with a single dash
      .replace(/(^-|-$)/g, ''); // Remove dashes from the start or end of the string
    setCnic(formattedValue);
  };

  const handleKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    const inputValue = e.target.value;

    // Only allow numeric characters (0-9) and hyphen (-)
    if (
      (charCode !== 45 && (charCode < 48 || charCode > 57)) ||
      (inputValue.length >= 15 && charCode !== 8 && charCode !== 46)
    ) {
      e.preventDefault();
      return;
    }

    //Insert hyphen automatically
    if (charCode !== 8 && charCode !== 46) {
      const formattedValue = inputValue
        .replace(/[^0-9-]/g, '')
        .replace(/^(\d{5})-?(\d{0,7})-?(\d?)$/, (match, p1, p2, p3) => {
          return p1 + '-' + p2 + (!p3 ? '-' + p3 : '');
        });
      e.target.value = formattedValue;
    }
  };
  const onLogin = (values) => setCoreLogin('core_login');
  return coreLogin === 'core_login' ? (
    <CoreDashboard />
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
                <div>
                  <h1>SignIn</h1>
                  <p className='mb-4'>
                    {isLoginRender === 'core_team'
                      ? 'To access core team dashboard'
                      : isLoginRender === 'polling_team'
                      ? 'To access polling team dashboard'
                      : isLoginRender === 'online_user'
                      ? 'To cast vote online'
                      : ''}
                  </p>
                  <StyledLoginForm
                    layout='vertical'
                    form={form}
                    name='basic'
                    initialValues={{remember: true}}
                    onFinish={onLogin}
                    autoComplete='off'
                  >
                    {isLoginRender === 'core_team' ? (
                      <>
                        <StyledFormItem
                          name='email'
                          label='Email'
                          rules={[
                            {type: 'email', message: 'Email is not Valid'},
                            {required: true, message: 'Email is required'},
                          ]}
                        >
                          <CommonInput
                            prefix={<StyledMailIcon />}
                            inputType='text'
                            placeholder='example@gmail.com'
                            onFocus={() =>
                              form.setFields([{name: 'email', errors: []}])
                            }
                          />
                        </StyledFormItem>
                        <StyledFormItem
                          label='Password'
                          name='Password'
                          rules={[
                            {required: true, message: 'Password is required'},
                          ]}
                        >
                          <CommonInput
                            prefix={<StyledLockIcon />}
                            inputType='password'
                            placeholder='Password'
                            onInput={(e) => {
                              e.target.value = e.target.value.trim();
                            }}
                          />
                        </StyledFormItem>
                        <StyledsigninButtonItem>
                          <CustomButton
                            className='d-block w-100'
                            title='LOGIN'
                            htmlType='submit'
                          />
                        </StyledsigninButtonItem>
                      </>
                    ) : isLoginRender === 'polling_team' ? (
                      <>
                        <div>Polling Team</div>
                      </>
                    ) : isLoginRender === 'online_user' ? (
                      <>
                        <StyledFormItem
                          name='CNIC'
                          label='Enter CNIC without dashes'
                          rules={[
                            {type: 'cnic', message: 'CNIC is not Valid'},
                            {required: true, message: 'CNIC is required'},
                          ]}
                        >
                          <CommonInput
                            prefix={<StyledIdIcon />}
                            inputType='CNIC'
                            placeholder='21593-3527936-8'
                            onFocus={() =>
                              form.setFields([{name: 'cnic', errors: []}])
                            }
                            onChange={handleCnicChange}
                            maxLength={15}
                            value={cnic}
                            onKeyPress={handleKeyPress}
                          />
                        </StyledFormItem>
                        <StyledFormItem>
                          <StyledsigninButtonItem>
                            <CustomButton
                              className='d-block w-100'
                              title='LOGIN'
                              htmlType='submit'
                            />
                          </StyledsigninButtonItem>
                        </StyledFormItem>
                      </>
                    ) : (
                      []
                    )}
                  </StyledLoginForm>
                </div>
              </StyledFormWrapper>
            </StyledPolygonWrapper>
          </Col>
          <Col xs={24} md={12} lg={12}>
            <StyledImagesWrapper>
              <h1>Welcome</h1>
              <h2>Election Commission of Pakistan</h2>
            </StyledImagesWrapper>
          </Col>
        </Row>
      </SignInFormWrapper>
    </LoginWrapper>
  );
};

export default Loginpage;

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

const StyledImagesWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  position: relative;
  padding: 20px 25px;
  h1 {
    font-family: 'Poppins' !important;
    margin: 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 500;
  }
  h2 {
    font-family: 'Poppins' !important;
    margin-bottom: 0.1rem;
    font-size: 2rem;
    font-weight: 400;
  }
`;

const StyledsigninButtonItem = styled(FormItem)`
  .ant-btn {
    background-color: rgb(31, 90, 50);
    border: 1px solid #ffffff66;
    border-radius: 38px;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 1px;
    transition: all 0.3s;
    height: 52px;
    margin-top: 18px;
    width: 100%;

    &:hover {
      background-color: #fff;
      background-image: unset;
      border-color: rgb(31, 90, 50);
      span {
        color: rgb(31, 90, 50);
      }
    }

    &:focus {
      background-color: #fff;
      background-image: unset;
    }
  }
`;

const StyledFormItem = styled(FormItem)`
  .ant-input-affix-wrapper {
    background-color: rgb(31 90 50);
    border: 1px solid #ffffff66;
    border-radius: 8px;
    padding-top: 5px;
    height: 52px !important;

    .ant-input {
      background-color: rgb(31 90 50);
      padding-left: 10px;
      position: relative;
      color: #fff !important;
      font-size: 16px;

      &::placeholder {
        color: rgb(255, 255, 255);
      }
    }

    .ant-input-password-icon {
      color: #fff;
      font-size: 18px;
      margin-right: 5px;
    }
    &:hover {
      border-color: rgb(31 90 50);
    }
  }

  .ant-form-item-has-error {
    .ant-input-affix-wrapper {
      border: 1px solid #ffec40 !important;

      &:focus {
        border: 1px solid #ffec40 !important;
      }
    }

    svg {
      color: #ffec40;
    }
  }
`;

const StyledLockIcon = styled(MdLock)`
  color: #fff;
  font-size: 24px;
  z-index: 1;
  left: 14px;
`;

const StyledMailIcon = styled(MdMail)`
  color: #fff;
  font-size: 24px;
  z-index: 1;
  left: 14px;
`;
const StyledIdIcon = styled(FaIdCard)`
  color: #fff;
  font-size: 24px;
  z-index: 1;
  left: 14px;
`;

const StyledLoginForm = styled(Form)`
  .ant-form-item-label {
    label {
      color: #fff !important;
      font-weight: 400;
      font-size: 14px;
    }
  }

  .ant-form-item-label {
    .ant-form-item-required {
      &::after {
        content: unset;
      }
    }
  }
`;

const StyledFormWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 85%;
  padding: 25px 35px;
  border-radius: 12px;
  background-color: #015d00;
  background-image: linear-gradient(
    221deg,
    rgb(236, 240, 246) -69%,
    rgb(33, 96, 54) 40%
  );
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  h1 {
    font-family: 'Outfit';
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
  div {
    width: 100%;
  }
`;

const SignInFormWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-image: url(${signInBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: 'poppins' !important;

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
