export interface QuestionProps {
  question: string;
  options: string[];
  onAnswerSelect: (answer: string) => void;
}

export interface ResultProps {
  answers: string[];
}
