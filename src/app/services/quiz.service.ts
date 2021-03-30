import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/bootstrap.json', name: 'Bootstrap' },
      { id: 'data/sql.json', name: 'SQL' },
      { id: 'data/javascript.json', name: 'JavaScript' },
    ];
  }

}
