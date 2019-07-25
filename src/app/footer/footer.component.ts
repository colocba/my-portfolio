import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  subtitle: string;
  constructor() {
    this.subtitle = "I'm Amir Baum, a Computer Science graduate focusing on web development. Passionate about web development, specially with new framework technologies as Angular or React. Let me know your ideas and I'll make them live!"
  }

  ngOnInit() {
  }

}
