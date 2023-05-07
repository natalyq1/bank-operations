import React from "react";
import styled from 'styled-components'
import logo from "../../assets/images/logo.svg";

const StyledHeader = styled.nav `
background-color: #41d3be;
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
  `

const Header = () => {
  return (
    <StyledHeader>
      <img className="imagen-logo" src={logo} alt="Logo Smart Bank" />
      <div>
        <a className="btn-secundario" href="https://google.com">
          Ayuda
        </a>
        <a className="btn-primario" href="https://google.com">
          Salir
        </a>
      </div>
    </StyledHeader>
  );
};

export default Header;
