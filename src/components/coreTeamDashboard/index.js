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
import {StyledCard} from '../../commonComponents/commonCard';
import GaugeChart from 'react-gauge-chart';
import CommonTable from '../../commonComponents/commonTable';

function CoreDashboard() {
  const tableHeight = 274;
  const dataSource = [];
  for (let i = 1; i <= 50; i++) {
    dataSource.push({
      id: i,
      name: `Person ${i}`,
      age: Math.floor(Math.random() * 40) + 20,
      email: `person${i}@example.com`,
      city: ['New York', 'London', 'Paris', 'Tokyo'][
        Math.floor(Math.random() * 4)
      ],
      occupation: ['Engineer', 'Teacher', 'Doctor', 'Designer'][
        Math.floor(Math.random() * 4)
      ],
    });
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'City',
      dataIndex: 'city',
    },
    {
      title: 'Occupation',
      dataIndex: 'occupation',
    },
  ];
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
          <Row className='mt-3'>
            <WelcomeDiv>
              <h1>
                Good morning <span>Admin.</span>
              </h1>
              <h2>Welcome to your dashboard</h2>
            </WelcomeDiv>
          </Row>
          <Row gutter={12}>
            <Col sm={18} className='d-flex flex-column justify-content-between'>
              <Row gutter={12}>
                <Col sm={8}>
                  <StyledCard width='100%'>
                    Total Polling Stations <br />
                    2000
                  </StyledCard>
                </Col>
                <Col sm={8}>
                  <StyledCard width='100%' borderRadius='12px'>
                    Polling Stations Process Completed <br />
                    768
                  </StyledCard>
                </Col>

                <Col sm={8}>
                  <StyledCard width='100%' borderRadius='12px'>
                    Polling Stations Process Pending <br />
                    546
                  </StyledCard>
                </Col>
              </Row>
              <Row gutter={12}>
                <Col sm={8}>
                  <StyledCard width='100%' borderRadius='12px'>
                    Total Casted Votes <br />
                    657
                  </StyledCard>
                </Col>
                <Col sm={8}>
                  <StyledCard width='100%' borderRadius='12px'>
                    Pending votes <br />
                    548
                  </StyledCard>
                </Col>
                <Col sm={8}>
                  <StyledCard width='100%' borderRadius='12px'>
                    Total Votes <br />
                    7456
                  </StyledCard>
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <StyledCard
                width='100%'
                height='100%'
                borderRadius='12px'
                color='#1f5a32'
                fontSize='24px'
                fontWeight='600'
                fontFamily='Poppins'
                padding='0px 20px'
              >
                Over All Casted
                <StyledGaugeChart
                  id='gauge-chart4'
                  nrOfLevels={1}
                  arcPadding={0.1}
                  cornerRadius={3}
                  percent={0.9}
                  CircleColor={'#1f5a32'}
                  needleColor={'#1f5a32'}
                />
              </StyledCard>
            </Col>
          </Row>
          <StyledTaleRow className='mt-3 mb-3 p-1'>
            <Col sm={24} style={{backgroundColor: 'white'}}>
              <h2 style={{color: 'black'}}>Total Polling Stations</h2>
            </Col>
            <Col sm={24}>
              <CommonTable
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                tableHeight={tableHeight}
                headerColor={'white'}
              />
            </Col>
          </StyledTaleRow>
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

const StyledGaugeChart = styled(GaugeChart)`
  svg {
    g {
      .doughnut {
        .arc {
          path {
            fill: ${(props) =>
              props.CircleColor ? props.CircleColor : ''} !important;
          }
        }
      }
      .needle {
        path {
          fill: ${(props) =>
            props.needleColor ? props.needleColor : ''} !important;
        }
        circle {
          fill: ${(props) =>
            props.needleColor ? props.needleColor : ''} !important;
        }
      }
    }
  }
`;

const StyledTaleRow = styled(Row)`
  border-radius: 12px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  padding: 4px;
  background-color: white;
`;
