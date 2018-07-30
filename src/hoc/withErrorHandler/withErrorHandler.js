import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../AuxObj';

const withErrorHandler = (WrappedComponent) => {
    return class extends Component {
        state = {
            error: null
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                            modalClosed = {this.errorConfirmedHandler}> 
                        {this.state.error? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;