import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGamingComponent } from './top-gaming.component';

describe('TopGamingComponent', () => {
  let component: TopGamingComponent;
  let fixture: ComponentFixture<TopGamingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopGamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
