import React, { Component } from 'react';
import './App.css';
// import Counter from './Components/Counter';
// import Dropdown from './Components/Dropdown';
// import ColorPicker from './Components/ColorPicker';
import TodoList from './Components/ToDoList';

// import { colorPickerOptions } from './data/colorPickerOptions';
import initialTodos from './data/todos.json';

// ============================================================

// export const App = () => (
//   <>
//     {/* <Counter initialValue={10}/> */}

//     {/* <Dropdown /> */}

//     {/* <ColorPicker options={colorPickerOptions} /> */}

//   </>
// );

// ============================================================

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
    return (
      <>
        <div>
          <p>Total quantity of todos: {totalTodoCount}</p>
          <p>Quantity of completed todos: {completedTodosCount}</p>
          <p>Quantity of incompleted todos: </p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
