import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { TriviaCategories } from '../models/trivia-categories.model';
import { TriviaResults } from '../models/trivia-results.model';

@Injectable({
  providedIn: 'root'
})
export class OpenTriviaDbService {
  private readonly openTriviaDbUrl = 'https://opentdb.com';

  constructor(private http: HttpClient) { }

  /**
   * Recover categories from AI
   *
   * @return {*}  {Observable<TriviaCategories>}
   * @memberof OpenTriviaDbService
   */
  getTriviaCategories() : Observable<TriviaCategories> {
    return this.http.get<TriviaCategories>(`${this.openTriviaDbUrl}/api_category.php`);
  }

  /**
   * Recover list of questions according to desired parameters
   *
   * @param {number} category
   * @param {string} difficulty
   * @param {number} num
   * @return {*}  {Observable<TriviaResults>}
   * @memberof OpenTriviaDbService
   */
  getTriviaQuestion(category: number, difficulty: string, num: number): Observable<TriviaResults> {
    const httpParams = new HttpParams().set('amount', num).set('category', category).set('difficulty', difficulty).set('type', 'multiple');
    return this.http.get<TriviaResults>(`${this.openTriviaDbUrl}/api.php`, {params: httpParams});
  }
}
