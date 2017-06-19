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
	public vacancies: Vacancy[] = [];
	public curentVacancies: Vacancy[] = [];
	public pageCount: number = 0;
	public pageCountObj: any[] = [];
	public curentPage:  number = 1;
	public experience: string = '0-2';
  public tuinbouw: boolean;
  public techniek: boolean;
  public bouw: boolean;
  public ict: boolean;
  public logistiek: boolean;
  public pso: boolean;
  public transport: boolean;
  public trefwoord: string;
  public locatie: string;
  public mbo: boolean;
  public hbo: boolean;
  public universiteit: boolean;
  public parttime: boolean;
  public fulltime: boolean;
  public stage: boolean;
  public traineeship: boolean;

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
          	"keyWord": this.trefwoord ? this.trefwoord: "",
          	"location": this.locatie ? this.locatie: "", 
          	"professionalSector": [],          	
          	"education":[],          	
          	"contractType":[],          	
          	"experience": this.experience,
          	"skip":1,
          	"limit":10000
        };
        if (this.tuinbouw) {body.professionalSector.push("tuinbouw")};
        if (this.techniek) {body.professionalSector.push("techniek")};
        if (this.bouw) {body.professionalSector.push("bouw")};
        if (this.ict) {body.professionalSector.push("ict")};
        if (this.logistiek) {body.professionalSector.push("logistiek")};
        if (this.pso) {body.professionalSector.push("pso")};
        if (this.transport) {body.professionalSector.push("transport")};


        if (this.mbo) {body.education.push("mbo")};
        if (this.hbo) {body.education.push("hbo")};
        if (this.universiteit) {body.education.push("universiteit")};


        if (this.parttime) {body.contractType.push("parttime")};
        if (this.fulltime) {body.contractType.push("fulltime")};
        if (this.stage) {body.contractType.push("stage")};
        if (this.traineeship) {body.contractType.push("traineeship")};        

        console.log(body);
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
