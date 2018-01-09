import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrls: ['./animallist.component.css']
})
export class AnimallistComponent implements OnInit {
  
  animals: Array<Object>;

  constructor() { 
    this.animals = [
     {
      name: "Mara",
      spices: "snake",
      date_of_birth: ""
     },
     {
      name: "Miki",
      spices: "horse",
      date_of_birth: "2016-12-01" 
     },
     {
      name: "Milka",
      spices: "cow",
      date_of_birth: "2015-11-12"

     },
     {
      name: "Mario",
      spices: "wolf",
      date_of_birth: "2013-09-12"

     },
     {
      name: "Juk",
      spices: "lion",
      date_of_birth: "2011-05-12"
     }
    ]

  }
  ngOnInit() {
  }
  
}
