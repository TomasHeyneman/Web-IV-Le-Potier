import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeramiekListComponent } from './keramiek-list.component';

describe('KeramiekListComponent', () => {
  let component: KeramiekListComponent;
  let fixture: ComponentFixture<KeramiekListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeramiekListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeramiekListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
