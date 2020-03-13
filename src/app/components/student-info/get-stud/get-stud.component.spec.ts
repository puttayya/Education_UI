import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStudComponent } from './get-stud.component';

describe('GetStudComponent', () => {
  let component: GetStudComponent;
  let fixture: ComponentFixture<GetStudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
