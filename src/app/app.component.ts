import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


interface ICalculoModole {
  altura: number;
  peso: number;
}

interface IResult {

  imc: number;
  classifcacao: String;
  grauObesidade: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'imc';

model: ICalculoModole = {
  altura: 0,
  peso: 0
}



result: any;
  constructor(){
  }
  onsubmit(form = NgForm){
   if (this.model.peso <=0 && this.model.altura <=0){
     return;
   }
   const imc = this.calculaIMC(this.model.peso,this.model.altura);
   const Classificacao = this.getClassificacao(imc);
   const grauObesidade = this.getGrauObsidade(imc);


console.log(imc);
console.log (Classificacao);
console.log (grauObesidade);

this.result = {
  imc,
  Classificacao,
  grauObesidade
}
    }

calculaIMC(peso:number,altura:number){
return peso / (altura * altura);
}

getClassificacao(imc: number){
if(imc < 18.5){
  return 'Magreza';
}
else if (imc >=18.5 && imc  <= 24.9){
  return 'Normal';
}
else if (imc >=25 && imc <= 29.9){
  return 'Sobre Obesidade';
}
else if (imc >=30 && imc <= 39.9){
  return 'Obesidade';
}
else{
return 'Grave Obesidade';
}
}

getGrauObsidade(imc:number){
if(imc <18.5 ){
  return '0';
}
else if (imc >=18.5 && imc <= 24.9){
  return '0';
}
else if (imc >= 25 && imc <= 29.9){
  return 'I';
}
else if ( imc >= 30 && imc <=39.9){
  return 'II';
}
else {
  return 'III';
}
}

}





