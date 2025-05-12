import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  addArticle(titleInput: HTMLInputElement, linkInput: HTMLInputElement): void {
    const title = titleInput.value.trim();
    const link = linkInput.value.trim();

    if (title && link) {
      console.log('Aggiunto:', { title, link });
      // Qui potresti anche salvarli in un array, inviarli al backend, ecc.
      titleInput.value = '';
      linkInput.value = '';
    } else {
      alert('Entrambi i campi sono obbligatori!');
    }
  }
}
