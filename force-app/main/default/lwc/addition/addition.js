import { LightningElement } from 'lwc';

export default class Addition extends LightningElement {
    result;
    first;
    second;
    num1(event){
         this.first=event.target.value;
    }
    num2(event){
        this.second=event.target.value;
    }
    show(){
    this.result=Number(this.first)+Number(this.second);
    }
}