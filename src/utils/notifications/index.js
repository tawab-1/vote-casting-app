/* eslint-disable no-undef */
import {notification as antdNotification} from 'antd';
import error from '../../assets/img/error.png';
import success from '../../assets/img/success.png';
import info from '../../assets/img/info.png';
import warning from '../../assets/img/warning.png';
import alertIcon from '../../assets/img/alertIcon.png';
import style from './style.module.scss';

export const notification = {
  error(message) {
    return antdNotification.error({
      message: '',
      placement: 'topRight',
      description: message,
      key: 'error',
      duration: 2,
      closeIcon: false,
      className: style.allNotification,
      icon: React.createElement('img', {
        style: {width: '90px', marginLeft: '-29px', marginTop: '-21px'},
        src: error,
      }),
    });
  },

  success(message) {
    return antdNotification.success({
      message: '',
      placement: 'topRight',
      description: message,
      key: 'success',
      duration: 2,
      closeIcon: false,
      className: style.allNotification,
      icon: React.createElement('img', {
        style: {width: '90px', marginLeft: '-29px', marginTop: '-21px'},
        src: success,
      }),
    });
  },

  info(message) {
    return antdNotification.info({
      message: '',
      placement: 'topRight',
      key: 'info',
      description: message,
      duration: 2,
      closeIcon: false,
      className: style.allNotification,
      icon: React.createElement('img', {
        style: {width: '90px', marginLeft: '-29px', marginTop: '-21px'},
        src: info,
      }),
    });
  },

  firebaseInfo(title, body) {
    return antdNotification.info({
      message: title,
      placement: 'topRight',
      key: 'info',
      description: body,
      closeIcon: false,
      className: style.allNotification,
      duration: 2,
      icon: React.createElement('img', {
        style: {width: '90px', marginLeft: '-29px', marginTop: '-21px'},
        src: info,
      }),
    });
  },

  warning(message) {
    return antdNotification.warning({
      message: 'Something went wrong!',
      placement: 'bottomRight',
      key: 'warning',
      description: message,
      duration: 3,
      icon: React.createElement('img', {
        style: {width: '60%', marginLeft: '-4px', marginTop: '-5px'},
        src: warning,
      }),
    });
  },
  attendenceAlert(message, name) {
    return antdNotification.open({
      message: `Hi,${name}`,
      placement: 'topRight',
      key: 'warning',
      description: message,
      duration: 2,
      className: 'alert-notification',
      closeIcon: React.createElement('img', {
        style: {
          width: '70px',
          marginLeft: '0px',
          marginTop: '-2px',
          height: '66px',
        },
        src: alertIcon,
      }),
    });
  },
};
