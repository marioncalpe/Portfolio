import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() date: string = '';
  @Output() onClose = new EventEmitter<void>();

  close(): void {
    this.onClose.emit();
  }

  @HostListener('document:click', ['$event.target'])
  onClick(target: EventTarget | null): void {
    if (!(target instanceof HTMLElement)) return;
    const modalContent = document.querySelector('.modal-content');
    if (modalContent && !modalContent.contains(target)) {
      this.close();
    }
  }
}