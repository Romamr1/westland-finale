import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


export class Vacancy {

    constructor(
      public id: number,
      public title: string,
      public functionTitle: string,
      public companyName: string,
      public location: string,
      public education: string,
      public contractType: string,
      public whatWeOffer: string,
      public contactInformation: string,
      public salary: number
    ) { }
}

@Injectable()
export class VacancyService {

  constructor(private http: Http){ }

    public headers = new Headers({
      "content-type": "application/json",
      "authorization": "Basic MjRAdWtyLm5ldDoyNA=="        
    });

    public curentVacancy: Vacancy[]; 

    postData(body){     
      
      return this.http.post('http://edu.bionic-university.com:2281/vacancy/filter', body , this.headers)
                        .map((resp:Response)=>resp.json())
                        .catch((error:any) =>{
                          return Observable.throw(error);
                        });
    }
    getData() {
      let body = {
          "typeQuery": "filterVacancy", 
          "id":"", 
          "keyWord": "", 
          "location": "", 
          "professionalSector": [], 
          "education":[],
          "contractType":[], 
          "experience":"",
          "skip":1,
          "limit":10
        };       
      return this.postData(body);       
    }

    getFilterData( obj: any ) {      
      return this.postData(obj);
    }

    getVacancy(id: number ) {

      let body = {
          "typeQuery": "filterVacancy", 
          "id": id, 
          "keyWord": "", 
          "location": "", 
          "professionalSector": [], 
          "education":[],
          "contractType":[], 
          "experience":"",
          "skip":1,
          "limit":1
        };   

      
      return this.postData(body);
    }

    sendCv(obj: any ) {      
      return this.postSendCv(obj);
    }

    postSendCv(body){     
      
      return this.http.post('http://edu.bionic-university.com:2281/upload/files', body , this.headers)
                        .map((resp:Response)=>resp.json())
                        .catch((error:any) =>{
                          return Observable.throw(error);
                        });
    }

}
