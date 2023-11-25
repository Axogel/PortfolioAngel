
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



import { ModalPortfolioComponent } from '../modal-portfolio/modal-portfolio.component';


interface PortfolioItem {
  title: string;
  url: string;
  img: string;
  description: string;
  skill: string[];
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  isHovered = false;
  skills:any =[
    "Laravel",
    "Angular",
    "Bootstrap",
    "Javascript",
    "SQL",
    "TailwindCSS"
  ]
  portfolios:any = [
    {
      title: "Templates",
      url: "#",
      img: `
      https://get.foundation/assets/img/sites-templates/f6-template-realestate.svg
      `,
      description: `
      Implemented a clean and minimalist design aesthetic aligned with the brand's identity
      `
    },
    {
      title: "Templates",
      url: "#",
      img: `
      https://firmbee.com/wp-content/uploads/template_9_freebees_0-900x856.png
      `,
      description: `
      Implemented a clean and minimalist design aesthetic aligned with the brand's identity
      `
    },
    {
      title: "Templates",
      url: "#",
      img: `
      https://repository-images.githubusercontent.com/158229292/94300293-92db-4778-bbe2-4891817af266
      `,
      description: `
      Implemented a clean and minimalist design aesthetic aligned with the brand's identity
      `
    },
    
  ]
  
  selectedItem: any;
  constructor(private modalService: NgbModal) {}

  openModal(item: any) {

    this.selectedItem = item;
    const modalRef = this.modalService.open(ModalPortfolioComponent);
    modalRef.componentInstance.selectedItem = this.selectedItem;
  }
}
