import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apple } from '../models/apple';

@Injectable({
  providedIn: 'root'
})
export class AppleService {
private baseurl="https://localhost:8090/api/v1/insertion"
  constructor(private http:HttpClient) { }
  getall():Observable<any>{
    return this.http.get<any>(this.baseurl)
  }
  adduser(user:Apple):Observable<any>{
    return this.http.post<any>(this.baseurl,{data:user})
  }
  deleteuser(id:number):Observable<any>{
    return this.http.delete<any>(`${this.baseurl}/id/${id}`)
  }
  getbyemail(email:string):Observable<any>{
    return this.http.get<any>(`${this.baseurl}/search?email=${email}`)
  }
  updateuser(id:number,user:Apple):Observable<any>{
    return this.http.put<any>(`${this.baseurl}/id/${id}`,{data:user})
  }
}
