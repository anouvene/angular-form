import { Component } from '@angular/core';

@Component({
  selector: 'app-card-overview',
  templateUrl: './card-overview.component.html',
  styleUrls: ['./card-overview.component.css']
})
export class CardOverviewComponent {

  public cartes = [
    {
      titre: 'Village côtier',
      sousTitre: 'Magnifique village',
      image: 'https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore ' +
      'et dolore magna aliqua. Ut enim ad minim'
    },
    {
      titre: 'Pont en asie',
      sousTitre: 'Coucher de soleil',
      image: 'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ' +
      'labore et dolore magna aliqua. Ut enim ad minim'
    },
    {
      titre: 'Asie',
      sousTitre: 'Rizières en Asie',
      image: 'https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore ' +
      'et dolore magna aliqua. Ut enim ad minim'
    }
  ];

  constructor() { }

}
