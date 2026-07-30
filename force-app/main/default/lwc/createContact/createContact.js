import { LightningElement } from 'lwc';
import createContact from '@salesforce/apex/contactController.createContact';

export default class CreateContact extends LightningElement {
    contactname='';
    name(event){
 this.contactname=event.target.value;
    }
    save(){
     CreateContact({ccname:this.contactname})
     .then(() => {
            alert('Account Created Successfully');
        })
        .catch(error => {
            console.log(error);
        });
    }
}