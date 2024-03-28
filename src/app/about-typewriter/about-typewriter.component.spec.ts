import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTypewriterComponent } from './about-typewriter.component';

describe('AboutTypewriterComponent', () => {
  let component: AboutTypewriterComponent;
  let fixture: ComponentFixture<AboutTypewriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTypewriterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutTypewriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
