import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qa-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {
  @Input() question: string;
  constructor() { }

  ngOnInit() {
  }

}
