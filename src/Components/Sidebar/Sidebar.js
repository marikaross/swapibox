import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ summary }) => {
  return (
    <div className="sidebar">
      <img src={require ('../../images/starWarsLogo.jpg')} />
      <section className="scroll">
        <h3>{summary.summary}</h3>
        <h3>{summary.title}</h3>
        <h3>{summary.releaseDate}</h3>
      </section>
    </div>
    )
}

export default Sidebar;


Sidebar.propTypes = {
  summary: PropTypes.object.isRequired,
};