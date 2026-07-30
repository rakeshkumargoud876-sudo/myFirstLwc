import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/Sorting.getAccounts';

export default class sorting extends LightningElement {
    accounts=[];
    fetchaccounts(){
        getAccounts()
        .then(results=>{
    this.accounts=results;

        }

        )
    }
    sorting() {
    
    this.accounts.sort((a, b) => {

        return a.Name.localeCompare(b.Name);
         this.accounts = [...this.accounts];


    });

   
}
}