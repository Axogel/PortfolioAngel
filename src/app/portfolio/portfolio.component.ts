
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

   portfolios:PortfolioItem[] = [
    {
      title: "VillarTechnologies",
      url: "https://staging.villartechnologies.com.ve/",
      img: "./../../assets/img/portfolio/Villar.png",
      description: "I utilized my skills for the accurate development of the Villar site. I applied my front-end expertise to create an appealing user interface and employed my back-end skills to build the site's underlying logic.",
      skill: ["fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-square-js", "fa-brands fa-php", "fa-brands fa-laravel","fa-brands fa-bootstrap", "fa-solid fa-database"]
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
