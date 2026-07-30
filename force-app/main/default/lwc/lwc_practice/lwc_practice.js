import { LightningElement ,wire} from 'lwc';
import getAccounts from '@salesforce/apex/Practice.getAccounts';


const COLUMNS = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Phone', fieldName: 'Phone' },
    { label: 'Industry', fieldName: 'Industry' }
];
export default class Lwc_practice extends LightningElement {
accounts;
columns=COLUMNS;
connectedCallback(){
    getAccounts()
    .then(data=>{this.accounts=data})
    .catch(error=>{console.error(error)})
}
}