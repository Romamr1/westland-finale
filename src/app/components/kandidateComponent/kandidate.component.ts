import { Component, OnInit, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import { VacancyService } from '../../servise/vacancy.service';
import { Vacancy } from '../../servise/vacancy.service';

import { Overlay, overlayConfigFactory } from 'angular2-modal';

import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { AdditionCalculateWindow, AdditionCalculateWindowData } from './popup-upload-cv/upload-cv';

@Component({
    selector: 'kandidate-app',
    templateUrl: './kandidate.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [VacancyService]
})
export class KandidateComponent implements OnInit {
  vacancies: Vacancy[] = [];
  
  constructor(private vacancyService: VacancyService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal){
    overlay.defaultViewContainer = vcRef;
  }


  
  openCustom() {
    this.modal.open(AdditionCalculateWindow, {});
  }


  ngOnInit(){
        this.vacancies = this.vacancyService.getData();
  }
}
