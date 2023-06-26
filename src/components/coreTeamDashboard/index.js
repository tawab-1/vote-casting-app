import React from 'react';
import styled from 'styled-components';
import {Menu, Layout, Row, Col} from 'antd';
import {MailOutlined} from '@ant-design/icons';
import {
  AppstoreOutlined,
  CalendarOutlined,
  SettingOutlined,
} from '@ant-design/icons/lib/icons';
import {Content, Header} from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import {StyledCard} from '../commonCard';

function CoreDashboard() {
  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    };
  };
  const items = [
    getItem('Navigation One', '1', <MailOutlined />),
    getItem('Navigation Two', '2', <CalendarOutlined />),
    getItem('Navigation Two', '3', <AppstoreOutlined />),
    getItem('Navigation Three', '4', <SettingOutlined />),
  ];
  const obtained = 70;
  const total = 100;
  const format = () => `${obtained}/${total}`;

  return (
    <Layout
      style={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Sider>
        <StyledMenu defaultSelectedKeys={['1']} items={items} />
      </Sider>
      <Layout>
        <StyledHeader>
          <HeaderText>Election Commission of pakistan</HeaderText>
        </StyledHeader>
        <StyledContentWrapper>
          <Row className='mt-5'>
            <WelcomeDiv>
              <h1>
                Good morning <span>Admin.</span>
              </h1>
              <h2>Welcome to your dashboard</h2>
            </WelcomeDiv>
          </Row>
          <Row>
            <Col className='d-flex flex-wrap' sm={18}>
              <Col sm={7}>
                <StyledCard width='100%' borderRadius='12px'>
                  card 1
                </StyledCard>
              </Col>
              <Col span={1}></Col>
              <Col sm={7}>
                <StyledCard width='100%' borderRadius='12px'>
                  card 2
                </StyledCard>
              </Col>
              <Col span={1}></Col>
              <Col sm={7}>
                <StyledCard width='100%' borderRadius='12px'>
                  card 3
                </StyledCard>
              </Col>
              <Col sm={7}>
                <StyledCard width='100%' borderRadius='12px'>
                  card 4
                </StyledCard>
              </Col>
              <Col sm={7}>
                <StyledCard width='100%' borderRadius='12px'>
                  card 5
                </StyledCard>
              </Col>
              <Col sm={7}>
                <StyledCard width='100%' borderRadius='12px'>
                  card 6
                </StyledCard>
              </Col>
            </Col>
            <Col sm={6}>
              <StyledCard width='100%' height='100%' borderRadius='12px'>
                card 4
              </StyledCard>
            </Col>
          </Row>
        </StyledContentWrapper>
      </Layout>
    </Layout>
  );
}

export default CoreDashboard;

const StyledContentWrapper = styled(Content)`
  padding: 0px 25px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const StyledHeader = styled(Header)`
  min-height: 60px;
  background-color: rgb(31, 90, 50);
`;
const HeaderText = styled.div`
  font-family: 'Outfit';
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
`;

const StyledMenu = styled(Menu)`
  background-color: darkgray;
  height: 100%;
  border: none !important;
  .ant-menu-item {
    letter-spacing: 1px;
    transition: all 0.3s;
    margin-bottom: 0px !important;
    background-color: transparent;
    span {
      color: black;
      svg {
        path {
          color: black;
        }
      }
    }
    &:hover {
      background-color: #18161682 !important;
      span {
        color: #fff;
        svg {
          path {
            color: #fff;
          }
        }
      }
    }
  }
`;

const WelcomeDiv = styled.div`
  color: black;
  h1 {
    color: #010101;
    font-size: 32px;
    font-family: 'Poppins' !important;
    font-weight: 600;
    letter-spacing: 1px;
    span {
      color: #1f5a32;
    }
  }
  h2 {
    color: #525353;
    font-size: 18px;
    font-family: 'Poppins' !important;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;
