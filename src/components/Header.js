import { styled } from "styled-components";

const HWrap = styled.header`
  width: 100%;
  padding: 30px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
`;
const Logo = styled.div`
  font-size: 40px;
  font-weight: 700;
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    margin-left: 40px;
    font-size: 20px;
  }
`;

export const Header = () => {
  return (
    <HWrap>
      <Logo>
        <h3>SIFilm</h3>
      </Logo>

      <Menu>
        <li>Home</li>
        <li>Search</li>
      </Menu>
    </HWrap>
  );
};
