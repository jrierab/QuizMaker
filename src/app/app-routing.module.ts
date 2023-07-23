import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizCreateComponent } from './Pages/quiz-create/quiz-create.component';
import { QuizQuestionsComponent } from './Pages/quiz-questions/quiz-questions.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/quiz-create', pathMatch: 'full' },
  { path: 'quiz-create', component: QuizCreateComponent },
  { path: 'quiz-questions', component: QuizQuestionsComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
