import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription} from 'rxjs/Subscription';
import { VacancyService } from '../../servise/vacancy.service';
import { Vacancy } from '../../servise/vacancy.service';

@Component({
    selector: 'vacancy-app',
    templateUrl: './vacancy.component.html',
    providers: [VacancyService]
})
export class VacancyComponent implements OnInit, OnDestroy {
  id: number;
  vacancy: Vacancy;
  private subscription: Subscription;
  vacancyApply: boolean = true;

  constructor(private activateRoute: ActivatedRoute, private vacancyService: VacancyService){
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    console.log(this.id);
  }

  onApply() {
    this.vacancyApply = false;
  }

  cansel(){
    this.vacancyApply = true;
  }

  ngOnInit(){
    this.vacancy = this.vacancyService.getVacancy(this.id - 1);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
