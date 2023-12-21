import { Injectable, inject } from '@angular/core';
import { delay, firstValueFrom, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TodoService {

    http = inject(HttpClient);

    getTodos() {
        return firstValueFrom(of([
            {
                "completed": true,
                "text": "Complete online JavaScript course",
                "id": 1
            },
            {
                "completed": false,
                "text": "Jog around the park x3",
                "id": 2
            },
            {
                "completed": false,
                "text": "10 minutes meditation",
                "id": 3
            },
            {
                "completed": false,
                "text": "Read for 1 hour",
                "id": 4
            },
            {
                "completed": false,
                "text": "Pick up groceries",
                "id": 5
            },
            {
                "completed": false,
                "text": "Complete Todo App on Frontend Mentor",
                "id": 6
            }
        ]).pipe(delay(5)));
    }
}