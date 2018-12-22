import React from 'react';
import AppModal from '../AppComponents/AppModal.js';
import RegistrationForm from '../Registration/RegistrationForm';

class RegistrationModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppModal modalBody={<RegistrationForm></RegistrationForm>}
            buttonLabel={"Sign Up"}
            submitButtonName={"Register"}
        />
      </div>
    );
  }
}

export default RegistrationModal;