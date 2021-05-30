import { Component, OnInit } from '@angular/core';
import  *  as  response  from  '../../../assets/json/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: {
    identifier: string,
    name: string,
    website: string,
    intro: string,
    shortDescription: string,
    requirements: string[],
    overview: string,
    challenge: string,
    solution: string,
    results: string
  }[]

  constructor() {
    this.projects = (response as any).default;

  }

  ngOnInit(): void {
  }

}
