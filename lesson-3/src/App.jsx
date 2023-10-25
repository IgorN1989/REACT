import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css';
// import Counter from './Components/Counter';
// import Dropdown from './Components/Dropdown';
// import ColorPicker from './Components/ColorPicker';
import TodoList from './Components/ToDoList';
import TodoEditor from './Components/ToDoEditor';
import Filter from './Components/Filter';

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
    filter: '',
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

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normolizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normolizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodosCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <TodoEditor onSubmit={this.addTodo} />
        <div>
          <p>Total quantity of todos: {totalTodoCount}</p>
          <p>Quantity of completed todos: {completedTodosCount}</p>
          <p>Quantity of incompleted todos: </p>
        </div>

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;

// ============================================================
