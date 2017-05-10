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

  constructor(private vacancyService: VacancyService){}
  ngOnInit(){
        this.vacancies = this.vacancyService.getFilterData();
  }

}
