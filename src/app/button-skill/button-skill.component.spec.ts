import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSkillComponent } from './button-skill.component';

describe('ButtonSkillComponent', () => {
  let component: ButtonSkillComponent;
  let fixture: ComponentFixture<ButtonSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSkillComponent]
    });
    fixture = TestBed.createComponent(ButtonSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
