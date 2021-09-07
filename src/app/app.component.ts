import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//controller
export class AppComponent {
  public title : string = 'primer programa angular';
  numero1: number;
  numero2: number;
  resultado : number;
 //tipos de variables let const
 //dentro de los metodos let
 //const se pueden crear a nibel global 
  //crear metodo

  public operar(op:string): void{
  
    switch(op){
      case 's' :
        //this para acceder a la variable global 
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'r' :
        this.resultado = this.numero1 - this.numero2;
        break;
      case 'm' :
        this.resultado = this.numero1 * this.numero2;
        break;
      case 'd':
        this.resultado = this.numero1 / this.numero2;
        break;

    }

  }
  public teclear(e:any ):void{
    //console.log(e);
    console.log("la tecla que se oprimio fue:"+e.key);
    console.log("la palabra completa es "+e.target.value)
  }


}
