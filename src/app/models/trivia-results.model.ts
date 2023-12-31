export interface TriviaResults {
  response_code: number;
  results: TriviaQuestion[];
}

export interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  isAnswered?: boolean;
  choices?: string[];
  answer?: string;
}
