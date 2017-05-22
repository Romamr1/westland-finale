import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';

export class CustomModalContext {
  
}

@Component({
  selector: 'upload-cv',
  styles: [`
        .custom-modal-container {
            padding: 15px;
            height: 400px;  
            background-color: #868686;
            color: #E4E4E4;          
        }

        div.row {
          margin-top: 15px;
        }

        textarea{
          resize: none;
        }

        .upload-btn {
          margin: 50px 100px auto 100px;
          width: 147px;
          height: 50px;

        }

        .input-file {
          padding-left: 0;
        }

        .custom-modal-header {
            background-color: #219161;
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 40px;
        }
    `],
  templateUrl: './upload-cv.html',
})


export class CustomModal implements CloseGuard, ModalComponent<CustomModalContext> {
  context: CustomModalContext;

  public wrongAnswer: boolean;

  constructor(public dialog: DialogRef<CustomModalContext>) {
    // this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);
  }

  
  closeModalWindow() {
    console.log('nn,nm');
    this.wrongAnswer = false;
    this.dialog.close();
  }


  beforeClose(): boolean {
    return this.wrongAnswer;
  }
}




  // context: AdditionCalculateWindowData;

  // public wrongAnswer: boolean;

  // constructor(public dialog: DialogRef<AdditionCalculateWindowData>) {
  //   this.context = dialog.context;
  //   // this.wrongAnswer = false;
  //   console.log(this.dialog.onDestroy);
  // }

  // onKeyUp(value) {
  //   console.log(value);
  //   this.wrongAnswer = value != 5;
  //   //this.dialog.close();
  // }


  // beforeDismiss(): boolean {
  //   return true;
  // }

  // beforeClose(): boolean {
  //   console.log('hvhbhj');
  //   return this.wrongAnswer;
  // }
// }