import {Card} from 'antd';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  width: ${(props) => (props.width ? props.width : '')};
  height: ${(props) => (props.height ? props.height : '')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  padding: 17px 52px;
  background-color: ${(props) => (props.bgcolor ? props.bgColor : '#fff')};
`;
