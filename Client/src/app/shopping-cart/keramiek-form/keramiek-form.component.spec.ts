import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeramiekFormComponent } from './keramiek-form.component';

describe('KeramiekFormComponent', () => {
  let component: KeramiekFormComponent;
  let fixture: ComponentFixture<KeramiekFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeramiekFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeramiekFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
