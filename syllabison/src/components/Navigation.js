import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <Link className="btn btn-primary" to="/">
      Syllabi List
    </Link>
    <Link className="btn btn-secondary" to="/new-syllabus">
      + Add New
    </Link>
  </div>
);
