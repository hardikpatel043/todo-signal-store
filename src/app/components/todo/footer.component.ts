import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by
        <a
          href="https://www.linkedin.com/in/hardikpatel043/"
          target="_blank"
          >Hardik</a
        >.
      </div>
    </footer>
  `,
  styles: `
    .footer {
      padding: 2rem 0;
      background-color: var(--bg-dark-color);
      transition: all 0.3s;
    }

    .attribution {
      color: var(--text-color-400);
      text-align: center;
    }

    .attribution a:link, .attribution a:visited {
      text-decoration: none;
      font-weight: 700;
      letter-spacing: -0.19px;
      color: var(--text-color-100);
      transition: all 0.3s;
    }

    .attribution a:hover, .attribution a:active {
      color: var(--text-color-100);
    }

  `,
})
export class FooterComponent { }
