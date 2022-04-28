import { AnchorHTMLAttributes, ReactNode } from "react";
import { To, Link } from "react-router-dom";
import styled from "styled-components";

interface BotaoLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  color: ButtonColors;
  to: To;
}

export function BotaoLink(props: BotaoLinkProps) {
  const { children, color, to } = props;

  return (
    <Link
      className={`btn btn-${color}`}
      {...props}
      to={to}
    >{children}</Link>
  );
}


interface BotaoStyleProps {
  font_size: string | number;
}

export const BotaoLinkVoltar = styled(BotaoLink)<BotaoStyleProps>`
  font-size: ${(props) => props.font_size};
`;