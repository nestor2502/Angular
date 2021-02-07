import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './components/country/country.component';
import { HomeComponent } from './components/home/home.component';
import { FailedResultComponent } from './components/failed-result/failed-result.component';


const routes: Routes = [
  {path:'', component:HomeComponent},  
  {path:'no-result', component: FailedResultComponent },
  {path:'continent/:type/:op', component: CountryComponent },
  {path:'language/:type/:op', component: CountryComponent },
  {path:'search/:type/:op', component: CountryComponent },
  {path:'**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
