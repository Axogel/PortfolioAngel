import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-skill',
  templateUrl: './button-skill.component.html',
  styleUrls: ['./button-skill.component.css']
})
export class ButtonSkillComponent {
  @Input() text: string='';
  @Input() link: string='';
}
