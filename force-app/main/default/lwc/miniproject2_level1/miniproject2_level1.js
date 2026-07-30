import { LightningElement } from 'lwc';
import addStudent from '@salesforce/apex/Miniproject2_level1.addStudent';
import showStudent from '@salesforce/apex/Miniproject2_level1.showStudent';
import updateStudent from '@salesforce/apex/Miniproject2_level1.updateStudent';
import deleteStudent from '@salesforce/apex/Miniproject2_level1.deleteStudent';

export default class Miniproject2_level1 extends LightningElement {
    name;
    course;
    age;
    city;
    studentdetails=[];
    handlename(event){
this.name=event.target.value;
    }
    handlecourse(event){
this.course=event.target.value;
    }
    handleage(event){
this.age=event.target.value;
    }
    handlecity(event){
this.city=event.target.value;
    }
    showstudent(){
       addStudent({name:this.name,course:this.course,age:this.age,city:this.city})
       .then(()=> {
        alert('Student record inserted successfully');
       }
)
.catch(error=>{
    console.error(error);
}

    )

       
    }
displayrecords(){
    showStudent()
.then(
    result=>{
      this.studentdetails = result;
    }
)
.catch(
    error=>{console.error(error)}
)
    
}
update(){
    updateStudent({sdid:event.target.value,name:this.name,course:this.course,age:this.age,city:this.city})
       .then(()=> {
        alert('Student record updated successfully');
       }
)
.catch(error=>{
    console.error(error);
})
}
handledelete(){
    deleteStudent({sdid:event.target.value})
.then(()=>{alert('record deleted successfully');
return showStudent();})
.then(result=>{
    this.studentdetails=result;}
)
    .catch(error=>{console.error(error);})
}

}