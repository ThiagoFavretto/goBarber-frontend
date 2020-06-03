import React from "react";
import PropType from "prop-types";

import { Wrapper, Content } from "./styles";

const AuthLayout = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default AuthLayout;

AuthLayout.propTypes = {
  children: PropType.element.isRequired,
};
