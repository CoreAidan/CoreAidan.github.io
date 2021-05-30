import { Component, OnInit } from '@angular/core';
import  *  as  response  from  '../../assets/json/projects.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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

  projectRows: number

  constructor() {
    this.projects = (response as any).default;
    this.projectRows = this.projects.length / 2
  }

  ngOnInit(): void {
  }

}
