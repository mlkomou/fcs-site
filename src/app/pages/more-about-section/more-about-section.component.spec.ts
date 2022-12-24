import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAboutSectionComponent } from './more-about-section.component';

describe('MoreAboutSectionComponent', () => {
  let component: MoreAboutSectionComponent;
  let fixture: ComponentFixture<MoreAboutSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreAboutSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreAboutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
