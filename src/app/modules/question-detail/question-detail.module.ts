import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCardComponent } from './components/question-card/question-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QuestionCardComponent],
  exports: [QuestionCardComponent]
})
export class QuestionDetailModule { }
