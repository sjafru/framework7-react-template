import { connect } from 'react-redux'

import DynamicRoutePage from '../../pages/dynamic-route';
import { goBackToHomePage } from '../actions/DynamicRouteActions';
import { getRouteInfo } from '../selectors/DynamicRouteSelectors';

const mapStateToProps = (state) => {
  return {
    ...getRouteInfo(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGoBackToHomePage: () => dispatch(goBackToHomePage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DynamicRoutePage);
