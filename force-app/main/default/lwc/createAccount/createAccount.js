import { LightningElement , track} from 'lwc';
import createAccount from '@salesforce/apex/accountController.createAccount';

export default class CreateAccount extends LightningElement {
    accountname;
    name(event){
 this.accountname=event.target.value;
    }
    save(){
     createAccount({accName:this.accountname})
     .then(() => {
            alert('Account Created Successfully');
        })
        .catch(error => {
            console.log(error);
        });
    }
}