import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatTable, MatDialog } from '@angular/material';
import { QuizServiceService } from '@shared/services/quiz.service';

export interface UsersData {
  name: string;
  id: number;
}
 
const ELEMENT_DATA: UsersData[] = [
  {id: 1560608769632, name: 'Artificial Intelligence'},
  {id: 1560608796014, name: 'Machine Learning'},
  {id: 1560608787815, name: 'Robotic Process Automation'},
  {id: 1560608805101, name: 'Blockchain'}
];

@Component({
  selector: 'catech-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.core.list$;
  controls: FormArray;

  questionTypes = [
    {
      value: "short_answer",
      viewValue: "Resposta curta"
    },
    {
      value: "long_answer",
      viewValue: "Resposta longa"
    },
    {
      value: "multiple_choice",
      viewValue: "Múltipla escolha"
    }
  ];

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog, private core: QuizServiceService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
