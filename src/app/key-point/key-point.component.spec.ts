import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPointComponent } from './key-point.component';

describe('KeyPointComponent', () => {
  let component: KeyPointComponent;
  let fixture: ComponentFixture<KeyPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
