import React from 'react';
import ChillComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrJobs: [
        { id: 'id1', title: 'developer', salary: '100' },
        { id: 'id2', title: 'developer2', salary: '90' },
        { id: 'id3', title: 'developer3', salary: '100' }
      ]
    };
  }

  addNewJob = (job) => {
    console.log('New jobs have been added:', job);
    // Cập nhật arrJobs bằng cách tạo một mảng mới bằng cách kết hợp mảng cũ và job mới
    this.setState({
      arrJobs: [...this.state.arrJobs, job]
    });
  }
deleteAJob = (job) => {
  let currenJobs = this.state.arrJobs;
  currenJobs = currenJobs.filter(item => item.id !== job.id)
  this.setState(
         {arrJobs: currenJobs}
    )
}

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChillComponent
          arrJobs={this.state.arrJobs}
          deleteAJob = {this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
