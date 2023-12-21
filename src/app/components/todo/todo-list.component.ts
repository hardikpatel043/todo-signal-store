import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Todo } from 'src/app/models/todo';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'personal-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  template: `<ul class="todo-list">
  @for(todo of todos; track todo.id) {
  <li>
    <personal-todo-item [todo]="todo" />
  </li>
  } @empty {
  <li>
    <p class="empty-list-text">No todos found</p>
  </li>
  }
</ul>
`,
  styles: `.todo-list {
    list-style-type: none;
  }
  
  .empty-list-text {
    padding: 2rem 2.4rem;
    color: var(--text-color-100);
    letter-spacing: -0.25px;
    box-shadow: inset 0 -0.1rem 0 0 var(--btn-color);
    transition: all 0.3s;
  }
  
  `,
})
export class TodoListComponent {
  @Input({ required: true }) todos!: Todo[];
}
