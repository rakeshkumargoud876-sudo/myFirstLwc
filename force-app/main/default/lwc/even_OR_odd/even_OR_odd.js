import { LightningElement } from 'lwc';

export default class Even_OR_odd extends LightningElement {
    digit;
    result;
    number(event){
        this.digit=event.target.value;
    }
    message(){
        if (Number(this.digit%2==0)){
      this.result="This is an even number";
        }
        else{
            this.result="this is an odd number";
        }
    }
}