import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-typewriter',
  standalone: true,
  imports: [],
  templateUrl: './about-typewriter.component.html',
  styleUrl: './about-typewriter.component.css'
})
export class AboutTypewriterComponent implements OnInit {

  jobTitles: string[] = ["Hi!",
    "I'm a Full Stack Developer At IBM",
    "proficient in Spring Boot with Java and Angular with Typescript",
    "I excel in DevOps with tools like Kubernetes, Jenkins, and Docker, and have expertise in AWS, Azure, and IBM Cloud",
    "I'm also passionate about ML & Deep Learning"]; // Add your job titles here

  currentText = "Hi!";
  typingSpeed = 50; // Adjust typing speed (milliseconds per character)
  typingAnimation: string = '';
  isRoleComplete: boolean = false;
  jobIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.type();
  }

  type() {
    const typingAnimationInterval = this.typingSpeed;

    const typeCharacter = () => {
      const text = this.jobTitles[this.jobIndex];
      let charIndex = 0;
      const textLength = text.length;

      const typeNextCharacter = () => {
        if (charIndex < textLength) {
          this.typingAnimation = text.substring(0, charIndex + 1);
          charIndex++;
          setTimeout(typeNextCharacter, typingAnimationInterval);
        } else {
          setTimeout(() => {
            this.jobIndex = (this.jobIndex + 1) % this.jobTitles.length; // Loop through jobTitles array
            this.type(); // Start typing next job title
          }, 2000); // Wait for 1 second before starting next job title
        }
      };

      typeNextCharacter();
    };

    typeCharacter();
  }

}
