import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public form: FormGroup;

  public activiteFavorite: string;
  public activites: string[] = ['Sport', 'Ciné', 'Musique'];
  public food: {name: string, value: string}[] = [
    {name: 'Pain', value: 'pain'},
    {name: 'Pizza', value: 'pizza'},
    {name: 'Pate', value: 'pate'},
  ];

  public mySkills: string;
  public skills: {skill: string, skillsGroup: string[]}[] = [
    {skill: 'Programmation', skillsGroup: ['Java', 'PHP', 'Javascript']},
    {skill: 'Languages', skillsGroup: ['French', 'English', 'Vietnamese']}
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      request: [''],
      vegan: [''],
      sexe: [''],
      news: [''],
      hobby: [''],
      email: ['', [Validators.required, Validators.email]],
      food: [''],
      note: [''],
      agenda: [''],
      agendaBis: ['']
    });
  }

  public register() {
    console.log(this.form.value);
  }

  public getErrorMessage(): string {
    if (this.form.get('email').hasError('required')) {
      return 'Email required';
    } else if (this.form.get('email').hasError('email')) {
      return 'Email incorrect';
    }

    return '';
  }
}
