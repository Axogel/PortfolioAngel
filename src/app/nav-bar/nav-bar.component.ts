import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Output() activeSectionChanged = new EventEmitter<string>();
  activeSection: string = "";
  sections = [
    { name: 'home', class: 'home' },
    { name: 'about', class: 'user' },
    { name: 'resume', class: 'file-blank' },
    { name: 'portfolio', class: 'book-content' },
    { name: 'contact', class: 'envelope' }
  ];

  setActiveSection(section: string) {
    this.activeSection = section;
    this.activeSectionChanged.emit(section);
  }
}
