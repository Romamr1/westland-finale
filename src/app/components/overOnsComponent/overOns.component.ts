import { Component, ViewContainerRef } from '@angular/core';


import { Overlay, overlayConfigFactory } from 'angular2-modal';
import {  Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CustomModalContext, CustomModal } from '../kandidateComponent/popup-upload-cv/upload-cv';

@Component({
    selector: 'kandidate-app',
    templateUrl: './overOns.component.html',
    styleUrls: ['./overOns.component.css'],    
    providers: [Modal]
})
export class OverOnsComponent {
  
  
  constructor(public modal: Modal,
    vcRef: ViewContainerRef){
    modal.overlay.defaultViewContainer = vcRef;
  }

  openCustom() {
    return this.modal.open(CustomModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
  
 
}