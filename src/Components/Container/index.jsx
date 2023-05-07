import React from "react";
import styled from 'styled-components'

import Title from "../Title";
import Account from "../Account";

const StyleContainer = styled.div `
background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`

const StyleContent = styled.section `
display: flex;
  flex-direction: row;
  justify-content: space-between;
`
/**const = styled. `` */

const Container = () => {
  return (
    <StyleContainer>
      <Title>Smart Bank</Title>
      <StyleContent>
        <Account />
      </StyleContent>
    </StyleContainer>
  );
};

export default Container;
