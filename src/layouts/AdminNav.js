import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../constants/colors';
import Logo from '../assets/images/Logo.png';
import { adminMenu } from '../constants/menus';
const AdminNav = () => {
  return (
    <Container>
      <Link to='/'>
        <Image src={Logo} />
      </Link>
      <Menu>
        {adminMenu.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  padding: 5rem 0;
  border-top-left-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
  background-image: linear-gradient(
    to top right,
    ${colors.tertiary},
    ${colors.primary}
  );
`;
const Menu = styled.ul`
  color: ${colors.white};
  text-transform: capitalize;
  & li {
    font-size: 1.5rem;
    width: 100%;
    & a,
    a:link {
      text-decoration: none;
      color: ${colors.white};
      padding: 0.8rem 2.5rem;
    }
    & a:hover {
      background-color: ${colors.white};
      color: ${colors.primary};
    }
    & a.active {
      background-color: ${colors.white};
      color: ${colors.primary};
    }
  }
  & li:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
const Image = styled.img`
  width: 9rem;
  height: auto;
`;
export default AdminNav;
