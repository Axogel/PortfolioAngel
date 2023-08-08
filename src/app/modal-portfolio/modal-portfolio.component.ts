import { Component , Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-portfolio',
  templateUrl: './modal-portfolio.component.html',
  styleUrls: ['./modal-portfolio.component.css']
})
export class ModalPortfolioComponent {
  @Input() selectedItem: any;

  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    // Realizar acciones adicionales antes de cerrar el modal si es necesario

    // Cerrar el modal
    this.activeModal.close();
  }
}





