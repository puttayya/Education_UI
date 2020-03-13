import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyInfoComponent } from './faculty-info.component';

describe('FacultyInfoComponent', () => {
  let component: FacultyInfoComponent;
  let fixture: ComponentFixture<FacultyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
