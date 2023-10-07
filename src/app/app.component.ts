import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('field') _field: ElementRef;
  private _firstNumber:string;
  private _seconNumber:string;
  private _isznac:boolean;
  private _znac:number;
  title = 'Calculator';

  public constructor() {
    this._field = ViewChild("EnemyImg")
    this._firstNumber="";
    this._seconNumber="";
    this._znac=-1;
    this._isznac=false;
  }

  GetNumber(value : string){
    if(!this._isznac)
      this._firstNumber+=value;
    else
      this._seconNumber+=value;
    this._field.nativeElement.value+=value;
  }

  Clear(){
    this._firstNumber="";
    this._seconNumber="";
    this._isznac=false;
    this._znac=-1;
    this._field.nativeElement.value="";
  }

  Equally(){
    this._field.nativeElement.value="";
    if (this._seconNumber != "")
      this._calculator();
    this._isznac=true;
    this._field.nativeElement.value = this._firstNumber
  }

  GetPlus(){
    if(!this._isznac)
      this._isznac=true;
    else{
      this._calculator();
    }
    this._znac=1;
    this._field.nativeElement.value+="+";
  }

  private _calculator(){
    switch (this._znac){
      case 1:
        this._firstNumber = String(Number(this._firstNumber) + Number(this._seconNumber))
        break
      case 2:
        this._firstNumber =  String(Number(this._firstNumber) - Number(this._seconNumber))
        break
    }
    this._seconNumber="";
  }

  Minus(){
    if(!this._isznac)
      this._isznac=true;
    else{
      this._calculator();
    }
    this._znac=2;
    this._field.nativeElement.value+="-";
  }
}


