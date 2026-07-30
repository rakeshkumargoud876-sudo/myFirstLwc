import { LightningElement } from 'lwc';
import createContact from '@salesforce/apex/task8_createContact.createContact';

export default class Task8_createContact extends LightningElement {
firstname;
lastname;
phone;
email;
    handle1(event){
this.firstname=event.target.value;
    }
    handle2(event){
this.lastname=event.target.value;
    }
    handle3(event){
this.phone=event.target.value;
    }
    handle4(event){
this.email=event.target.value;
    }
    save(){
createContact({firstname:this.firstname,lastname:this.lastname,phone:this.phone,email:this.email})
.then(() => {
            alert('Contact created successfully');
        })
        .catch(error => {
            console.error(error);
        });
    }
}