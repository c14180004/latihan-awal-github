import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-hasil',
  templateUrl: './hasil.component.html',
  styleUrls: ['./hasil.component.css']
})
export class HasilComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }
   goInput(){
    this.router.navigate(['/input']);
  }
  

}