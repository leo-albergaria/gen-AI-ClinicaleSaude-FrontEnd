import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-FrontEnd_Clinical_Capgemini';

  showMainPage: boolean = false;

  constructor(private router: Router) { }

  iniciarAqui() {
    this.showMainPage = true;
    this.router.navigate(['main']);
  }
}
