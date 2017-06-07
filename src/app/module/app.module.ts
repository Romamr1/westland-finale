import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from '../components/app.component';

import { KandidateComponent } from '../components/kandidateComponent/kandidate.component';
import { BeschikbareComponent } from '../components/kandidateComponent/beschikbareComponent/beschikbare.component';
import { KandidateVacancyComponent } from '../components/kandidateComponent/kandidateVacancyComponent/kandidateVacancy.component';
import { SollicitatietipsComponent } from '../components/kandidateComponent/sollicitatietipsComponent/sollicitatietips.component';


import { HomeComponent }   from '../components/homeComponent/home.component';
import { VacaturesComponent }   from '../components/vacaturesComponent/vacatures.component';
import { VacancyComponent }   from '../components/vacancyComponent/vacancy.component';
import { NotFoundComponent }   from '../components/notFoundComponent/notFound.component';


import { EmployerComponent }   from '../components/employerComponent/employer.component';
import { EmployerHomeComponent }   from '../components/employerComponent/employerHomeComponent/employerHome.component';
import { EmployerVacaturePlaatsenComponent }   from '../components/employerComponent/employerVacaturePlaatsenComponent/employerVacaturePlaatsenComponent.component';
import { EmployerPayrollComponent }   from '../components/employerComponent/employerPayrollComponent/employerPayrollComponent.component';
import { EmployerWerknemerComponent }   from '../components/employerComponent/employerWerknemerComponent/employerWerknemerComponent.component';




import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { CustomModal } from '../components/kandidateComponent/popup-upload-cv/upload-cv';


// определение маршрутов
const kandChildRoutes: Routes = [
    { path: 'vacancy', component: VacaturesComponent},
    { path: 'beschikbare', component: BeschikbareComponent}, 
    { path: 'sollicitatietips', component: SollicitatietipsComponent},
    { path: 'home', component: KandidateVacancyComponent},
];

const emplChildRoutes: Routes = [
    { path: 'vacaturePlaatsen', component: EmployerVacaturePlaatsenComponent},
    { path: 'payroll', component: EmployerPayrollComponent}, 
    { path: 'werknemerPlaatsingConsultancy', component: EmployerWerknemerComponent},
    { path: 'home', component: EmployerHomeComponent},
];

const appRoutes: Routes =[
    //{ path: 'vacatures', component: VacaturesComponent},
    { path: 'vacatures/:id', component: VacancyComponent},
    { path: 'kendidate', component: KandidateComponent},
    { path: 'kendidate', component: KandidateComponent, children: kandChildRoutes},    
    { path: 'werkgevers', component: EmployerComponent},  
    { path: 'werkgevers', component: EmployerComponent, children: emplChildRoutes}, 
    { path: '', component: HomeComponent},
    { path: '**', component: NotFoundComponent },
];


@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    RouterModule.forRoot(appRoutes),
                    ModalModule.forRoot(),
                    BootstrapModalModule 
                    ],
    declarations: [ AppComponent,
                    HomeComponent,
                    KandidateComponent,
                    NotFoundComponent,
                    VacaturesComponent,
                    VacancyComponent,
                    EmployerComponent,
                    BeschikbareComponent,
                    KandidateVacancyComponent,
                    SollicitatietipsComponent,
                    EmployerHomeComponent,
                    EmployerPayrollComponent,
                    EmployerVacaturePlaatsenComponent,
                    EmployerWerknemerComponent,
                    CustomModal                    
                  ],
    bootstrap:    [ AppComponent ],
    entryComponents: [ CustomModal ]
})
export class AppModule { }
