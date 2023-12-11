


import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = ({ selectedTab, handleChange }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey={selectedTab} onSelect={handleChange}>
          <Nav.Link eventKey="tab1">Insight</Nav.Link>
          <Nav.Link eventKey="tab2">Unisecure</Nav.Link>
          <Nav.Link eventKey="tab3">Unitrace</Nav.Link>
          {/* <Nav.Link eventKey="tab4">SupplySense</Nav.Link> */}
          <Nav.Link eventKey="tab5">Uploads & Archives</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
