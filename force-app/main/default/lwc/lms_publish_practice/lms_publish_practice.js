import { LightningElement,wire } from 'lwc';
import { publish,MessageContext } from 'lightning/messageService';
import send from '@salesforce/messageChannel/practiceMessage__c';

export default class Lms_publish_practice extends LightningElement {
    @wire(MessageContext)
    messagecontext;
   handlesend(){
    const payload={
        name:'Raghupathi',
        age:29,
        salary:200000,
        city:'hyderabad'
    };

    publish(
        this.messagecontext,send,payload
    );
   }
}