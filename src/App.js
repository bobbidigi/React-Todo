import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'

let data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      data
    }
  }

  toggleItem = (event, itemId) => {
    this.setState({
      data: this.state.data.map(item => {
        if(item.id === itemId){
          return {
            ...item,
            completed: !item.completed
          }
        }else{
          return item
        }
      })
    })
  }

    

  render() {
    return (
      <div>
        <div className="header">
          <h1>To-Do-List</h1>
        </div>
        <TodoList toggleItem={this.toggleItem} data={this.state.data}/>
      </div>
    );
  }
}

export default App;
