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
  public lincedIn: string = '';
  public facebook: string = '';
  public twitter: string = '';
  public youtube: string = '';




  constructor(private activateRoute: ActivatedRoute, private vacancyService: VacancyService){
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    console.log(this.id);
  }

  onApply() {
    this.vacancyApply = false;
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

  onSend() {
    var body = {
      "first_name": this.name,
      "middle_name": this.insert,
      "last_name": this.secondName,
      "email": this.email,
      "linkedIn": this.lincedIn,
      "facebook": this.facebook,
      "twitter": this.twitter,
      "youtube": this.youtube,
      "subject": this.description,
      "cv_file": this.cvData,
      "cv_file_name": this.cvName,
      "motivation_file": this.motivLetterData,
      "motivation_file_name": this.motivLetterName
    }

    console.log("body", body);
    
    // this.vacancyService.sendCv(body)
    //   .subscribe(
    //   data => {
    //     console.log('tests', data);
    //     alert('Your CV was sent');              
    //   },
    //     error => {          
    // });    
  }

  cansel(){
    this.vacancyApply = true;
  }

  ngOnInit(){   
    this.vacancy = {
      id: 0,
      title: '',
      functionTitle: '',
      companyName: '',
      location: '',
      education: '',
      contractType: '',
      whatWeOffer: '',
      contactInformation: '',
      salary: 0
    };
    this.vacancyService.getVacancy(this.id)
      .subscribe(
      data => {
        console.log('tests', data.vacancies[0]);
        this.vacancy = data.vacancies[0];
      },
        error => {          
    });    

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
