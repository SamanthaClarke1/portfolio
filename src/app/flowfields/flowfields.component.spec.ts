import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowfieldsComponent } from './flowfields.component';

describe('FlowfieldsComponent', () => {
  let component: FlowfieldsComponent;
  let fixture: ComponentFixture<FlowfieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowfieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
