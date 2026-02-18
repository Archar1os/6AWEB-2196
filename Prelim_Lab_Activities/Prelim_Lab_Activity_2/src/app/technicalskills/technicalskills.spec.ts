import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Technicalskills } from './technicalskills';

describe('Technicalskills', () => {
  let component: Technicalskills;
  let fixture: ComponentFixture<Technicalskills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Technicalskills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Technicalskills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
