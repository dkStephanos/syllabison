import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          Home
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            {user && (
              <li className="nav-item">
                <a className="nav-link" href="/new-syllabus">
                  {' '}
                  Add New{' '}
                </a>
              </li>
            )}
            {!user && (
              <li className="nav-item">
                <a className="nav-link" onClick={signIn}>
                  Login
                </a>
              </li>
            )}
            {user && (
              <Fragment>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => this.logout()}>
                    Logout
                  </a>
                </li>
                <li className="nav-item" style={{ paddingTop: '1.5%' }}>
                  <Profile>
                    <ProfilePicture src={user.profile.picture} />
                    {user.profile.email}
                  </Profile>
                </li>
              </Fragment>
            )}
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            ></input>
            <button
              class="btn btn-outline-dark my-2 my-sm-0"
              style={{ color: 'deepSkyBlue' }}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navigation;
