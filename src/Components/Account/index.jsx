import React, { useState } from "react";
import styled from 'styled-components'

import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";
import { Box, Btn, Detalle, Icono, Saldo } from "../UI";

const IconoMargin = styled(Icono) `
margin-top: 2px;
` 
/**const = styled. `` */

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <Detalle>
          <Icono src={dinero} alt="Icono de saldo" />
        </Detalle>
        {toggleState ? (
          <Saldo>
            <span className="detalle">$</span> 8,621.50
          </Saldo>
        ) : null}
      </div>

      <Btn onClick={toggleHandler}>
        <IconoMargin
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </Btn>
    </Box>
  );
};

export default Account;
