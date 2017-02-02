import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {FrequentlyAskedQuestion} from '../models/frequentlyAskedQuestion';

@Injectable()
export class FaqService {

    constructor() {

    }

    public getAllFaqs(): Observable<Array<FrequentlyAskedQuestion>> {
        return Observable.of(this._inMemoryStorage)
            .map(rawObjects => rawObjects.map(rawJson => FrequentlyAskedQuestion.fromRawJson(rawJson)));
    }

    public getFaqById(id: number): Observable<FrequentlyAskedQuestion> {
        let faq: FrequentlyAskedQuestion = this._inMemoryStorage.find(faq => faq.id === id);
        if (!faq)
            return Observable.throw(new Error(`FAQ with id ${id} not found (404)`));

        return Observable.of(faq)
            .map(rawJson => FrequentlyAskedQuestion.fromRawJson(rawJson));
    }

    private _inMemoryStorage: Array<FrequentlyAskedQuestion> = [
        { id: 1, question: 'Very frequent question number 1', answer: 'A simple answer for the very common question number 1 is 42!' },
        { id: 2, question: 'Very frequent question number 2', answer: 'A simple answer for the very common question number 2 is 42!' },
        { id: 3, question: 'Very frequent question number 3', answer: 'A simple answer for the very common question number 3 is 42!' },
        { id: 4, question: 'Very frequent question number 4', answer: 'A simple answer for the very common question number 4 is 42!' },
        { id: 5, question: 'Very frequent question number 5', answer: 'A simple answer for the very common question number 5 is 42!' },
        { id: 6, question: 'Very frequent question number 6', answer: 'A simple answer for the very common question number 6 is 42!' },
        { id: 7, question: 'Very frequent question number 7', answer: 'A simple answer for the very common question number 7 is 42!' }
    ];

}
