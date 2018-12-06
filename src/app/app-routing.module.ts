import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CupangComponent } from './cupang/cupang.component';


import { CupangDetailComponent } from './cupang/cupang-detail/cupang-detail.component';
import { CupangEditComponent } from './cupang/cupang-edit/cupang-edit.component';

const appRoutes:Routes=[
    { path:'',redirectTo:'/cupangs',pathMatch:'full' },
    { path:'cupangs',component:CupangComponent,children:[

        { path: 'new',component:CupangEditComponent },
        { path: ':id',component:CupangDetailComponent },
        { path:':id/edit',component:CupangEditComponent },
    ]},
  
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}