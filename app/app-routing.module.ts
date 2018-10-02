import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { DetailsComponent } from './components/details/details.component';
import { ReviewComponent } from './components/review/review.component';
import { CompletionComponent } from './components/completion/completion.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: 'completion',
    component: CompletionComponent
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
