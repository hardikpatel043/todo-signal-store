import { Component, Input, inject, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TodoOption } from 'src/app/models/todo-option';
import { TodosStore } from './todo.facade';

@Component({
  selector: 'personal-todo-options',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="options-container">
  <p class="todos-left">{{ todosLeft }} items left</p>
  <ul class="main-options">
    @for(option of todoOptions; track $index) {
    <li>
      <button
        class="option-btn option-btn--primary"
        [ngClass]="{ active: option === selectedOption() }"
        (click)="onSelectOption(option)"
      >
        {{ option | titlecase }}
      </button>
    </li>
    }
  </ul>
  <button class="option-btn option-btn--secondary" (click)="onClearCompleted()">
    Clear completed
  </button>
</div>
`,
  styles: `.options-container {
    padding: 1.6rem 2.4rem 1.6rem 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .todos-left {
    font-size: 1.4rem;
    line-height: 1.4rem;
    letter-spacing: -0.19px;
    color: var(--text-color-400);
    transition: all 0.3s;
  }
  
  .main-options {
    list-style-type: none;
    display: flex;
    gap: 1.9rem;
  }
  
  .main-options li {
    height: 1.4rem;
  }
  
  .option-btn {
    border: none;
    outline: none;
    background: transparent;
    color: var(--text-color-400);
    font-family: inherit;
    font-size: 1.4rem;
    line-height: 1.4rem;
    letter-spacing: -0.19px;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .option-btn--primary {
    font-weight: 700;
  }
  
  .option-btn--secondary {
    font-weight: 400;
  }
  
  .option-btn:hover,
  .option-btn:focus {
    color: var(--text-color-100);
  }
  
  .active {
    color: rgba(58, 124, 253, 1);
  }
  
  `,
})

export class TodoOptionsComponent {
  @Input({ required: true }) todosLeft!: number;

  todoStore = inject(TodosStore);

  selectedOption = this.todoStore.selectedOption;

  todoOptions: TodoOption[] = ['all', 'active', 'completed'];

  onSelectOption(option: TodoOption) {
    this.todoStore.updateSelectedOption(option);
  }

  onClearCompleted() {
    this.todoStore.clearCompleted();
  }
}
