import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { JoinUs } from './join-us/join-us';
import { Partners } from './partners/partners';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
{ path: '', component: Home },
{ path: 'about', component: About },
{ path: 'join-us', component: JoinUs },
{ path: 'partners', component: Partners },
{ path: '**', component: NotFound }
];
