import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  hasilnya = "";
  has;
  cek = true;
  a1 = "";
  a2 = "";
  op= "+";
  constructor(private router :Router) { }

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
    this.cek = false;
    this.op = "+";
    this.hasilnya = this.hasilnya + " + ";
  }
  kurang(){
    this.cek = false;
    this.op = "-";
    this.hasilnya = this.hasilnya + " - ";
  }
  kali(){
    this.cek = false;
    this.op = "*";
    this.hasilnya = this.hasilnya + " * ";
  }
  samadengan(){
    this.cek = true;
    if(this.op == "+"){
      this.has = parseInt(this.a1) + parseInt(this.a2);
    }
    else if(this.op == "-"){
      this.has = parseInt(this.a1) - parseInt(this.a2);
    }
    else if(this.op == "*"){
      this.has = parseInt(this.a1) * parseInt(this.a2);
    }
    this.hasilnya = ""//this.has.toString();""
    this.router.navigate(['/hasil',this.has.toString()]);
  }

}