import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Basicdatabase } from 'src/app/shared/models/Basicdatabase';

@Component({
  selector: 'app-search-service',
  templateUrl: './search-service.component.html',
  styleUrls: ['./search-service.component.scss']
})
export class SearchServiceComponent implements OnInit {

  searchText = '';
  maxPrice = 1000;
  minValue = 0;
  maxValue = this.maxPrice;

  services = new FormControl('');
  timePicker = new FormControl('');

  servicesList = [
    "spraying",
    "mowing"
  ];

  date = Date.now();
  touchUi = false;

  basicdatabase: Basicdatabase []=[
    {id: 1, service: "valami",price: 69,status: "nincs", buttons:"edit, delete", name: "valaki", phone: "nincs", email:"nem is volt"},
    {id: 1, service: "semmi",price: 420,status: "van", buttons:"edit, delete", name: "petike", phone: "elhagyta", email:"meg tul kicsi"},
    {id: 1, service: "lehet",price: 666,status: "talán", buttons:"edit, delete", name: "", phone: "", email:""},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  search() {

  }

}
