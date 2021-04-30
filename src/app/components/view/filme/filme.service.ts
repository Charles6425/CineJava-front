import { Filme } from './filme.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {


  baseUrl:String = environment.baseURL
  constructor(private http: HttpClient) { }
  findAll(): Observable<Filme[]>{
    const url= `${this.baseUrl}/filme`
    return this.http.get<Filme[]>(url)

  }


}
