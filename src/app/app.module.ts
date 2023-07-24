import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizQuestionsComponent } from './Pages/quiz-questions/quiz-questions.component';
import { QuizCreateComponent } from './Pages/quiz-create/quiz-create.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { AnswerButtonComponent } from './components/answer-button/answer-button.component';
import { ScoreDirective } from './directives/score.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuizCreateComponent,
    QuizQuestionsComponent,
    PageNotFoundComponent,
    QuestionCardComponent,
    AnswerButtonComponent,
    ScoreDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
