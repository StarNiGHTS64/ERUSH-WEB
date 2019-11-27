import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGamingComponent } from './details-gaming.component';

describe('DetailsGamingComponent', () => {
  let component: DetailsGamingComponent;
  let fixture: ComponentFixture<DetailsGamingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsGamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
