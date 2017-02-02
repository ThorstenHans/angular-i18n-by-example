import {Component, OnInit} from '@angular/core';
import {FaqService} from '../../services/faqService';
import {FrequentlyAskedQuestion} from '../../models/frequentlyAskedQuestion';

declare let $: any;

@Component({
    selector: 'faq-list',
    templateUrl: 'list.html'
})
export class FaqListComponent implements OnInit {
    public faqs: Array<FrequentlyAskedQuestion> = [];

    constructor(private _faqService: FaqService) {

    }

    public ngOnInit(): void {
        $(document).ready(function () {
            $('.collapsible').collapsible();
        });
        this._faqService.getAllFaqs()
            .subscribe(
                allFaqs => this.faqs = allFaqs
            );

    }

}
