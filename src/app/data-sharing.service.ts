import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private activeSection: string = '';

  getActiveSection(): string {
    return this.activeSection;
  }

  setActiveSection(section: string): void {
    this.activeSection = section;
  }
}
