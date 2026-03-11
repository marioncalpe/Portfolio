import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

declare const emailjs: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent implements OnInit {
  currentYear = new Date().getFullYear();

  modal = {
    classroom: { status: false },
    monify:    { status: false },
  };

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      from_name:  ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      subject:    ['', Validators.required],
      message:    ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // afterNextRender garantit que le DOM est prêt
    setTimeout(() => this.initCursor(), 0);
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
    if (this.form.invalid) return;
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.form.value, 'YOUR_PUBLIC_KEY')
      .then(() => {
        alert('Message envoyé !');
        this.form.reset();
      })
      .catch((err: unknown) => console.error('EmailJS error:', err));
  }

  private initCursor(): void {
    const cur  = document.getElementById('cur');
    const ring = document.getElementById('ring');
    if (!cur || !ring) return;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    // Point : suit instantanément via transform (plus performant que left/top)
    document.addEventListener('mousemove', (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.transform = `translate(${mx}px, ${my}px)`;
    });

    // Ring : lerp pour l'effet de lag, aussi via transform
    const animateRing = () => {
      rx += (mx - rx) * 0.10;
      ry += (my - ry) * 0.10;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(animateRing);
    };
    animateRing();

    // Hover
    const onEnter = () => {
      cur.style.width      = '12px';
      cur.style.height     = '12px';
      cur.style.background = '#f29dff';
      ring.style.width     = '44px';
      ring.style.height    = '44px';
      ring.style.borderColor = 'rgba(242,157,255,0.5)';
    };
    const onLeave = () => {
      cur.style.width      = '8px';
      cur.style.height     = '8px';
      cur.style.background = '#b3a0ff';
      ring.style.width     = '32px';
      ring.style.height    = '32px';
      ring.style.borderColor = 'rgba(179,160,255,0.4)';
    };

    document.querySelectorAll('a, button, .project-row, .stack-chip')
      .forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });

    // Disparaît hors fenêtre
    document.addEventListener('mouseleave', () => {
      cur.style.opacity  = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cur.style.opacity  = '1';
      ring.style.opacity = '1';
    });
  }
}