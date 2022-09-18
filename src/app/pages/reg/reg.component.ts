import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  regForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rePassword: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', [Validators.required]),
    rank: new FormControl('')
  });

  hide1 = true;
  hide2 = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  getErrorMessage(type: string) {
    if (this.regForm.get(type)?.hasError("required"))
      return "You must enter a value.";

    if (type === "email")
      return this.regForm.get("email")?.hasError("email") ? "Not a valid email." : "";

    return "";
  }

  onSubmit() {
    console.log(this.regForm.value);
  }

}
