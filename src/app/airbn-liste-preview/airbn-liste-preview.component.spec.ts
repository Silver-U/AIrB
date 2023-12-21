import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirbnListePreviewComponent } from './airbn-liste-preview.component';

describe('AirbnListePreviewComponent', () => {
  let component: AirbnListePreviewComponent;
  let fixture: ComponentFixture<AirbnListePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirbnListePreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirbnListePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
