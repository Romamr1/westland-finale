import { Component, OnInit} from '@angular/core';
import { VacancyService } from '../../servise/vacancy.service';
import { Vacancy } from '../../servise/vacancy.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'vacancy-app',
    templateUrl: './vacatures.component.html',
    providers: [VacancyService]
})
export class VacaturesComponent implements OnInit {
	vacancies: Vacancy[] = [];
	curentVacancies: Vacancy[] = [];
	pageCount: number = 0;
	pageCountObj: any[] = [];
	curentPage:  number = 1;
	experience: string = '0-2';

  	constructor(private vacancyService: VacancyService){}

  	rerender(num: number) {
  		this.curentPage = num;
  		this.curentVacancies = [];
  		for (let i=(num-1)*5; ((i < (num-1)*5+5) && (i < this.vacancies.length));i++){
  			this.curentVacancies.push(this.vacancies[i]);  			
  		}  		
  	}

  	submit(form: NgForm){
        
        let body = {
        	"typeQuery": "filterVacancy", 
          	"id":"", 
          	"keyWord": form.value.trefwoord ? form.value.trefwoord: "",
          	"location": form.value.locatie ? form.value.locatie: "", 
          	"professionalSector": [],          	
          	"education":[],          	
          	"contractType":[],          	
          	"experience": this.experience,
          	"skip":1,
          	"limit":10000
        };
        if (form.value.tuinbouw) {body.professionalSector.push("tuinbouw")};
        if (form.value.techniek) {body.professionalSector.push("techniek")};
        if (form.value.bouw) {body.professionalSector.push("bouw")};
        if (form.value.ict) {body.professionalSector.push("ict")};
        if (form.value.logistiek) {body.professionalSector.push("logistiek")};
        if (form.value.pso) {body.professionalSector.push("pso")};
        if (form.value.transport) {body.professionalSector.push("transport")};


        if (form.value.mbo) {body.education.push("mbo")};
        if (form.value.hbo) {body.education.push("hbo")};
        if (form.value.universiteit) {body.education.push("universiteit")};


        if (form.value.parttime) {body.contractType.push("parttime")};
        if (form.value.fulltime) {body.contractType.push("fulltime")};
        if (form.value.stage) {body.contractType.push("stage")};
        if (form.value.traineeship) {body.contractType.push("traineeship")};        

        this.vacancyService.getFilterData(body)
		    .subscribe(
		      data => {
		        this.vacancies = data.vacancies; 
            this.pageCount = Math.ceil(this.vacancies.length/5);
		        this.pageCountObj = [];
			    for (let i=0; i<this.pageCount; i++){
			    	this.pageCountObj.push({num: i+1});
			    }
			    this.rerender(1);
		      },
		        error => {  
		        console.log('ERROR')        
		    });

    }


	ngOnInit(){  
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

	    this.vacancyService.getFilterData(body)
		    .subscribe(
		      data => {
		        this.vacancies = data.vacancies;
		        this.pageCount = Math.ceil(this.vacancies.length/5);
		        this.pageCountObj = [];
			    for (let i=0; i<this.pageCount; i++){
			    	this.pageCountObj.push({num: i+1});
			    }
			    this.rerender(1);
		      },
		      error => { 
             console.log("ERROR");
		    });
	}

}
