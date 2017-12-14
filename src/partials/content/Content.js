// import { TaskList } from 'components/taskList';
import { Form } from 'components/form';
// import ReactModal from 'react-modal';

import './content.scss';

export class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openModal: false };
  }

  updateModal(isOpen) {
    this.setState({ openModal: isOpen });
  }

  render() {
    return (
      <section className="content">
        {/* <TaskList /> */}
        <Form />
        {/* <button onClick={() => this.updateModal(true)}>Open</button>
        <ReactModal
          isOpen={this.state.openModal}
          contentLabel="Minimal Modal Example"
          ariaHideApp={false}
        >
          <button onClick={() => this.updateModal(false)}>Close Modal</button>
        </ReactModal> */}
      </section>
    );
  }
}
