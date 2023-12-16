import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TodosStore } from '../todo.facade';
import { v4 } from 'uuid';

@Component({
  selector: 'personal-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `<form
      [formGroup]="newTodoForm"
      class="input-wrapper"
      (ngSubmit)="onSubmit()"
      >
      <input
        class="todo-checkbox"
        type="checkbox"
        formControlName="completed"
      />
      <input
        class="todo-input"
        type="text"
        placeholder="Create a new todo..."
        formControlName="text"
      />
      </form>`,
  styleUrl: './new.component.scss',
})
export class NewComponent {
  fb = inject(FormBuilder);
  newTodoForm = this.fb.group({
    completed: new FormControl(false),
    text: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  todoStore = inject(TodosStore);
  onSubmit() {
    this.todoStore.add({
      id: v4(),
      text: this.newTodoForm.value.text as string,
      completed: this.newTodoForm.value.completed as boolean
    });
  }
}