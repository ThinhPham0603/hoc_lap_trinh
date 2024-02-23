import React from 'react';
import './demo.scss';

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      showJobs: false
    };
  }

  handleOnChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    });
  }

  handleOnChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('click me');
    alert('click me');
  }

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs
    });
  }
handleOncickDelete = (job) => {
  console.log('handleOncickDelete',job)
  this.props.deleteAJob(job)
}
  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;

    return (
      <>
        <div>
          <button className = "btn-show"
          onClick={this.handleShowHide}>
            {showJobs ? 'Hide' : 'Show'}
          </button>
        </div>

        {showJobs &&
          <div className='job-lists'>
            {arrJobs.map((item, index) => {
              if (item.salary >= 100) {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} &nbsp; <span 
                    onClick={() => this.handleOncickDelete(item)}>x</span>
                  </div>
                );
              }
            })}
          </div>
        }
      </>
    );
  }
}

export default ChildComponent;
