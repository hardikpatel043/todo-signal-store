import { Component, Input, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Todo } from 'src/app/models/todo';
import { TodosStore } from '../todo.facade';

@Component({
  selector: 'personal-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="todo">
  <button
    class="todo-btn"
    aria-label="toggle"
    [ngClass]="todo.completed ? 'todo-btn--completed' : ''"
    (click)="updateTodo()"
  ></button>
  <p class="todo-text" [ngClass]="todo.completed ? 'todo-text--completed' : ''">
    {{ todo.text }}
  </p>
  <button class="todo-delete-btn" (click)="deleteTodo()">
    <img
      src="./../../../../assets/images/icon-cross.svg"
      alt="Cross icon image to delete a todo"
    />
  </button>
</div>
`,
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input({ required: true }) todo!: Todo;

  todoStore = inject(TodosStore);
  updateTodo() {
    this.todoStore.toggleTodo(this.todo.id as number);
  }

  deleteTodo() {
    this.todoStore.removeTodo(this.todo.id as number);
  }
}
