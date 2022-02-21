import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionNavComponent } from './addition-nav.component';

describe('AdditionNavComponent', () => {
  let component: AdditionNavComponent;
  let fixture: ComponentFixture<AdditionNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
