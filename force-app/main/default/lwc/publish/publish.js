import { LightningElement , wire} from 'lwc';
import { publish,MessageContext } from 'lightning/messageService';
import  HELLO_CHANNEL from '@salesforce/messageChannel/HelloMessage__c';

export default class Publish extends LightningElement {
 @wire(MessageContext)
 messageContext;

 handlesend(){
    const payload={
        message:'data sent by lms'
    };

    publish(this.messageContext,HELLO_CHANNEL,payload);
 }
}