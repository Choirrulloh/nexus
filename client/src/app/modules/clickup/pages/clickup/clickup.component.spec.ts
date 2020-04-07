import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickupComponent } from './clickup.component';

describe('ClickupComponent', () => {
  let component: ClickupComponent;
  let fixture: ComponentFixture<ClickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClickupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
