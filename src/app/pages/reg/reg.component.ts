import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  regForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    email: new FormControl(''),
    tel: new FormControl(''),
    rank: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.regForm.value);
  }

}
