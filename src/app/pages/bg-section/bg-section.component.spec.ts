import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgSectionComponent } from './bg-section.component';

describe('BgSectionComponent', () => {
  let component: BgSectionComponent;
  let fixture: ComponentFixture<BgSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
