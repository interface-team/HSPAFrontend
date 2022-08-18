import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
  NgModel,
  FormBuilder
} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
//import * as alertyfy from 'alertifyjs';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  user: any={};
  constructor(private fb: FormBuilder, private ser: UserServiceService) {}

  ngOnInit(): void {
    // this.registrationForm = new FormGroup(
    //   {
    //     userName: new FormControl(null, Validators.required),
    //     userEmail: new FormControl(null, [
    //       Validators.email,
    //       Validators.required,
    //     ]),
    //     userPassword: new FormControl(null, [
    //       Validators.minLength(8),
    //       Validators.required,
    //     ]),
    //     userConfirmPassword: new FormControl(null, [Validators.required,this.passwordMatchingValidator]),
    //     userMobile: new FormControl(null, [
    //       Validators.maxLength(10),
    //       Validators.required,
    //     ]),
    //   },
    //   [// custom validator
    //   this.passwordMatchingValidator,
    //   this.MobileValidator
    //   ]
    // );
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName: [null,Validators.required],
      userEmail: [null,[Validators.email,Validators.required]],
      userPassword: [null,[Validators.minLength(8),Validators.required]],
      userConfirmPassword: [null,[Validators.required]],
      userMobile: [null,[Validators.maxLength(10),Validators.required]]
    },{
      Validators: [this.passwordMatchingValidator,this.MobileValidator]
    });
  }

  passwordMatchingValidator(control: AbstractControl): { [key: string]: boolean } | null {
    //console.log("match " + control.get('userPassword')?.value ===    control.get('userConfirmPassword')?.value);
    return control.get('userPassword')?.value ===
      control.get('userConfirmPassword')?.value
      ? null
      : { notmatched: true };
  }

  MobileValidator(control:AbstractControl): {[key: string]: boolean} | null {
    var mobile =control.get('userMobile')?.value
    var regex:RegExp  = /^\(?([6-9]{1})\)?(\d{9})$/;
    //regex.test(mobile);
    //console.log("mobile : "+regex.test(mobile));
    return regex.test(mobile)?null:{mobilematched: true};
  }


  onSubmit() {
    console.log(this.registrationForm);
    if(this.registrationForm.valid){
      this.user=Object.assign(this.user,this.registrationForm.value);
      //this.addUser(this.user)
      this.ser.addUser(this.user);
      this.registrationForm.reset();
    }
  }

  // addUser(user:any){
  //   let users = [];
  //   if(localStorage.getItem('Users')){
  //     users = JSON.parse(""+localStorage.getItem('Users'));
  //     users = [user, ...users];
  //   }else{
  //     users = [user]
  //   }
  //   localStorage.setItem('Users',JSON.stringify(user));
  // }

  //GETTER METHODS FOR ALL FORM CONTROL EXCEPT NAME
  get userEmail(){
    return this.registrationForm.get('userEmail') as FormControl;
  }

  get userPassword(){
    return this.registrationForm.get('userPassword') as FormControl;
  }

  get userConfirmPassword(){
    return this.registrationForm.get('userConfirmPassword') as FormControl;
  }

  get userMobile(){
    return this.registrationForm.get('userMobile') as FormControl;
  }
}
