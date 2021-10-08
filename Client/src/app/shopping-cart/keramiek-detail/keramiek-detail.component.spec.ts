import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeramiekDetailComponent } from './keramiek-detail.component';

describe('KeramiekDetailComponent', () => {
  let component: KeramiekDetailComponent;
  let fixture: ComponentFixture<KeramiekDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeramiekDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeramiekDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
