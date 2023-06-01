import React from 'react';
import styled from 'styled-components';
import WelcomePage from '../welcome/welcomePage';

function Home() {
  return (
    <StyledHomePageWrapper>
      <WelcomePage />
    </StyledHomePageWrapper>
  );
}

export default Home;

const StyledHomePageWrapper = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
`;
