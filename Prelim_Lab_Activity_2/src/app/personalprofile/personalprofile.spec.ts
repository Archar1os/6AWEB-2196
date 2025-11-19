import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personalprofile } from './personalprofile';

describe('Personalprofile', () => {
  let component: Personalprofile;
  let fixture: ComponentFixture<Personalprofile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personalprofile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personalprofile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
