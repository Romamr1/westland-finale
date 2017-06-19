import { Component } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { NgForm} from '@angular/forms';

import { VacancyService } from '../../../servise/vacancy.service';

export class CustomModalContext {}

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
  providers: [VacancyService]
})

export class CustomModal implements CloseGuard, ModalComponent<CustomModalContext> {
  context: CustomModalContext;

  public wrongAnswer: boolean;
  public cvData: any = null;
  public motivLetterData: any = null;
  public cvName: string = '';
  public motivLetterName: string = '';
  public name: string = '';
  public insert: string = '';
  public secondName: string = '';
  public email: string = '';
  public description: string = '';


  constructor(public dialog: DialogRef<CustomModalContext>, private vacancyService: VacancyService) {   
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);
  }

  closeModalWindow() {
    console.log('nn,nm');
    this.wrongAnswer = false;
    this.dialog.close();
  }  
  
  onChangeMotivation(event) {
    var files = event.srcElement.files;
    var data;
    var file = files[0];    
    this.motivLetterName = file.name;
    var reader = new FileReader();
    reader.onload = (e)=>{ 
      data = e.target;      
      this.motivLetterData = data.result; 
    };
    reader.readAsText(file);
  }

  onChangeCv(event) {
    var files = event.srcElement.files;
    var data;
    var file = files[0];    
    this.cvName = file.name;
    var reader = new FileReader();
    reader.onload = (e)=>{ 
      data = e.target      
      this.cvData = data.result;
    };
    reader.readAsText(file);
  }

  loadCV(uploadCvForm){
    var body = {
      "first_name": this.name,
      "middle_name": this.insert,
      "last_name": this.secondName,
      "email": this.email,
      "subject": this.description,
      "cv_file": this.cvData,
      "cv_file_name": this.cvName,
      "motivation_file": this.motivLetterData,
      "motivation_file_name": this.motivLetterName
    }

    console.log("body", body);
    
    this.vacancyService.sendCv(body)
      .subscribe(
      data => {
        console.log('tests', data);
        alert('Your CV was sent');
        this.closeModalWindow();        
      },
        error => {          
    });    
        
  }  
  beforeClose(): boolean {
    return this.wrongAnswer;
  }
}
