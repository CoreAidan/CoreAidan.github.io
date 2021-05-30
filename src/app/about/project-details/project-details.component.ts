import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/shared/models/project.model';
import  *  as  response  from  '../../../assets/json/projects.json';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  private paramSubscription;

  currentProjectIdentifier: string | undefined;

  project: Project | undefined;

  projects: Project[]

  constructor(private route: ActivatedRoute) {
    this.projects = (response as any).default as Project[];

    this.paramSubscription = this.route.params.subscribe( params => {
      this.currentProjectIdentifier = params['id'];
      this.project = this.projects.find( x => x.identifier == this.currentProjectIdentifier)
    });
  }

  ngOnInit(): void {
  }

}
