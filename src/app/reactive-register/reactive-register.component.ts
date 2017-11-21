import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators ,AbstractControl} from '@angular/forms';
import {mobileValidator, equalValidator, mobileAsyncValidator,} from "../validator/validators";

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css']
})
export class ReactiveRegisterComponent implements OnInit {
  formModel: FormGroup;
  // constructor() {
  //   this.formModel = new FormGroup({
  //     username:new FormControl(),
  //     mobile:new FormControl(),
  //     passwordsGroup:new FormGroup({
  //       password:new FormControl(),
  //       pconfirm:new FormControl()
  //     })
  //   });
  // }

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username:['', [Validators.required, Validators.minLength(6)]],
      mobile:['', mobileValidator, mobileAsyncValidator],
      passwordsGroup:fb.group({
        password:['', Validators.minLength(6)],
        pconfirm:['']
      },{
        validator: equalValidator
      })
    });
  }

  onSubmit(){
    // let isVaild:boolean = this.formModel.get('username').valid;
    // console.log("usename的校验结果是"+isVaild);
    // let errors:any = this.formModel.get('username').errors;
    // console.log("usename的错误信息是"+JSON.stringify(errors));
    if(this.formModel.valid){
      console.log(this.formModel.value);
    }

  }

  ngOnInit() {
  }

}
