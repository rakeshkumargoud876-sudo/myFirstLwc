import { LightningElement } from 'lwc';

export default class Pass_or_fail extends LightningElement {
    digit;
    result;
    marks(event){
        this.digit=event.target.value;
    }
    message(){
        if(Number(this.digit>=35)){
            this.result='passed';
        }
        else{
            this.result='failed';
        }
    }
}