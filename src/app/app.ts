import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  currentYear = new Date().getFullYear();
  isPanelOpen = false;

  modal = {
    classroom: { status: false },
    monify: { status: false },
  };

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      from_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  togglePanel(): void {
    this.isPanelOpen = !this.isPanelOpen;
  }

  openClassroom(event: Event): void {
    event.stopPropagation();
    this.modal.classroom.status = true;
  }

  openMonify(event: Event): void {
    event.stopPropagation();
    this.modal.monify.status = true;
  }

  send(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      // Intégrer EmailJS ou autre service ici
      this.form.reset();
    }
  }
}