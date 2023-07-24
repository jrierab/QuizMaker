import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { TriviaQuestion } from 'src/app/models/trivia-results.model';
import { OpenTriviaDbService } from 'src/app/services/open-trivia-db.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent {
  category?: number;

  difficulty? : string;

  isQuizReady = false;

  questionList : Array<TriviaQuestion> = [];

  showSolution = false;

  numOk = 0;

  readonly numQuestions = 5;

  constructor(private route: ActivatedRoute, private router: Router, private triviaService: OpenTriviaDbService) {}

  ngOnInit() {
    this.category = this.route.snapshot.queryParams['category'];
    this.difficulty = this.route.snapshot.queryParams['difficulty'];
    this.showSolution = this.route.snapshot.data['showSolution'];

    console.log(this.showSolution);

    if (this.showSolution) {
      console.log('history', history.state);
      this.questionList =  history.state['questionList'];
      // In case of some navigation error, goto home
      if (!this.questionList || this.questionList.length===0) {
        this.gotoHome();
      } else {
        this.numOk = this.questionList.reduce((n, question) => n + (question.answer===question.correct_answer ? 1: 0), 0);
      }
    } else {
      // In case of some navigation error, goto home
      if (!this.difficulty || !this.category) {
        this.gotoHome();
      }
      this.triviaService.getTriviaQuestion(this.category as number, this.difficulty as string, this.numQuestions).subscribe(data => {
        this.questionList = data.results ?? [];
        this.questionList.forEach((question) => {
          question.choices = [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5);
        });
        console.log(this.questionList);
      });
    }
  }

  onIsQuestionAnswered(value: string, pos: number) {
    const question = this.questionList[pos];
    question.answer = value;
    question.isAnswered = true;
    this.isQuizReady = !this.questionList.some(answer => !answer.isAnswered);
  }

  onSubmit() {
    const navigationExtras: NavigationExtras = {
      state: { questionList: this.questionList},
    };
    this.router.navigate(['/quiz-solutions'], navigationExtras);
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
