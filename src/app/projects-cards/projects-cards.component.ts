import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-projects-cards',
  templateUrl: './projects-cards.component.html',
  styleUrls: ['./projects-cards.component.css']
})
export class ProjectsCardsComponent implements OnInit {

  @Input() isAngular: boolean;
  private jsonPath: string;
  projects: object;

  constructor(private httpService: HttpClient) {
  }

  ngOnInit() {
    // Checking if this component is ment for angular or react projects
    console.log(this.isAngular);
    if (this.isAngular) {
      this.jsonPath = './assets/angular-projects.json'
    } else {
      this.jsonPath = './assets/react-projects.json'
    }
    this.httpService.get(this.jsonPath).subscribe(
      data => {
        this.projects = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
