import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirbnPreviewComponent } from './airbn-preview.component';

describe('AirbnPreviewComponent', () => {
  let component: AirbnPreviewComponent;
  let fixture: ComponentFixture<AirbnPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirbnPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirbnPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
