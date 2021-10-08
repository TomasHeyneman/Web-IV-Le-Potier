import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeramiekComponent } from './keramiek.component';

describe('KeramiekComponent', () => {
  let component: KeramiekComponent;
  let fixture: ComponentFixture<KeramiekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeramiekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeramiekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
