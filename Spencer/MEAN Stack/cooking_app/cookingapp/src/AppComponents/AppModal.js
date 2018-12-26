import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ErrorMessage from '../Error/ErrorMessage';
import ErrorMessageList from '../Error/ErrorMessageList';

class AppModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      errorMessageList: [],
      modalTitle: this.props.modalTitle
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.state.modalTitle}</ModalHeader>
          <ModalBody>
            {this.props.errorMessageList}
            {this.props.modalBody}
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.props.submitFunction}>{this.props.submitButtonName}</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AppModal;