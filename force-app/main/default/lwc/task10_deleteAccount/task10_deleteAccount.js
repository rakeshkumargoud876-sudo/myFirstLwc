import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/task10_deleteAccount.getAccounts';
import deleteAccount from '@salesforce/apex/task10_deleteAccount.deleteAccount';

export default class Task10_deleteAccount extends LightningElement {
accounts=[];
    fetch(){
        
        getAccounts()
           .then(result => {
                this.accounts = result;
            });
        
    }

    handle(event){
        
        deleteAccount({accountId:event.target.value})
        .then(() => {
            alert('Deleted Successfully');
            return getAccounts();
        })
        .then(result => {
            this.accounts = result;
        })
        .catch(error => {
            console.log(error);
            alert(JSON.stringify(error));
        });

    }
}