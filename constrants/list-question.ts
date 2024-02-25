import type { Question } from "~/interfaces/question";

const listQuestion: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: true,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "New York",
        correct: false,
      },
      {
        id: 4,
        choice: "Tokyo",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "What is the capital of Japan?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "New York",
        correct: false,
      },
      {
        id: 4,
        choice: "Tokyo",
        correct: true,
      },
    ],
  },
  {
    id: 3,
    question: "What is the capital of England?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "London",
        correct: true,
      },
      {
        id: 3,
        choice: "New York",
        correct: false,
      },
      {
        id: 4,
        choice: "Tokyo",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "What is the capital of USA?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "New York",
        correct: true,
      },
      {
        id: 4,
        choice: "Tokyo",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "What is the capital of Nigeria?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "New York",
        correct: false,
      },
      {
        id: 4,
        choice: "Abuja",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question: "What is the capital of Ghana?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "Accra",
        correct: true,
      },
      {
        id: 4,
        choice: "Tokyo",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "What is the capital of South Africa?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "New York",
        correct: false,
      },
      {
        id: 4,
        choice: "Pretoria",
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question: "What is the capital of Egypt?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "Cairo",
        correct: true,
      },
      {
        id: 4,
        choice: "Tokyo",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "What is the capital of Germany?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "Berlin",
        correct: true,
      },
      {
        id: 3,
        choice: "New York",
        correct: false,
      },
      {
        id: 4,
        choice: "Tokyo",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "What is the capital of Italy?",
    choices: [
      {
        id: 1,
        choice: "Rome",
        correct: true,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "New York",
        correct: false,
      },
      {
        id: 4,
        choice: "Tokyo",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "What is the capital of China?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "Beijing",
        correct: true,
      },
      {
        id: 4,
        choice: "Tokyo",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: "What is the capital of India?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "New Delhi",
        correct: true,
      },
      {
        id: 4,
        choice: "Tokyo",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "What is the capital of Russia?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "New York",
        correct: false,
      },
      {
        id: 4,
        choice: "Moscow",
        correct: true,
      },
    ],
  },
  {
    id: 14,
    question: "What is the capital of Canada?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "Ottawa",
        correct: true,
      },
      {
        id: 4,
        choice: "Tokyo",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: "What is the capital of Australia?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "Canberra",
        correct: true,
      },
      {
        id: 4,
        choice: "Tokyo",
        correct: false,
      },
    ],
  },
  {
    id: 16,
    question: "What is the capital of Brazil?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "New York",
        correct: false,
      },
      {
        id: 4,
        choice: "Brasília",
        correct: true,
      },
    ],
  },
  {
    id: 17,
    question: "What is the capital of Argentina?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "Buenos Aires",
        correct: true,
      },
      {
        id: 3,
        choice: "New York",
        correct: false,
      },
      {
        id: 4,
        choice: "Tokyo",
        correct: false,
      },
    ],
  },
  {
    id: 18,
    question: "What is the capital of Mexico?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "New York",
        correct: false,
      },
      {
        id: 4,
        choice: "Mexico City",
        correct: true,
      },
    ],
  },
  {
    id: 19,
    question: "What is the capital of South Korea?",
    choices: [
      {
        id: 1,
        choice: "Seoul",
        correct: true,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "New York",
        correct: false,
      },
      {
        id: 4,
        choice: "Tokyo",
        correct: false,
      },
    ],
  },
  {
    id: 20,
    question: "What is the capital of Saudi Arabia?",
    choices: [
      {
        id: 1,
        choice: "Paris",
        correct: false,
      },
      {
        id: 2,
        choice: "London",
        correct: false,
      },
      {
        id: 3,
        choice: "New York",
        correct: false,
      },
      {
        id: 4,
        choice: "Riyadh",
        correct: true,
      },
    ],
  },
];

const shuffleQuestions = () => {
  const shuffledListQuestion = listQuestion.sort(() => Math.random() - 0.5);
  return shuffledListQuestion.map((question) => {
    const shuffledChoices = question.choices.sort(() => Math.random() - 0.5);
    return {
      ...question,
      choices: shuffledChoices,
    };
  });
};

export const getListQuestion = () => shuffleQuestions();
