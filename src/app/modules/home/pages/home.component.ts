import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { DateAdapter } from '@angular/material/core';

import { Observable, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

// Material modules services
import {
  MatIconRegistry,
  MatChipInputEvent,
  MatDialog,
  MatDialogRef,
  MatSnackBar,
  MatSort
} from '@angular/material';

// Dialog component
import { DialogComponent } from '@app/modules/home/dialog/dialog.component';
import { SnackBarComponent } from '@app/modules/home/snack-bar/snack-bar.component';

// MatTable + services + pagination
import { MatTableDataSource, MatPaginator, MatPaginatorIntl } from '@angular/material';
import { UserService } from '@app/core/services/user.service';
import { UserModel } from '@app/core/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends MatPaginatorIntl implements OnInit, OnDestroy {
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

  // Etat du panneau
  public etatDuPanneau = false;

  // entrée, virgule, point-virgule
  public separateurs = [ENTER, COMMA, 186];

  // Liste à puces pays
  public pays: {nom: string}[] = [
    { nom: 'Chine' },
    { nom: 'France' },
    { nom: 'Italie' },
    { nom: 'Pays-Bas' }
  ];

  // Progress spinner
  public color = 'primary';
  public progression: number = 0;
  public sub;

  // Taleau d'utilisateurs
  public users: UserModel[];
  public dataSource: MatTableDataSource<UserModel>;
  public displayedColumns: string[] = ['gender', 'cell', 'email', 'nat', 'phone'];
  public itemsPerPageLabel: string = 'Utilisateurs par page'; // customize item per page label

  // Référence locale pour la pagination
  @ViewChild('paginator') public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  constructor(
    private fb: FormBuilder,
    private adapter: DateAdapter<any>,
    private mir: MatIconRegistry,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private userService: UserService) {
    super();
  }

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

    // MatIconRegistry
    this.mir.registerFontClassAlias('fontawesome', 'fa');

    // Progress spinner
    this.createCounter();

    // Get all users
    this.userService.getAll().subscribe( users => {
      console.log(users);
      this.users = users;
      this.dataSource = new MatTableDataSource(this.users);
      // Binding dataSource.paginator à la @ViewChild('paginator')
      this.dataSource.paginator = this.paginator;
      // Binding dataSource.sort à la @ViewChild('MatSort')
      this.dataSource.sort = this.sort;
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

  /**
   * Tabs
   * @param val
   */
  public log(val) {
    console.log(val);
  }

  /**
   * Ajout d'un pays dans la liste à puces pays
   * @param event Chip Input Event
   */
  public addChip(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Ajouter un pays dans la liste à puces pays
    if (value) {
      this.pays.push({ nom: value.trim() });
    }

    // Effacer le input
    if (input) {
      input.value = '';
    }
  }

  /**
   * Retirer une puce en mettant à jour la liste à puce pays
   * @param pays pays à supprimer
   */
  public removeChip(pays: { nom: string }): void {
    console.log(pays);
    this.pays = this.pays.filter(p => p !== pays );
  }

  /**
   * Count for spinner progress bar
   */
  public createCounter(): void {
    this.sub = timer(0, 100).pipe(
      takeWhile(x => x <= 100)
    )
    .subscribe(x => {
      this.progression = x;
    });
  }

  /**
   * Reset spinner progress bar
   */
  public reset(): void {
    this.color = 'primary';
    this.sub.unsubscribe();
    this.progression = 0;
    this.createCounter();
  }

  /**
   * Unsubscribe progress spinner and bar
   */
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  /**
   * Open dialog treatment
   * And create an instance of DialogComponent
   */
  public openDialog(): void {
     const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, {
      width: '500px',
      height: '300px',
      data: {nom: 'Poncet', prenom: 'Antonin'}
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
    });
  }

  /**
   * Barre de notification
   * @param message Message à faire passe dans la barre
   */
  public openSnackBar(message: string): void {
    // const snackBarRef = this.snackBar.open(message, 'Fermer', {duration: 500});
    const snackBarRef = this.snackBar.openFromComponent(SnackBarComponent, {data: {nom: 'Poncet', prenom: 'Antonin'}});

    snackBarRef.onAction().subscribe(() => {
      console.log('Le bouton de la snackbar a été cliqué !');
    });

    snackBarRef.afterOpened().subscribe(() => {
      console.log('SnackBar ouvert !');
    });

    snackBarRef.afterDismissed().subscribe(data => {
      console.log('SnackBar fermé !');
      console.log(data);
    });
  }

  /**
   * Filtrage par mot clé
   * @param filtre Mot à filtrer
   */
  public filtrer(filtre: string) {
    filtre = filtre.trim().toLowerCase();

    this.dataSource.filter = filtre;
  }


}
