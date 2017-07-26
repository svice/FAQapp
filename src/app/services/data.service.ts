import {Injectable} from '@angular/core';
import {Question} from '../models/Questions';

@Injectable()
export class DataService {
    questions: Question[];

    constructor() {
        this.questions = [
            {
                text: 'What is your name',
                answer: 'My name is Sergey',
                hide: true
            },
            {
                text: 'What is favorite color',
                answer: 'My favorite color is green',
                hide: true
            }
        ];
    }
    // getQuestions from LS
    getQuestions() {
        if (localStorage.getItem('questions') === null) {
            this.questions = [];
        } else {
            this.questions = JSON.parse(localStorage.getItem('questions'));
        }
        return this.questions;
    }

    addQuestion(question: Question) {
        this.questions.unshift(question);

        let questions;

        if (localStorage.getItem('questions') === null) {
            questions = [];
        } else {
            questions = JSON.parse(localStorage.getItem('questions'));
        }
        questions.unshift(question);
        localStorage.setItem('questions', JSON.stringify(questions));
        console.log(localStorage);
    }

    removeQuestion(question: Question) {
        for (let i = 0; i < this.questions.length; i++) {
            if (this.questions[i] == question) {
                this.questions.splice(i, 1);
                localStorage.setItem('questions', JSON.stringify(this.questions));
            }
        }
    }
}
