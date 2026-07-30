import { LightningElement } from 'lwc';

export default class Cp_c_inputbox extends LightningElement {
    store;
    name(event){
this.store=event.target.value;

const eventname = new CustomEvent('stringvariable',{detail:this.store});
this.dispatchEvent(eventname);


    }
}