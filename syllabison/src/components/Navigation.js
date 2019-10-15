import React from 'react';
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

export default ({ user }) => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
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
        <li className="nav-item">
          <a className="nav-link" href="/">
            {' '}
            Syllabi List{' '}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/new-syllabus">
            {' '}
            Add New{' '}
          </a>
        </li>
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
              <a className="nav-link" onClick={signOut}>
                Logout
              </a>
            </li>
            <li className="nav-item">
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
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
);
