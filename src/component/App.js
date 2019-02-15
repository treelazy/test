import React from 'react';
// import { Switch, Route } from 'react-router';
// import AddTodoComponent from './AddTodo';
import AddTodo from '../container/Todo';
// import TodoList from '../container/TodoList';

const App = () => (
  <div>
    <AddTodo />
    {/* <TodoList /> */}
  </div>
);

export default App;

/* switch應用 */
/*
<Switch>
  <Route path="/home" render={() => <h1>home</h1>} />
  <Route exact path="/about" render={() => <h1>about</h1>} />
  <Route path="/user" render={() => <h1>user</h1>} />
  <Route path="/" component={AddTodoComponent} />
</Switch>
 */
