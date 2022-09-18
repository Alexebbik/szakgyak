import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  regForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    tel: new FormControl(''),
    rank: new FormControl('')
  });

  hide1 = true;
  hide2 = true;

  constructor(public popup: MatDialog) { }

  ngOnInit(): void {
  }
  
  getErrorMessage() {
    return this.regForm.get("email")?.hasError("email") ? "Not a valid email." : "";
  }

  onSubmit() {
    console.log(this.regForm.value);
  }

  showPopup() {
    this.popup.open(PopupComponent);
  }

}
