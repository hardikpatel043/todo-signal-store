import { computed, inject } from "@angular/core";
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { setLoaded, setLoading, withLoaderState } from "./loader.feature";

import { Todo } from "src/app/models/todo";
import { TodoOption } from "src/app/models/todo-option";
import { TodoService } from "./todo.service";

export const TodosStore = signalStore(
    { providedIn: 'root' },
    withState({
        todos: [] as Todo[],
        selectedOption: 'all' as TodoOption
    }),
    withComputed((store) => ({
        left: computed(() => store.todos().filter((todo) => !todo.completed).length),
        filteredTodos: computed(() => {
            switch (store.selectedOption()) {
                case 'all':
                    return store.todos();
                case 'active':
                    return store.todos().filter((todo) => !todo.completed);
                case 'completed':
                    return store.todos().filter((todo) => todo.completed);
            }
        })
    })),
    withLoaderState(),
    withMethods((state) => {
        const { todos } = state;
        const todoService = inject(TodoService);

        return {
            load: async () => {
                patchState(state, setLoading());
                const todos = await todoService.getTodos();
                patchState(state, { todos });
                patchState(state, setLoaded());

            },
            toggleTodo: (id: number) => {
                patchState(state, {
                    todos: todos().map((todo => {
                        if (todo.id == id) todo.completed = !todo.completed;
                        return todo;
                    }))
                });
            },
            removeTodo: (id: number) => {
                patchState(state, {
                    todos: todos().filter((todo) => todo.id !== id)
                });
            },
            updateSelectedOption: (selectedOption: TodoOption) => {
                patchState(state, { selectedOption });
            },

            clearCompleted: () => {
                patchState(state, {
                    todos: todos().filter((todo) => !todo.completed)
                });
            },
            add: (todo: Todo) => {
                patchState(state, { todos: [...todos(), todo] });
            }
        };
    }),
    withHooks({
        onInit({ load }) {
            load();
        }
    })
);
