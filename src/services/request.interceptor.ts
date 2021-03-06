import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { JsonFormatter } from 'tslint/lib/formatters';

// array in local storage for registered users
let users = [
  {
    id: 'user.id',
    username: 'user.username',
    firstName: 'user.firstName',
    lastName: 'user.lastName',
    token: 'fake-jwt-token',
  },
  {
    id: 'any',
    username: 'any',
    firstName: 'any',
    lastName: 'any',
    token: 'string',
  },
];
//let users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(1500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/applicants') && method === 'GET':
          return getApplicants();
        case url.endsWith('/applicant') && method === 'POST':
          return addApplicant();
        case url.endsWith('/educations') && method === 'GET':
          return getEducations();
        case url.endsWith('/techs') && method === 'GET':
          return getTechs();
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/users/register') && method === 'POST':
          return register();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        case url.match(/\/users\/\d+$/) && method === 'GET':
          return getUserById();
        case url.match(/\/users\/\d+$/) && method === 'PUT':
          return updateUser();
        case url.match(/\/users\/\d+$/) && method === 'DELETE':
          return deleteUser();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const { username, password } = body;
      const user = users.find(
        (x: any) => x.username === username && x.password === password
      );
      if (!user) return error('Username or password is incorrect');
      return ok({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: 'fake-jwt-token',
      });
    }

    function register() {
      const user = body;

      if (users.find((x: { username: any }) => x.username === user.username)) {
        return error('Username "' + user.username + '" is already taken');
      }

      user.id = users.length
        ? Math.max(...users.map((x: { id: any }) => x.id)) + 1
        : 1;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      return ok();
    }

    function getUsers() {
      // if (!isLoggedIn()) return unauthorized();
      return ok(users as any);
    }

    function getApplicants() {
      const initApplicantsList = [
        {
          name: '_',
          email: '_',
          education: '_',
          technology: '_',
        },
      ];

      const applicants = window.localStorage.getItem('applicants');
      if (applicants) {
        return ok(JSON.parse(applicants) as any);
      }

      // throw new Error('Function not implemented.');
      return ok(initApplicantsList as any);
    }

    function addApplicant() {
      const data = body;
      const applicants = window.localStorage.getItem('applicants');
      if (applicants) {
        //const applicants = window.localStorage.getItem('applicants');
        const applicantsArray = JSON.parse(applicants);

        window.localStorage.setItem(
          'applicants',
          JSON.stringify([...applicantsArray, data])
        );
      } else {
        window.localStorage.setItem('applicants', JSON.stringify([data]));
      }

      const response = window.localStorage.getItem('applicants');
      if (response) {
        return ok(JSON.parse(response) as any);
      }
      

      return ok(response as any);
    }

    function getEducations() {
      const response = [
        { value: 'secondary', viewValue: 'Secondary education' },
        { value: 'professional', viewValue: 'Professional education' },
        { value: 'higher', viewValue: 'Higher education' },
      ];
      // throw new Error('Function not implemented.');
      return ok(response as any);
    }

    function getTechs() {
      const response = [
        { value: 'java', viewValue: 'Java' },
        { value: 'c#', viewValue: 'C#' },
        { value: 'javaScript', viewValue: 'JavaScript' },
      ];
      // throw new Error('Function not implemented.');
      return ok(response as any);
    }

    function getUserById() {
      if (!isLoggedIn()) return unauthorized();

      const user = users.find((x: any) => x.id === idFromUrl());
      return ok(user);
    }

    function updateUser() {
      if (!isLoggedIn()) return unauthorized();

      let params = body;
      let user = users.find((x: any) => x.id === idFromUrl());

      // only update password if entered
      if (!params.password) {
        delete params.password;
      }

      // update and save user
      Object.assign(user, params);
      localStorage.setItem('users', JSON.stringify(users));

      return ok();
    }

    function deleteUser() {
      if (!isLoggedIn()) return unauthorized();

      users = users.filter((x: any) => x.id !== idFromUrl());
      localStorage.setItem('users', JSON.stringify(users));
      return ok();
    }

    // helper functions

    function ok(
      body?:
        | {
            id: any;
            username: any;
            firstName: any;
            lastName: any;
            token: string;
          }
        | undefined
    ) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message: string) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
