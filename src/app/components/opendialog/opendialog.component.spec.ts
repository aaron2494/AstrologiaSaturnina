import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpendialogComponent } from './opendialog.component';

describe('OpendialogComponent', () => {
  let component: OpendialogComponent;
  let fixture: ComponentFixture<OpendialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpendialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpendialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
