export interface QuestionProps {
  question: string;
  options: string[];
  onAnswerSelect: (answer: string) => void;
  selectedAnswer: string | null;
}

export interface ResultProps {
  answers: string[];
}
