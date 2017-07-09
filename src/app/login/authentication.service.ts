import {Injectable} from '@angular/core';
import {Headers, Http, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';




@Injectable()
export class AuthenticationService {

  constructor(public http: Http) {
  }

  public isLoggedIn(username: string, password: string): Observable<boolean> {
    const headers = new Headers({'Content-Type': 'X-custom'});
    const option = new RequestOptions({headers: headers});

    return this.http.get('./assets/login.json', option)
      .map((res: Response) => {
        return res.json().username === username &&
          res.json().password === password;
      })
      .catch((error: any) => {
        return Observable.throw(error.statusText)
      });


  }
}
