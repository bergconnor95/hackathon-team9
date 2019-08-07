import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessGameComponent } from './business-game.component';

describe('BusinessGameComponent', () => {
  let component: BusinessGameComponent;
  let fixture: ComponentFixture<BusinessGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
