import React from 'react';
import {Form} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {CommonInput} from '../../commonComponents/commonInput';
function loginForm() {
  return (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{remember: true}}
    >
      <Form.Item
        label='User Name'
        name='username'
        rules={[{required: true, message: 'Please input your Username!'}]}
      >
        <CommonInput
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Username'
        />
      </Form.Item>
      <Form.Item
        label='Password'
        name='password'
        rules={[{required: true, message: 'Please input your Password!'}]}
      >
        <CommonInput
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Password'
        />
      </Form.Item>
      <Form.Item></Form.Item>
    </Form>
  );
}

export default loginForm;
