import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-hasil',
  templateUrl: './hasil.component.html',
  styleUrls: ['./hasil.component.css']
})
export class HasilComponent implements OnInit {
  hasil;
  constructor(private router :Router,private route : ActivatedRoute) { }

  ngOnInit() {
     this.hasil = this.route.snapshot.paramMap.get('has');
  }
   goInput(){
    this.router.navigate(['/input']);
  }
  

}