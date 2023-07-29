import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeSection: string = 'Home';
  sections = [
    { name: 'Home', class: 'home' },
    { name: 'About', class: 'user' },
    { name: 'Portfolio', class: 'book-content' }
  ];

  ngOnInit() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  toggleMobileNav() {
    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('mobile-nav-active');
    }
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const windowWidth = window.innerWidth;
    if (windowWidth < 988) {
      const targetElement = event.target as HTMLElement;
      const navbarMenu = document.getElementById('navbarNavAltMarkup');

      if (navbarMenu && navbarMenu.contains(targetElement)) {
        this.closeNavbarMenu();
      }
    }
  }

  closeNavbarMenu() {
    const navbarToggler = document.getElementById('navbarToggler');
    if (navbarToggler) {
      navbarToggler.click();
    }
  }
}
