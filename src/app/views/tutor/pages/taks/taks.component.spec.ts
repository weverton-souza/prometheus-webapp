import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaksComponent } from './taks.component';

describe('TaksComponent', () => {
  let component: TaksComponent;
  let fixture: ComponentFixture<TaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
