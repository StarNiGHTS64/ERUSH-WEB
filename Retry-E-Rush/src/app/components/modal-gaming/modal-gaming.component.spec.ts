import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGamingComponent } from './modal-gaming.component';

describe('ModalGamingComponent', () => {
  let component: ModalGamingComponent;
  let fixture: ComponentFixture<ModalGamingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
