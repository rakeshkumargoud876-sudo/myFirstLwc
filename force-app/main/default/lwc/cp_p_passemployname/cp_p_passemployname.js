import { LightningElement } from 'lwc';

export default class Cp_p_passemployname extends LightningElement {
    name;
    handle(event){
this.name=event.detail;
    }
}