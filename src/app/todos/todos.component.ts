import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any;
  text: string;
  oldText: string
  appState = 'default';

  constructor(private _todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  addTodo() {
    const newTodo = {
      text: this.text
    };
    this.todos.push(newTodo);

    this._todoService.addTodo(newTodo);
  }

  deleteTodo(textTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text === textTodo) {
        this.todos.splice(i, 1);
      }
    }
    this._todoService.deleteTodo(textTodo);
  }

  editTodo(todo) {
    this.appState = 'edit';
    this.oldText = todo;
    this.text = todo;
  }

  updateTodo() {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text === this.oldText) {
        this.todos[i].text = this.text;
      }
      this._todoService.updateTodo(this.oldText, this.text);

      this.appState = 'default';
    }
  }
}
