import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopEventComponent } from './top-event.component';

describe('TopEventComponent', () => {
  let component: TopEventComponent;
  let fixture: ComponentFixture<TopEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
