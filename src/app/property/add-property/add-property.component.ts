import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { City } from 'src/Models/City';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm?: NgForm;

  constructor(private router: Router, private ser: HousingService) { }

  ngOnInit() {
    this.ser.getAllCities().subscribe(data=>{
      console.log(data);
    });

    var item = { "name": "Delhi"};

    let city = new City();
    city.name="Hyderabad";

    this.ser.addCity(city).subscribe(data=>{
      console.log("data: " + data);
    });
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(Form:NgForm){
    console.log(Form);
    console.log(this.addPropertyForm);
  }

}
