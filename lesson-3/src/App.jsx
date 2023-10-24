import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css';
// import Counter from './Components/Counter';
// import Dropdown from './Components/Dropdown';
// import ColorPicker from './Components/ColorPicker';
import TodoList from './Components/ToDoList';
import TodoEditor from './Components/ToDoEditor';

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

// import Form from './Components/Form';

// class App extends Component {
//   state = {};

//   formSubmitHandler = data => {
//     console.log(data);
//   };

//   render() {
//     return (
//       <>
//         <Form onSubmit={this.formSubmitHandler} />
//       </>
//     );
//   }
// }

// export default App;

// ============================================================

class App extends Component {
  state = {
    todos: initialTodos,
  };

  addTodo = text => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
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
        <TodoEditor onSubmit={this.addTodo} />
        <div>
          <p>Total quantity of todos: {totalTodoCount}</p>
          <p>Quantity of completed todos: {completedTodosCount}</p>
          <p>Quantity of incompleted todos: </p>
        </div>

        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;

// ============================================================
