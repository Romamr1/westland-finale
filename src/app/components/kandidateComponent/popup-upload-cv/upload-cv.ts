import { Component } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class AdditionCalculateWindowData extends BSModalContext {
  constructor(public num1: number, public num2: number) {
    super();
  }
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
export class AdditionCalculateWindow implements ModalComponent<AdditionCalculateWindowData> {
  context: AdditionCalculateWindowData;

  public wrongAnswer: boolean;

  constructor(public dialog: DialogRef<AdditionCalculateWindowData>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
  }

  // onKeyUp(value) {
  //   this.wrongAnswer = value != 5;
  //   this.dialog.close();
  // }


  // beforeDismiss(): boolean {
  //   return true;
  // }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }
}