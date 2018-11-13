import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper-overview',
  templateUrl: './stepper-overview.component.html',
  styleUrls: ['./stepper-overview.component.css']
})
export class StepperOverviewComponent implements OnInit {
  premierFormulaire: FormGroup;
  secondFormulaire: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.premierFormulaire = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
    });

    this.secondFormulaire = this.fb.group({
      email: ['', Validators.email]
    });
  }
}
