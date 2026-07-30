import { LightningElement } from 'lwc';

export default class Multification extends LightningElement {
    first;
    second;
    result;
    num1(event){
        this.first=event.target.value;
    }
    num2(event){
        this.second=event.target.value;
    }
    mul(){
        this.result=Number(this.first)*Number(this.second);
    }
}