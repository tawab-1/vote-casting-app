import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {Form, Row, Col} from 'antd';
import CustomButton from '@commonComponents/button';
import {constRoute} from '@utils/route';
import {observer} from 'mobx-react';
import {documentTitle} from '@utils/page-title';
import {CommonInput} from '@commonComponents/input';
import style from './style.module.scss';
import styled from 'styled-components';
import topIcon from '../../assets/img/topicon.svg';
import bottomicons from '../../assets/img/bottomicons.svg';
import enigmatixlogo from '../../assets/img/enigmatixlogo.svg';
import logoblur from '../../assets/img/logoblur.svg';
import {MdMail, MdLock} from 'react-icons/md';
import {useStore} from '../../stores/root-store';

const Loginpage = () => {
  const [form] = Form.useForm();

  const {
    signinInfo: {addInfo, isLoading},
  } = useStore(null);

  const onLogin = (values) => {
    addInfo({
      email: values.email,
      password: values.Password,
    });
  };
  return (
    <LoginWrapper>
      <Helmet>
        <title>{documentTitle.login}</title>
      </Helmet>
      <div className={style.SignIn}>
        <Row>
          <Col xs={24} md={12} lg={12}>
            <div className={style.polygon}>
              <div className={style.signInform}>
                <h1>SignIn</h1>
                <p className='mb-4'>To access your dashboard</p>
                <Form
                  layout='vertical'
                  className={style.signinForm}
                  form={form}
                  name='basic'
                  initialValues={{remember: true}}
                  onFinish={onLogin}
                  autoComplete='off'
                  validateMessages={validateMessages}
                >
                  <Form.Item
                    name='email'
                    label='Email'
                    className={style.commonInputField}
                    rules={[
                      {type: 'email', message: 'Email is not Valid'},
                      {required: true, message: 'Email is required'},
                    ]}
                  >
                    <CommonInput
                      prefix={<MdMail className={style.MailOutlined} />}
                      inputType='text'
                      placeholder='example@test.com'
                      onFocus={() =>
                        form.setFields([{name: 'email', errors: []}])
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label='Password'
                    name='Password'
                    rules={[{required: true}]}
                    className={style.passwordField}
                  >
                    <CommonInput
                      prefix={<MdLock className={style.LockOutlined} />}
                      inputType='password'
                      placeholder='a3enigmatix'
                      onInput={(e) => {
                        e.target.value = e.target.value.trim();
                      }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <div className='d-flex justify-content-end'>
                      <div>
                        <Link
                          className={style.forget}
                          to={`${constRoute.forgotPassword}`}
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                  </Form.Item>
                  <Form.Item className={style.signinButton}>
                    <CustomButton
                      className='d-block w-100'
                      title='LOGIN'
                      htmlType='submit'
                      loading={isLoading}
                    />
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={12}>
            <div className={style.barnd}>
              <div className={style.oms}>
                <img className={style.topIcon} src={topIcon} alt={topIcon} />
                <img className={style.logoblur} src={logoblur} alt={logoblur} />
              </div>
              <div>
                <img
                  className={style.bottomicons}
                  src={bottomicons}
                  alt={bottomicons}
                />
              </div>
              <div>
                <img
                  className={style.enigmatixlogo}
                  src={enigmatixlogo}
                  alt={enigmatixlogo}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </LoginWrapper>
  );
};

export default observer(Loginpage);

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
    display: inline-block;
    margin-right: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: '*';
    position: absolute;
    right: -15px;
  }
`;
