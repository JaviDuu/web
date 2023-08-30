import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosReservadosComponent } from './vuelos-reservados.component';

describe('VuelosReservadosComponent', () => {
  let component: VuelosReservadosComponent;
  let fixture: ComponentFixture<VuelosReservadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuelosReservadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VuelosReservadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
