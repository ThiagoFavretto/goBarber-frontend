import React from "react";
import PropType from "prop-types";

import Header from "~/components/Header";

import { Wrapper } from "./styles";

const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropType.element.isRequired,
};
