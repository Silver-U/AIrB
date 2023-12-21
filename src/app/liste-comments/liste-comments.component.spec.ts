import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommentsComponent } from './liste-comments.component';

describe('ListeCommentsComponent', () => {
  let component: ListeCommentsComponent;
  let fixture: ComponentFixture<ListeCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCommentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
