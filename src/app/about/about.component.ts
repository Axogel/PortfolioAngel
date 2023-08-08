import { AfterViewInit, Component } from '@angular/core';
import { ButtonSkillComponent } from '../button-skill/button-skill.component';



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
      url: `${this.urlImg}html.jpg`,
    },
    {
      name: 'CSS',
      url: `${this.urlImg}css.jpg`,
    },
    {
      name: 'JavaScript',
      url: `${this.urlImg}javascript.png`,
    },
    {
      name: 'Angular',
      url: `${this.urlImg}angular.jpg`,
    },
    {
      name: 'PHP',
      url: `${this.urlImg}OIP4.jpg`,
    },
    {
      name: 'LARAVEL',
      url: `${this.urlImg}laravel.png`,
    },
    {
      name: 'BOOTSTRAP',
      url: `${this.urlImg}bootstrap.jpg`,
    },
    {
      name: 'MySQL',
      url: `${this.urlImg}mysql.jpg`,
    },
  ];
  
}
