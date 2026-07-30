import { LightningElement } from 'lwc';
import addAccount from '@salesforce/apex/Navigationmixin.addAccount';
import { NavigationMixin } from 'lightning/navigation';


export default class Navigationmixin extends NavigationMixin(LightningElement) {
    name;
    handlename(event){
        this.name=event.target.value;
    }
    save(){
        addAccount({name:this.name})
        .then(result=>{
           this[NavigationMixin.Navigate]({
               type: "standard__recordPage",
               attributes: {
                   actionName: 'edit',
                   recordId: result,
                   objectApiName: "Account"
               }
           });
            });
        }

        

        
    
}