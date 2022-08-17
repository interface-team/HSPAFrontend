import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  /*
  Property: Array<any> = [{
    "ID":1,
    "Name": "Birla House",
    "Type":"House",
    "Price": 12000
  },
  {
    "ID":2,
    "Name": "Villa House",
    "Type":"Villa",
    "Price": 22000
  },
  {
    "ID":3,
    "Name": "Aditya Tent",
    "Type":"Tent",
    "Price": 4000
  },
  {
    "ID":4,
    "Name": "Akash Oyo",
    "Type":"Oyo",
    "Price": 8000
  },
  {
    "ID":5,
    "Name": "Aman HomeStay",
    "Type":"HomeStay",
    "Price": 700
  },
  {
    "ID":6,
    "Name": "Aman Bar",
    "Type":"Bar",
    "Price": 3700
  }
]
*/
  public Property: Array<any> = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('data/properties.json')
      .subscribe((data) => console.log(data));
  }
}
