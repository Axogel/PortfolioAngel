import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasAComponent } from './pruebas-a.component';

describe('PruebasAComponent', () => {
  let component: PruebasAComponent;
  let fixture: ComponentFixture<PruebasAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebasAComponent]
    });
    fixture = TestBed.createComponent(PruebasAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
