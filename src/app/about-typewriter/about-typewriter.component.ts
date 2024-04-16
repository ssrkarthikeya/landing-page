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
    "I'm a Cloud Native Full Stack Developer At IBM",
    "Some of my tech skills are...",
    "NoSQL solutions like MongoDB & AWS Dynamo DB",
    "RDBMS like Oracle, Microsoft SQL, IBM DB2",
    "Express JS for Backend Development",
    "Angular 17 for Frontend Development",
    "All powered by Node JS",
    "DevOps tooling like Kubernetes, Jenkins, and Docker",
    "Cloud solutions like AWS, Azure, and IBM Cloud",
    "and...",
    "I'm also passionate about ML & Deep Learning"]; // Add your job titles here

  typingSpeed = 42; // Adjust typing speed (milliseconds per character)
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
