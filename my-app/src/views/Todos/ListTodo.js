import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
//import {  toast } from 'react-toastify';


class ListTodo extends React.Component{
    constructor(props) {
        super(props);
    this.state={
        listTodos:[
           {id: 'todo',title: 'doing homework'},
           {id: 'todo1',title: 'making videos'},
           {id: 'todo2',title: 'fixing bugs'},
        ]
    }}
    addNewTodo = (todo) =>{
        this.setState({
            listTodos: [...this.state.listTodos,todo]
        })
        //toast.success('wow so easy')
    }
 render(){
    let listTodos = this.state.listTodos;
    return(
       <div className='list-todo-container'>
       <AddTodo addNewTodo = {this.addNewTodo}/>
        <div className='list-todo-content'>
        { listTodos && listTodos.length > 0 && 
        listTodos.map((item, index) => {
              return(
                <div className='todo-child' key ={item.id}>
            <span>{index +1} - {item.title}</span>
            <button className='edit'>Edit</button>
            <button className='delete'>Delete</button>
            </div>
              )
        })
        }
        </div>
       </div>
    )
 }
}
export default ListTodo;