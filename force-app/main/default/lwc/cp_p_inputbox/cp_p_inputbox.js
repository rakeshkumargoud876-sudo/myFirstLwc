import { LightningElement } from 'lwc';

export default class Cp_p_inputbox extends LightningElement {
    show;
    handle(event){
this.show=event.detail;
    }
}