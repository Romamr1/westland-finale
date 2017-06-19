import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { VacancyService } from '../../../servise/vacancy.service';
import { Vacancy } from '../../../servise/vacancy.service';


import { Overlay, overlayConfigFactory } from 'angular2-modal';
import {  Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CustomModalContext, CustomModal } from '../popup-upload-cv/upload-cv';

@Component({
    selector: 'kandidate-app',
    templateUrl: './kandidateVacancy.component.html', 
    styleUrls: ['./kandidateVacancy.component.css'],   
    providers: [VacancyService, Modal]
})
export class KandidateVacancyComponent implements OnInit {
  vacancies: Vacancy[] = [];
  
  constructor(
    private vacancyService: VacancyService, 
    public modal: Modal,
    vcRef: ViewContainerRef){  
     modal.overlay.defaultViewContainer = vcRef; 
  }
  
  openCustom() {
    return this.modal.open(CustomModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }


  ngOnInit(){   
    this.vacancyService.getData()
    .subscribe(
      data => {
        this.vacancies = data.vacancies;
        console.log('tests', data.vacancies);
      },
        error => {          
    });    
  }
}
