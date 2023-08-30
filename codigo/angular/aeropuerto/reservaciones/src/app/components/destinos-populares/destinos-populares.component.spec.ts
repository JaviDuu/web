import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinosPopularesComponent } from './destinos-populares.component';

describe('DestinosPopularesComponent', () => {
  let component: DestinosPopularesComponent;
  let fixture: ComponentFixture<DestinosPopularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinosPopularesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinosPopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
