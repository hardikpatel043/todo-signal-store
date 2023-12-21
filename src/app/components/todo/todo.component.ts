import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { TodoHeaderComponent } from './todo-header.component';
import { TodoListComponent } from './todo-list.component';
import { TodoOptionsComponent } from './todo-options.component';
import { TodosStore } from './todo.facade';

@Component({
  selector: 'personal-todo',
  standalone: true,
  imports: [CommonModule, TodoOptionsComponent, TodoListComponent, TodoHeaderComponent, NewComponent],
  template: `
  @if( loaded()){
  <section class="todo-card">
              <personal-todo-header></personal-todo-header>
              <personal-new></personal-new>
                <main class="todo-main">
                <personal-todo-list [todos]="todos()"></personal-todo-list>
                <personal-todo-options [todosLeft]="todosLeft()"></personal-todo-options>
              </main>  
              
            </section>
          }@else{
            ...Loading
          }
         
`,
  styles: `
  .todo-card {
    max-width: 54rem;
    margin: 0 auto;
  }
  
  .todo-main {
    background-color: var(--bg-todo-color);
    border-radius: 0.5rem;
    box-shadow: 0 3.5rem 5rem -1.5rem var(--shadow-color);
    transition: all 0.3s;
  }
  `,
})
export class TodoComponent {

  todoStore = inject(TodosStore);
  todosLeft = this.todoStore.left;
  todos = this.todoStore.filteredTodos;
  loaded = this.todoStore.loaded;
}
