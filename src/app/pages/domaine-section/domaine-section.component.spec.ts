import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineSectionComponent } from './domaine-section.component';

describe('DomaineSectionComponent', () => {
  let component: DomaineSectionComponent;
  let fixture: ComponentFixture<DomaineSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomaineSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaineSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
