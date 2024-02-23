import React from "react";

 class AddComponent extends React.Component{
    constructor(props) {
        super(props);
    this.state ={
        title: '',
        salary: '',
     }
    }
    handleOnChangetitle = (event) => {
        this.setState({
          title: event.target.value
        });
      }
      handleOnChangesalary = (event) => {
        this.setState({
          salary: event.target.value
        });
      }
    
      handelSubmit = (event) => {
      event.preventDefault()
      if(!this.state.title|| !this.state.salary){
        alert('Missing required params')
        return;
      }
      console.log('add job:',this.state)
      this.props.addNewJob({
        id: Math.floor(Math.random()*11),
        title: this.state.title,
        salary: this.state.salary
      })

    }
      render() {
        return (
          <>
            <form>
      <label htmlFor="fname">Job's title:</label><br/>
      <input type="text" value= {this.state.title}
        onChange={(event)=>this.handleOnChangetitle(event)}
      /><br/>
      <label htmlFor="fname">salary:</label><br/>
      <input type="text" value={this.state.salary}
          onChange={(event)=>this.handleOnChangesalary(event)}
      />
      <br/><br/>
      <input type="submit" 
        onClick={(event)=>this.handelSubmit(event)}
      />
    </form>
 </>
        );
 }
}
export default AddComponent;