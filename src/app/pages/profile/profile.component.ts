import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    email: new FormControl(''),
    tel: new FormControl(''),
    rank: new FormControl('')
  });

  constructor(public popup: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.regForm.value);
  }

  showPopup() {
    this.popup.open(PopupComponent);
  }

}
