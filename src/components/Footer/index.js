import React from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prop-types
const Footer = ({ count }) => (
  // eslint-disable-next-line react/jsx-one-expression-per-line
  <p> Você tem {count} favoritos </p>
);

const mapStateToProps = state => ({
  count: state.favorites.data.length,
});

export default connect(mapStateToProps)(Footer);
