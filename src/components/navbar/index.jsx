import React from 'react';
import {
  Toolbar, Button, AppBar, Hidden,
} from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavDrawer from './components';
import logo from '../../assets/socis_logo.png';

const navLinks = [
  { title: 'Clubs', path: '/clubs' },
  { title: 'Policy', path: '/policy' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

function NavBar({ home }) {
  return (
    <StyledAppBar position="static" style={styles.appBar}>
      <StyledToolbar>
        <a href="/">
          {!home
          && <Image src={logo} alt="SOCIS Logo" />}
        </a>
        <WebView smDown>
          <Links>
            {navLinks.map(({ title, path }) => (
              <Button key={title} color="inherit" href={path} style={styles.pageLink}>{title}</Button>
            ))}
          </Links>
        </WebView>
        <MobileView mdUp>
          <NavDrawer navLinks={navLinks} />
        </MobileView>
      </StyledToolbar>
    </StyledAppBar>
  );
}

const StyledAppBar = styled(AppBar)`
  width: 100%;
`;

const StyledToolbar = styled(Toolbar)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between
`;

const Links = styled.div``;

const Image = styled.img`
  margin-top: 0.5rem;
  height: 4rem;
`;

const WebView = styled(Hidden)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MobileView = styled(Hidden)``;

const styles = {
  homeLink: {
    color: 'white',
    textDecoration: 'none',
  },
  appBar: {
    backgroundColor: '#660000',
    flexDirection: 'row',
    width: '100%',
  },
  pageLink: {
    height: '100%',
  },
};

NavBar.defaultProps = {
  home: false,
};

NavBar.propTypes = {
  home: PropTypes.bool,
};

export default NavBar;
