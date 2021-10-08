import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKeramiekComponent } from './add-keramiek.component';

describe('AddKeramiekComponent', () => {
  let component: AddKeramiekComponent;
  let fixture: ComponentFixture<AddKeramiekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKeramiekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKeramiekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
