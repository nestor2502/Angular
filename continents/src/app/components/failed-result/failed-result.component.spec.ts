import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedResultComponent } from './failed-result.component';

describe('FailedResultComponent', () => {
  let component: FailedResultComponent;
  let fixture: ComponentFixture<FailedResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
