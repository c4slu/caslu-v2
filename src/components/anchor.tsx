// components/SmoothScrollLink.tsx

import React from "react";
import { Link as ScrollLink } from "react-scroll";

interface SmoothScrollLinkProps {
  to: string;
  children: React.ReactNode;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  to,
  children,
}) => {
  return (
    <ScrollLink
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-220} // Ajuste conforme necessário para compensar barras de navegação fixas, cabeçalhos etc.
      duration={500}
    >
      {children}
    </ScrollLink>
  );
};

export default SmoothScrollLink;
