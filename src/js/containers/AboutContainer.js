import { connect } from 'react-redux'

import AboutPage from '../../pages/about';
import { goBackToHomePage } from '../actions/AboutActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onGoBackToHomePage: () => dispatch(goBackToHomePage())
  };
};

export default connect(null, mapDispatchToProps)(AboutPage);
