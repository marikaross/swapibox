import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

const Sidebar = ({ summary }) => {
  return (
    <div className="sidebar">
      <h2 className="longAgo">A long time ago in a galaxy far, far away...</h2>
      <section className="scrollContainer ">
        <section className="scroll">
          <h3>{summary.summary}</h3>
          <h3>{summary.title}</h3>
          <h3>{summary.releaseDate}</h3>
        </section>
      </section>
    </div>
  );
};

export default Sidebar;


Sidebar.propTypes = {
  summary: PropTypes.object.isRequired
};