import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

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
  // public Property: any ;
  public Property: Array<IProperty> = [];

  sellRent = 1; // 1 for buy, 2 for sale

  constructor(private route: ActivatedRoute, private ser: HousingService) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.url.toString());

    if (this.route.snapshot.url.toString()) {
      this.sellRent = 2;
    }

    this.ser.getAllProperties(this.sellRent).subscribe((data) => {
      this.Property = data;
      console.log(data);
      console.log(this.route.snapshot.url.toString);
    });

    // this.ser.getAllProperties().subscribe(data=>{
    //   console.log(Object.values(data)[0]);
    //   for(const i in data){
    //     console.log(Object.values(data)[Number(i)]);
    //     this.Property.push(Object.values(data)[Number(i)]);
    //   }
    // })

    // this.http.get('data/properties.json').subscribe((data) => {
    //   //console.log(data);
    //   this.Property=data;
    // });
  }
}
