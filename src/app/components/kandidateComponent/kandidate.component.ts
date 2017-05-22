import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { VacancyService } from '../../servise/vacancy.service';
import { Vacancy } from '../../servise/vacancy.service';


import { Overlay, overlayConfigFactory } from 'angular2-modal';
import {  Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CustomModalContext, CustomModal } from './popup-upload-cv/upload-cv';

@Component({
    selector: 'kandidate-app',
    templateUrl: './kandidate.component.html',    
    providers: [VacancyService, Modal]
})
export class KandidateComponent implements OnInit {
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
        this.vacancies = this.vacancyService.getData();
  }
}
