/**
 * Created by Administrator on 2017/11/12.
 */
import { FormGroup,FormControl} from '@angular/forms';
import { Observable } from 'rxjs';

export function mobileValidator(control:FormControl):any {
  var regPhone = /^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}$/;
  let vaild = regPhone.test(control.value);
  console.log("mobile 的校验结果："+vaild);
  return vaild ? null : {mobile:true};
}

export function mobileAsyncValidator(control:FormControl):any {
  var regPhone = /^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}$/;
  let vaild = regPhone.test(control.value);
  console.log("mobile 的校验结果："+vaild);
  return Observable.of(vaild ? null : {mobile:true}).delay(5000);
}

export function equalValidator(group:FormGroup):any{
  let  password:FormControl = group.get('password') as FormControl;
  let  pconfirm:FormControl = group.get('pconfirm') as FormControl;
  let valid:boolean = (password.value === pconfirm.value);
  console.log("密码校验结果："+valid);
  return valid ? null : {equal:{desc:"二次密码不一致"}};
}
