import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadShotComponent } from './head-shot.component';

describe('HeadShotComponent', () => {
  let component: HeadShotComponent;
  let fixture: ComponentFixture<HeadShotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadShotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
