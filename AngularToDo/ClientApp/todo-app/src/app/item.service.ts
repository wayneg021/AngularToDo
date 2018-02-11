import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

  constructor(private http: Http) { }

  getItems() {
    const apiUrl = 'api/items';
    return this.http.get(apiUrl)
              .map((res: Response) => res.json());
  }
}
