import { Component, OnInit} from '@angular/core';
import { VacancyService } from '../../servise/vacancy.service';
import { Vacancy } from '../../servise/vacancy.service';


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

  	constructor(private vacancyService: VacancyService){}

  	rerender(num: number) {
  		this.curentPage = num;
  		this.curentVacancies = [];
  		for (let i=(num-1)*5; ((i < (num-1)*5+5) && (i < this.vacancies.length));i++){
  			this.curentVacancies.push(this.vacancies[i]);  			
  		}  		
  	}


	ngOnInit(){  	
	    this.vacancies = this.vacancyService.getFilterData();	   
	    this.pageCount = Math.ceil(this.vacancies.length/5);
	    for (let i=0; i<this.pageCount; i++){
	    	this.pageCountObj.push({num: i+1});
	    }
	    this.rerender(1);	
	}

}
