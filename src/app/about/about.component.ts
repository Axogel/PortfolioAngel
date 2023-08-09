import { AfterViewInit, Component } from '@angular/core';
import { ButtonSkillComponent } from '../button-skill/button-skill.component';
import * as AOS from 'aos';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  urlImg:string = './assets/img/theme/';
  imgs= [
    {
      name: 'HTML',
      url: `fa-brands fa-html5`,
    },
    {
      name: 'CSS',
      url: `fa-brands fa-css3-alt`,
    },
    {
      name: 'JavaScript',
      url: `fa-brands fa-square-js`,
    },
    {
      name: 'Angular',
      url: `fa-brands fa-angular`,
    },
    {
      name: 'PHP',
      url: `fa-brands fa-php`,
    },
    {
      name: 'LARAVEL',
      url: `fa-brands fa-laravel`,
    },
    {
      name: 'BOOTSTRAP',
      url: `fa-brands fa-bootstrap`,
    },
    {
      name: 'MySQL',
      url: `fa-solid fa-database`,
    },
    {
      name: 'Vue',
      url: 'fa-brands fa-vuejs',
    },
    {
      name: 'Python',
      url: 'fa-brands fa-python',
    }
  ];
  
}
