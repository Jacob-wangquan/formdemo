import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  username:FormControl = new FormControl('aaa');
  formModel:FormGroup = new FormGroup({
    dateRange:new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    emails:new FormArray([
      new FormControl("aaa@a.com"),
      new FormControl("bbb@a.com"),
      new FormControl("ccc@a.com")
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.formModel.value);
  }

  addEmail(){
    let emails = this.formModel.get("emails") as FormArray;
    emails.push(new FormControl());
  }

}