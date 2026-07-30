import { LightningElement } from 'lwc';

export default class Task2_calculator extends LightningElement {
num1;
num2;
result;
getnumber1(event){
this.num1=Number(event.target.value);
}
getnumber2(event){
this.num2=Number(event.target.value);
}
add(){
this.result=this.num1+this.num2;
}
sub(){
this.result=this.num1-this.num2;
}
mul(){
this.result=this.num1*this.num2;
}
div(){
this.result=this.num1/this.num2;
}

}