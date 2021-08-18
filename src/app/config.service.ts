import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
  postStudents(data:any) {
    return this
            .http
            .post('http://127.0.0.1:8000/api/store',data);
  }
  getStudents() {
    return this
            .http
            .get('http://127.0.0.1:8000/api/students');
  }
  deleteStudents(id:any) {
    return this
            .http
            .get('http://127.0.0.1:8000/api/delete/'+id);
  }

  editStudents(id:any) {
    return this
            .http
            .get('http://127.0.0.1:8000/api/edit/'+id);
  }
}
