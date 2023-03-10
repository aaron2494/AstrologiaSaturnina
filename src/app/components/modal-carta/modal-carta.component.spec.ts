import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCartaComponent } from './modal-carta.component';

describe('ModalCartaComponent', () => {
  let component: ModalCartaComponent;
  let fixture: ComponentFixture<ModalCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCartaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
