import { LightningElement } from 'lwc';

export default class Cp_c_passemployname extends LightningElement {
    send(){
        const empname=new CustomEvent('strngvrbl',{detail:'Hanuma'});
        this.dispatchEvent(empname);
    }
}