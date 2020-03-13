import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStudComponent } from './dialog-stud.component';

describe('DialogStudComponent', () => {
  let component: DialogStudComponent;
  let fixture: ComponentFixture<DialogStudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogStudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
