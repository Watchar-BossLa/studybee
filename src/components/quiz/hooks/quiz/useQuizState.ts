
import { useState } from 'react';
import { QuizQuestion, AnsweredQuestion, QuizResults } from '../../types';
import { QuizStateWithSetters } from './types';

export function useQuizState(initialDifficulty: 1 | 2 | 3 = 2): QuizStateWithSetters {
  const [activeQuiz, setActiveQuiz] = useState(false);
  const [availableQuestions, setAvailableQuestions] = useState<QuizQuestion[]>([]);
  const [quizResults, setQuizResults] = useState<QuizResults | null>(null);
  
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestion[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [currentDifficulty, setCurrentDifficulty] = useState<1 | 2 | 3>(initialDifficulty);
  
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('accounting');
  const [quizLength, setQuizLength] = useState(5);

  return {
    // State
    activeQuiz,
    availableQuestions,
    currentQuestion,
    currentIndex,
    selectedAnswer,
    isAnswerSubmitted,
    isCorrect,
    quizResults,
    currentDifficulty,
    answeredQuestions,
    selectedTopics,
    startTime,
    quizLength,
    selectedSubject,
    
    // Setters
    setActiveQuiz,
    setAvailableQuestions,
    setCurrentQuestion,
    setCurrentIndex,
    setSelectedAnswer,
    setIsAnswerSubmitted,
    setIsCorrect,
    setQuizResults,
    setCurrentDifficulty,
    setAnsweredQuestions,
    setSelectedTopics,
    setStartTime,
    setQuizLength,
    setSelectedSubject
  };
}
