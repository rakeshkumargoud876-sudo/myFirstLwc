import { LightningElement } from 'lwc';


export default class Pc_practice extends LightningElement {
    display;
   handle(event){
this.display=event.detail;
   }
}