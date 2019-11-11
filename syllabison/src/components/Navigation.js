import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Fragment } from 'react';
import {
  Navbar,
  NavDropdown,
  Button,
  Nav,
  Form,
  FormControl
} from 'react-bootstrap';
import { signIn, signOut } from '../Auth';

const Profile = styled.span`
  margin-left: 15px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  max-width: 30px;
  margin-right: 5px;
`;

class Navigation extends Component {
  logout = () => {
    this.props.logOutUser();
  };

  render() {
    let { user } = this.props;
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            {user && (
              <Nav.Link
                style={{ paddingTop: '3%' }}
                href="/new-syllabus"
                eventKey="1"
              >
                {' '}
                Add New{' '}
              </Nav.Link>
            )}
            {!user && (
              <Nav.Link style={{ cursor: 'pointer' }} onClick={signIn}>
                Login
              </Nav.Link>
            )}
            {user && (
              <Fragment>
                <Nav.Link
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.logout()}
                >
                  Logout
                  <Profile>
                    <ProfilePicture src={user.profile.picture} />
                    {user.profile.email}
                  </Profile>
                </Nav.Link>
              </Fragment>
            )}
          </Nav>
          <Form className="ml-auto" inline>
            <FormControl type="search" placeholder="Search"></FormControl>
            <button
              class="btn btn-outline-dark my-2 my-sm-0"
              style={{ color: 'deepSkyBlue' }}
              type="submit"
            >
              Search
            </button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
