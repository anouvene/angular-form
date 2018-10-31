import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { DateAdapter } from '@angular/material/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

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

  // Logs events
  public evenements: string[] = [];

  // Autocomplete
  public countries: any = [
    {name: 'Italie'},
    {name: 'France'},
    {name: 'Espagne'},
    {name: 'Royaume Uni'}
  ];
  public filteredCountries: Observable<any> = this.countries;

  constructor(private fb: FormBuilder, private adapter: DateAdapter<any>) { }

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
      agendaBis: [''],
      country: ['']
    });

    this.filteredCountries = this.form.get('country').valueChanges.startWith(null).map(input => {
      if (!input) {
        return this.countries;
      } else {
        console.log(input);
        return this.countries.filter(country => country.name.toLowerCase().startsWith(input.toString().toLowerCase()));
      }
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

  /**
   * Datepicker Events
   * @param type
   * @param evenement
   */
  public ajouterEvenement(type: string, evenement: MatDatepickerInputEvent<Date>) {
    this.evenements.push(`${type}: ${evenement.value}`);
  }

  /**
   * Local date adapter
   * @param locale
   */
  public setLocale(locale: string) {
    // console.log('Locale: ', locale);
    this.adapter.setLocale(locale);
  }

  /**
   * Country filter with input field
   * @param input
   * @returns {any}
   */
  public filtrerPays(input: string) {
    return this.filteredCountries = this.countries.filter(country => country.name.toLowerCase().includes(input.toLowerCase()));
  }

  /**
   * Display country name value
   * @param country
   * @returns {any}
   */
  public afficherPays (country) {
    return country ? country.name : country;
  }

}
