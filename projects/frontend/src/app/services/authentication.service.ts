import { Injectable } from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {Observable} from "rxjs";

const LOGIN = gql`
  mutation authenticateUser($input: AuthInput!) {
    authenticateUser(input: $input) {
      access_token
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private apollo: Apollo) { }

  login(username:string,password:string): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: LOGIN,
      variables: {
        input: {
          username: username,
          password: password,
        },
      },
    });
  }

  get isLogged():any {
    return localStorage.getItem('access_token');
  }
}
