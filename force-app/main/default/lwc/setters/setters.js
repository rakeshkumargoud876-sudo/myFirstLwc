import { LightningElement } from 'lwc';

export default class Setters extends LightningElement {
givename;
    connectedCallback(){
        this.name='rakesh';
    }

    set name(value){
this.givename=value.toUpperCase();
    }
    get name(){
        return this.givename;
    }
}