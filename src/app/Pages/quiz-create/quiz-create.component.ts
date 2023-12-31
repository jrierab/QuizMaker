import { Component } from '@angular/core';
import { TriviaCategory } from 'src/app/models/trivia-categories.model';
import { OpenTriviaDbService } from 'src/app/services/open-trivia-db.service';
import { DifficultyLevels } from 'src/app/models/difficulty-levels.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.scss']
})
export class QuizCreateComponent {
  categories : Array<TriviaCategory> = [];

  selectedCategoryId?: number;

  DifficultyLevels = DifficultyLevels;

  difficulty : DifficultyLevels = DifficultyLevels.Easy;

  constructor(private router: Router, private triviaService: OpenTriviaDbService) {}

  /**
   * Recover categories from service
   *
   * @memberof QuizCreateComponent
   */
  ngOnInit() {
    this.triviaService.getTriviaCategories().subscribe(data => {
      this.categories = data.trivia_categories ?? [];
    });
  }

  /**
   * Goto quiz page with selected options (as queryParams)
   *
   * @memberof QuizCreateComponent
   */
  OnCreateQuiz() {
    this.router.navigate(
      ['/quiz-questions'],
      { queryParams: { category: this.selectedCategoryId, difficulty: this.difficulty } }
    );
  }
}
