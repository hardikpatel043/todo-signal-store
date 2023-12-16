import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';

type Theme = 'light-mode' | 'dark-mode';

@Component({
  selector: 'personal-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
})
export class ThemeSwitcherComponent {
  theme = signal<Theme>('light-mode');

  document = inject(DOCUMENT);
  constructor() {
    effect(() => {
      if (this.theme() === 'light-mode') {
        this.document.documentElement.classList.add('light-mode');
        this.document.documentElement.classList.remove('dark-mode');
      }

      if (this.theme() === 'dark-mode') {
        this.document.documentElement.classList.add('dark-mode');
        this.document.documentElement.classList.remove('light-mode');
      }
    });
  }

  toggleTheme() {
    this.theme.update((theme) => {
      return theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    });
  }

}
