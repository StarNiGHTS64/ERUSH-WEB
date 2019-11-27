import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGamingsComponent } from './list-gamings.component';

describe('ListGamingsComponent', () => {
  let component: ListGamingsComponent;
  let fixture: ComponentFixture<ListGamingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGamingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGamingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
