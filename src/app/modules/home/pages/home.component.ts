import { Component, OnInit } from '@angular/core';

import { ProjectService, Project } from '@app/core';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    projects$: Observable<Project[]>;

    constructor(private projectService: ProjectService) { }

    ngOnInit(): void {
        this.loadProjects();
    }

    loadProjects() {
        this.projects$ = this.projectService.getAll();
    }


}
