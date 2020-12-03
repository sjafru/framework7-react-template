import { connect } from 'react-redux'

import PanelRight from '../../components/PanelRight';
import { closePanelRight, goToAboutPageFromRightPanel, goToFormPageFromRightPanel } from '../actions/PanelRightActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onClosePanelRight: () => dispatch(closePanelRight()),
    onGoToAbout: () => dispatch(goToAboutPageFromRightPanel()),
    onGoToForm: () => dispatch(goToFormPageFromRightPanel()),
  };
};

export default connect(null, mapDispatchToProps)(PanelRight);
