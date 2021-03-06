import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatbarComponent } from './statbar.component';

describe('StatbarComponent', () => {
  let component: StatbarComponent;
  let fixture: ComponentFixture<StatbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
