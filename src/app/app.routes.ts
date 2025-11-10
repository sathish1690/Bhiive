import { Routes } from '@angular/router';
import { HomelayoutComponent } from './Shared/homelayout/homelayout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SocialmediamarketingComponent } from './Services/socialmediamarketing/socialmediamarketing.component';
import { SearchenginemarketingComponent } from './Services/searchenginemarketing/searchenginemarketing.component';
import { PaidmarketingComponent } from './Services/paidmarketing/paidmarketing.component';
import { EcommercemarketingComponent } from './Services/ecommercemarketing/ecommercemarketing.component';
import { WebdevelopmentComponent } from './Services/webdevelopment/webdevelopment.component';
import { PerformancmarketingComponent } from './Services/performancmarketing/performancmarketing.component';

export const routes: Routes = [
   {path:'', component:HomelayoutComponent},
   {path:'aboutus', component:AboutusComponent, title:'About Us'},
   {path:'socialmediamarketing', component:SocialmediamarketingComponent, title:'Social Media Marketing'},
   {path:'searchenginemarketing', component:SearchenginemarketingComponent, title:'Search Engine Marketing'},
   {path:'paidmarketing', component:PaidmarketingComponent, title:'Paid Marketing'},
   {path:'ecommerce', component:EcommercemarketingComponent, title:'Ecommerce Marketing'},
   {path:'webdevelopment', component:WebdevelopmentComponent, title:'Web Development'},
   {path:'performancmarketing', component:PerformancmarketingComponent, title:'Performanc Marketing'},

];
