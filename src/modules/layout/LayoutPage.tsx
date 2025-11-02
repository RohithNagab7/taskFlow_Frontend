import { Outlet, useLocation } from "react-router-dom";
import {
  Header,
  HeadingText,
  LayoutWrapper,
  NavLinks,
  StyledLink,
} from "../../components/globalStyles/GlobalStyles";

const LayoutPage = () => {
    const location = useLocation();
  return (
    <LayoutWrapper>
      <Header>
        <HeadingText>TaskFlow</HeadingText>

        <NavLinks>
          <StyledLink
            to="/agentlist"
            active={location.pathname === "/agentlist" ? 1 : 0}
          >
            Distributed Lists
          </StyledLink>
          <StyledLink
            to="/"
            active={location.pathname === "/" ? 1 : 0}
          >
            Add Agent
          </StyledLink>
        </NavLinks>
      </Header>

      <Outlet />
    </LayoutWrapper>
  );
};

export default LayoutPage;
