import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';

@Component({
  selector: 'personal-todo-header',
  standalone: true,
  imports: [CommonModule, ThemeSwitcherComponent],
  template: `<header class="header">
  <h1 class="title">TODO</h1>
  <personal-theme-switcher></personal-theme-switcher>
</header>
`,
  styles: `.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    .title {
      color: white;
      font-size: 4rem;
      font-weight: 700;
      line-height: 4rem;
      letter-spacing: 1.5rem;
    }
  }
  
  @media (max-width: 40em) {
    .title {
      font-size: 2.5rem;
      line-height: 2rem;
      letter-spacing: 1.3rem;
    }
  }
  `,
})
export class TodoHeaderComponent { }
