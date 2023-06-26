import React from 'react';
import {Button} from 'antd';
import classNames from 'classnames';

const CustomButton = (props) => {
  return (
    <>
      <Button
        className={classNames(props.className)}
        block={props.block}
        danger={props.danger}
        disabled={props.disabled}
        ghost={props.ghost}
        href={props.href}
        htmlType={props.htmlType}
        form={props.form}
        icon={props.icon}
        loading={props.loading}
        shape={props.shape}
        size={props.size}
        target={props.target}
        type={props.type}
        onClick={props.onClick}
      >
        {props.title}
      </Button>
    </>
  );
};

export default CustomButton;
