import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


export class Vacancy {

    constructor(
      public id: number,
      public jobTitle: string,
      public functionTitle: string,
      public company: string,
      public place: string,
      public education: string,
      public contactOfService: string,
      public functionDescription: string,
      public contactInformation: string,
      public salary: number
    ) { }
}

@Injectable()
export class VacancyService {

  constructor(private http: Http){ }

    private data: Vacancy[] = [
        {
          id: 1,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 2,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 3,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 4,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 5,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 6,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 7,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 8,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 9,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        },
        {
          id: 10,
          jobTitle: 'Looking for a business analyst!',
          functionTitle: 'Business analyst',
          company: 'Alfa bank',
          place: 'Kiev',
          education: 'MBO',
          contactOfService: 'Parttime',
          functionDescription: 'Personal Assistant to a very dynamic and focused businessperson, Chief HR  Officer of a large diversified Financial-Industrial Group. Excellent opportu ...',
          contactInformation: 'HR Maria, tel - 0129232424',
          salary: 14000
        }
    ];

    postData(){
      let body = {
          "typeQuery": "filterVacancy", 
          "id":"", 
          "keyWord": "title", 
          "location": "Kiev", 
          "professionalSector": ["Logistiek","gdfgdfg","educat"], 
          "education":["Universiteit"],
          "contractType":["Fulltime"], 
          "experience":"0-2","skip":1,"limit":10
        };
      let headers = new Headers({
        "content-type": "application/json",
        "authorization": "Basic cm9vdDo0NDQ0NDQ0",
        "cache-control": "no-cache",
        "postman-token": "25057dba-038c-9f6f-3d5e-02cb29896acd"
      });
      return this.http.post('http://edu.bionic-university.com:2281/vacancy/filter', body, headers)
                        .map((resp:Response)=>resp.json())
                        .catch((error:any) =>{
                          return Observable.throw(error);
                        });

    }
    getData(): Vacancy[] {
        
        this.postData()
          .subscribe((data) => {console.log('werty', data);});
        return this.data;
    }
    getFilterData(): Vacancy[] {
        return this.data;
    }
    getVacancy(id: number ): Vacancy {
      return this.data[id];
    }
}
