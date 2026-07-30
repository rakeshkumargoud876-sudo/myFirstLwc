import { LightningElement } from 'lwc';

export default class Cp_parent1 extends LightningElement {
    show;
    handle(event){
this.show=event.detail;
    }
}