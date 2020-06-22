import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  public testSubject1 = new BehaviorSubject<any>('initial value');
  public testSubject2 = new Subject<any>();
  public data = "";
  constructor(private http: HttpClient) { }

  public showData(){
    return  "test";
  }

  public setData(value){
  this.data = value;
  this.testSubject1.next(value);
  this.testSubject2.next(value);
  }

  public getData(): Observable<any>{
    return this.http.get('https://reqres.in/api/users?page=2')
  }

}
