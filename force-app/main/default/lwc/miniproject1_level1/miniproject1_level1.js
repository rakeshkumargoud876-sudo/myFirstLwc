import { LightningElement } from 'lwc';
import createEmployee from '@salesforce/apex/MiniProject1_level1.createEmployee';
import getEmployees from '@salesforce/apex/MiniProject1_level1.getEmployees';
import deleteEmployee from '@salesforce/apex/MiniProject1_level1.deleteEmployee';
import updateEmployee from '@salesforce/apex/MiniProject1_level1.updateEmployee';

export default class Miniproject1_level1 extends LightningElement {
    name;
    salary;
    department;
    city;
    employees=[];

    handlename(event){
this.name=event.target.value;
    }
     handlesalary(event){
this.salary=event.target.value;
    }
     handledepartment(event){
this.department=event.target.value;
    }
     handlecity(event){
this.city=event.target.value;
    }

    save(){
        createEmployee({name:this.name,salary:this.salary,department:this.department,city:this.city})
        .then(
         ()=>{alert('Employee record successfully inserted');}   
        )
        .catch(
            error=>{console.error(error)}
        )
    }

    handlefetch(){
        getEmployees()
        .then(result=>{
            this.employees = result;
        })

        .catch(error=>{
            console.error(error);
        });
    }

    handledelete(event){
      deleteEmployee({empid:event.target.value})
      .then(()=>{

        alert('Employee Deleted Successfully');

        return getEmployees();

    })

    .then(result=>{

        this.employees = result;

    })

    .catch(error=>{

        console.error(error);

    });


    }
    
handleupdate(event){
updateEmployee({ empid: event.target.value,name:this.name,salary:this.salary,department:this.department,city:this.city})
.then(()=>{

        alert('Employee Updated Successfully');

        return getEmployees();

    })

    .then(result=>{

        this.employees = result;

    })

    .catch(error=>{

        console.error(error);

    });
}
    
}