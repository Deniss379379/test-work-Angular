import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOutcomeComponent } from './table-outcome.component';

describe('TableOutcomeComponent', () => {
  let component: TableOutcomeComponent;
  let fixture: ComponentFixture<TableOutcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOutcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
