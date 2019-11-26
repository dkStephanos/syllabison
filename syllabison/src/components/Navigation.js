import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
let searchTerm;

class Navigation extends Component {
  logout = () => {
    this.props.logOutUser();
    this.props.history.push('/');
  };

  handleSearch(e) {
    this.props.history.push(`/search/${searchTerm.value}`);
  }

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
                style={{ paddingTop: '4%' }}
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
                  style={{ cursor: 'pointer', paddingTop: '3.25%' }}
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
            <FormControl
              type="search"
              ref={node => {
                searchTerm = node;
              }}
              placeholder="Search"
            ></FormControl>
            <button
              className="btn btn-outline-dark my-2 my-sm-0"
              style={{ color: 'deepSkyBlue' }}
              onClick={this.handleSearch.bind(this)}
            >
              Search
            </button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Navigation);
