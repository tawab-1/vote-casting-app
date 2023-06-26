import {Card} from 'antd';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  width: ${(props) => (props.width ? props.width : '378px')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '12px'};
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#fff')};
  display: ${(props) => (props.dFlex ? props.dFlex : 'flex')};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  gap: ${(props) => (props.gap ? props.gap : '10px')};
  flex-shrink: ${(props) => (props.flexShrink ? props.flexShrink : '0')};
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  padding: ${(props) => (props.padding ? props.padding : '17px 20px')};
  .ant-card-body {
    color: ${(props) => (props.color ? props.color : '#000000')};
    padding: 5px;
    text-align: center;
    font-size: ${(props) => (props.fontSize ? props.fontSize : '')};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '')};
    font-family: ${(props) =>
      props.fontFamily ? props.fontFamily : ''} !important;
  }
`;
