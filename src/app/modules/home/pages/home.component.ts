import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validator} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public form: FormGroup;

  public activites: string[] = ['Sport', 'Ciné', 'Musique'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      request: [''],
      vegan: [''],
      sexe: [''],
      news: [''],
      hobby: [''],
    });
  }

  public register() {
    console.log(this.form.value);
  }
}
