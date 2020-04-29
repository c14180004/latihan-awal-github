import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  hasilnya = "";
  cek = false;
  a1 = "";
  a2 = "";
  op;
  constructor() { }

  ngOnInit() {

  }
  angka(x){
    if(this.cek){
      this.a1 = this.a1 + x;
    }
    else{
      this.a2 = this.a2 + x;
    }
    this.hasilnya = this.hasilnya + x;
  }
  tambah(){

  }
  kurang(){

  }
  kali(){

  }
  samadengan(){
    
  }

}