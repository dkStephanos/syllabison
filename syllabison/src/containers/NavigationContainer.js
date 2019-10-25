import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { signOutUser } from '../actions';

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  logOutUser: () => {
    dispatch(signOutUser());
  }
});

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

export default NavigationContainer;
