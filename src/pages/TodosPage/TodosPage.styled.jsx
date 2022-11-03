import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
    margin-left: ${p => p.theme.space[4]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`