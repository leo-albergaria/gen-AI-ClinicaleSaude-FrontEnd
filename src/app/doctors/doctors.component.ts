import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {
  constructor() { }

  ngOnInit(): void {
  }

  doctors = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Dr. Médico ${index + 1}`,
    specialty: this.getSpecialty(index),
    experience: Math.floor(Math.random() * 30) + 1, // Ano de experiência aleatório entre 1 e 30
    location: `Clínica ${Math.floor(Math.random() * 5) + 1}`
  }));

  getSpecialty(index: number): string {
    const specialties = ['Cardiologia', 'Dermatologia', 'Oftalmologia', 'Ortopedia', 'Neurologia'];
    return specialties[index % specialties.length];
  }

  // Variável para controlar o estado de abertura/fechamento da seção
  isOpen = false;

  // Função para alternar o estado da seção
  toggleOptions() {
    this.isOpen = !this.isOpen;
  }


}
