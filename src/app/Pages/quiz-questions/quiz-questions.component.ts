import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  private readonly numQuestions = 5;

  constructor(private route: ActivatedRoute, private triviaService: OpenTriviaDbService) {}

  ngOnInit() {
    this.category = this.route.snapshot.queryParams['category'];
    this.difficulty = this.route.snapshot.queryParams['difficulty'];

    this.triviaService.getTriviaQuestion(this.category as number, this.difficulty as string, this.numQuestions).subscribe(data => {
      this.questionList = data.results ?? [];
      console.log(data);
    });
  }

  onIsQuestionAnswered(pos: number) {
    this.questionList[pos].isAnswered = true;
    this.isQuizReady = !this.questionList.some(answer => !answer.isAnswered);
  }

  onSubmit() {
    this.showSolution = true;
  }
}
