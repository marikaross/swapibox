import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ summary }) => {
  return (
    <div className="sidebar">
      <section>
        <h3>{summary.summary}</h3>
        <h3>{summary.title}</h3>
        <h3>{summary.releaseDate}</h3>
      </section>
    </div>
    )
}

export default Sidebar;