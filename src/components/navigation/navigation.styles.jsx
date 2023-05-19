import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
display: flex
`

export const NavigationLink = styled(Link)`
  font-size: 18px;
  text-transform: capitalize
`;

export const NavigationItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 .5rem
`;
