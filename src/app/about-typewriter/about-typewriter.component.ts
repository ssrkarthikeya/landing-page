import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-typewriter',
  standalone: true,
  imports: [],
  templateUrl: './about-typewriter.component.html',
  styleUrl: './about-typewriter.component.css'
})
export class AboutTypewriterComponent implements OnInit {

  jobTitles: string[] = ["UX/UI Developer", "DevOps Engineer", "ML Enthusiast"]; // Add your job titles here
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  typingSpeed = 50; // Adjust typing speed (milliseconds per character)
  typingAnimation: string = '';
  isRoleComplete: boolean = false;

  constructor() { }

  ngOnInit(): void {
      this.type();
  }

  type() {
    let charIndex = 0;
    const textLength = this.text.length;
    const typingAnimationInterval = this.typingSpeed;

    const typeCharacter = () => {
      if (charIndex < textLength) {
        this.typingAnimation += this.text.charAt(charIndex);
        charIndex++;
        setTimeout(typeCharacter, typingAnimationInterval);
      } else {
        this.isRoleComplete = true;
      }
    };


    typeCharacter();
  }

}
