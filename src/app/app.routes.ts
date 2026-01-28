import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home-component/home-component';
import { DetailComponent } from './components/pages/detail-component/detail-component';
import { ListComponent } from './components/pages/list-component/list-component';
import { NotFoundComponent } from './components/pages/not-found-component/not-found-component';

export const routes: Routes = [   //const routes è un array di oggetti di tipo Routes
    //Routes è un'interfaccia di Angular che definisce la struttura delle rotte nell'applicazione
    {
        path: '',   //path vuoto indica la rotta principale
        component: HomeComponent  //il componente associato a questa rotta
    },
    {
        path: 'detail',   //il path è meglio scriverlo in minusculo
        component: DetailComponent
    },
    {
        path: 'list',   //nel path scrivo il nome della rotta che voglio creare
        component: ListComponent
    },
    // {
    //     path: '**',   // serve per gestire tutte le rotte non definite
    //     redirectTo: '/'   // reindirizza alla home page
    // }
    {
        path: '**',
        component: NotFoundComponent
    }
];
