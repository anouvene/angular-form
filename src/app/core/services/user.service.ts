import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from '@app/core/models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private url: string = 'https://randomuser.me/api/0.6/?results=100';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<UserModel[]> {
    return this.httpClient.get(this.url).map( (res: {results: {user: any, seed: any}[]}) => {
      const users = res.results.map(user => {
        const mappedUser = {
          gender: user['user'].gender,
          cell: user['user'].cell,
          email: user['user'].email,
          nat: user['user'].nationality,
          phone: user['user'].phone
        };
        return mappedUser;
      });
      return users;
    });
  }
}
