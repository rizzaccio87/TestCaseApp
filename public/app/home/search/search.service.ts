import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';

@Injectable()
export class SearchService {
    private _baseUrl: string = '/api/search';

    constructor(private _http: Http) {}

    search(rule: any): Observable<any> {
		return this._http.post(this._baseUrl, rule)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  	}

    private handleError(error: Response) {
		return Observable.throw(error.json().message || 'Server error');
	}
}