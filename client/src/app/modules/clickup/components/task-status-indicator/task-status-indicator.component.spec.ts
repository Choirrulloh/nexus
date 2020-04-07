import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatusIndicatorComponent } from './task-status-indicator.component';

describe('TaskStatusIndicatorComponent', () => {
  let component: TaskStatusIndicatorComponent;
  let fixture: ComponentFixture<TaskStatusIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskStatusIndicatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStatusIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
