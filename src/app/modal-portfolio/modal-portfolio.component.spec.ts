import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPortfolioComponent } from './modal-portfolio.component';

describe('ModalPortfolioComponent', () => {
  let component: ModalPortfolioComponent;
  let fixture: ComponentFixture<ModalPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPortfolioComponent]
    });
    fixture = TestBed.createComponent(ModalPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
