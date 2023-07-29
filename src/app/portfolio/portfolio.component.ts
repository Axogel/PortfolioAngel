
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




import { ModalPortfolioComponent } from '../modal-portfolio/modal-portfolio.component';

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
      title: "VillarTechnologies",
      url: "https://staging.villartechnologies.com.ve/",
      img: "./../../assets/img/portfolio/Villar.png",
      description: "in the villar site I used my skills for the correct development in this project, and I used my front end skills to make the design attractive to the user and my back end skills for the development of the logic of the site."
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
