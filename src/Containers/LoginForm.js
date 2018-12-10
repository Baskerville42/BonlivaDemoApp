import { connect } from 'react-redux';

import LoginFormComponent from '../Components/LoginForm';
import { userLoginRequest } from '../Modules/User/actions';

const mapDispatchToProps = dispatch => ({
  submitForm: credentials => dispatch(userLoginRequest(credentials)),
});

export default connect(null, mapDispatchToProps)(LoginFormComponent);
