import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetalsComponent } from './car-detals.component';

describe('CarDetalsComponent', () => {
  let component: CarDetalsComponent;
  let fixture: ComponentFixture<CarDetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarDetalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
