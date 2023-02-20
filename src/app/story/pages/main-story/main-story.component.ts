import { Component, OnInit } from '@angular/core';
import { Story } from '../../interfaces/story.interface';

const ELEMENT_DATA: Story[] = [
    {
        by: 'sungage',
        descendants: 44,
        id: 34858307,
        score: 84,
        time: 1676820159,
        title: 'GPTZero Case Study – Exploring False Positives',
        type: 'story',
        url: 'https://gonzoknows.com/posts/GPTZero-Case-Study/',
    },
    {
        by: 'rwaliany',
        descendants: 111,
        id: 34858334,
        score: 195,
        time: 1676820266,
        title: 'Revenue is easy, profit is harder',
        type: 'story',
        url: 'https://www.edge.ceo/p/revenue-is-easy-profit-is-harder',
    },
    {
        by: 'blinding-streak',
        descendants: 0,
        id: 34863494,
        score: 14,
        time: 1676853171,
        title: 'Police say GPS tag darts can eliminate need for dangerous high-speed chases',
        type: 'story',
        url: 'https://www.cbsnews.com/chicago/news/oak-brook-police-gps-tag-darts/',
    },
];

@Component({
    selector: 'app-main-story',
    templateUrl: './main-story.component.html',
    styleUrls: ['./main-story.component.css'],
})
export class MainStoryComponent implements OnInit {
    dataSource: Story[] = [];

    ngOnInit() {
        this.dataSource = ELEMENT_DATA;
    }
}
