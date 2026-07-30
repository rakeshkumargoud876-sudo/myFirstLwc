import { LightningElement } from 'lwc';

export default class Cp_practice extends LightningElement {
    name;

   handle(event){
    this.name=event.target.value;
    const passingname=new CustomEvent('stringvariable',{detail:this.name})
    this.dispatchEvent(passingname)
   }
}