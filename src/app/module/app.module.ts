import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from '../components/app.component';
import { KandidateComponent }   from '../components/kandidateComponent/kandidate.component';
import { HomeComponent }   from '../components/homeComponent/home.component';
import { VacaturesComponent }   from '../components/vacaturesComponent/vacatures.component';
import { VacancyComponent }   from '../components/vacancyComponent/vacancy.component';
import { NotFoundComponent }   from '../components/notFoundComponent/notFound.component';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';


import { CustomModal } from '../components/kandidateComponent/popup-upload-cv/upload-cv';

//import { CustomModal } from '../components/kandidateComponent/popup-upload-cv/upload-cv';

// определение маршрутов
const appRoutes: Routes =[
    { path: 'vacatures', component: VacaturesComponent},
    { path: 'vacatures/:id', component: VacancyComponent},
    { path: 'kendidate', component: KandidateComponent},    
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
                    CustomModal                    
                  ],
    bootstrap:    [ AppComponent ],
    entryComponents: [ CustomModal ]
})
export class AppModule { }
