import { Component } from '@angular/core';
import { FooterComponent } from './components/todo/footer.component';
import { TodoComponent } from './components/todo/todo.component';

@Component({
  standalone: true,
  imports: [TodoComponent, FooterComponent],
  selector: 'personal-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'personal';
}
