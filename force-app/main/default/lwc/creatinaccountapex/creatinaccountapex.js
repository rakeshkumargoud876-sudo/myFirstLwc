import { LightningElement } from 'lwc';
import Name from '@salesforce/schema/Account.Name';
import testing from '@salesforce/apex/creatingapexaccount.testing';

export default class Creatinaccountapex extends LightningElement {
    accountphone='';
    handle(event){
this.accountphone=event.target.value;
    }
    save(){
        testing({accname:this.accountphone})
        .then(() => {
            alert('Account Created Successfully');
        })
        .catch(error => {
            console.log(error);
        });
    }
}