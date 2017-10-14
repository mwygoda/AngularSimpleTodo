import {Injectable} from '@angular/core';
import {Init} from './init-todos';

@Injectable()
export class TodoService extends Init {

  constructor() {
    super();
    console.log('todo service initzializet');
    this.load();
  }

  getTodos() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo) {
    const todos = JSON.parse(localStorage.getItem('todos'));

    todos.push(newTodo);

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(textTodo) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].text === textTodo) {
        todos.splice(i, 1);
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateTodo(oldTodo, updatedTodo) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].text === oldTodo) {
        todos[i].text = updatedTodo;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }

}
