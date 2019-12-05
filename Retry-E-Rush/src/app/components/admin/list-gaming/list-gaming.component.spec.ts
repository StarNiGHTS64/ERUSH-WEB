import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGamingComponent } from './list-gaming.component';

describe('ListGamingComponent', () => {
  let component: ListGamingComponent;
  let fixture: ComponentFixture<ListGamingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
