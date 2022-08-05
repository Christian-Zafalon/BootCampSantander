import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  api = 'https://sheet.best/api/sheets/3a20381a-ed87-45ee-8169-7ef7f3ed873a'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  // Metodo Retorna a lista de usuarios

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.api)
  }

  // Metodo Cadastrar usuario
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.api, user, this.httpOptions)
  }

  // Metodo Exclui usuario
  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.api}/id/${id}`)
  }

  // Metodo Edita usuario
  updateUser(id: string, user:User):Observable<User>  {
    return this.httpClient.put<User>(`${this.api}/id/${id}`, user, this.httpOptions);
  }

  // Metodo para trazer um unico usuario
  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.api}/id/${id}`)
  }
}
