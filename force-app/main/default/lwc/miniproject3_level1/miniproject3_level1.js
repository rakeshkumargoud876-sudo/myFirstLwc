import { LightningElement } from 'lwc';
import createBook from '@salesforce/apex/Miniproject3_level1.createBook';
import getBooks from '@salesforce/apex/Miniproject3_level1.getBooks';
import searchBooks from '@salesforce/apex/Miniproject3_level1.searchBooks';
import deleteBook from '@salesforce/apex/Miniproject3_level1.deleteBook';

export default class Miniproject3_level1 extends LightningElement {
   name;
   authour;
   price;
   books=[];
   searchbook;
    handlename(event){
this.name=event.target.value;
    }
    handleauthour(event){
this.authour=event.target.value;
    }
    handleprice(event){
this.price=event.target.value;
    }
    handlesearch(event){
        this.searchbook=event.target.value;
    }
    create(){
        createBook({name:this.name,authour:this.authour,price:this.price})
        .then(
         ()=>{alert('record inserted successfully');}   
        )
        .catch(error=>{
          console.error(error)
        }
    )
    }
    get(){
        getBooks()
        .then(result=>{
            this.books=result;
        }

        )
        .catch(error=>{
            console.error(error)
        }

        )
    }
    search(){
        searchBooks({searchbyname: this.searchbook})
        .then(result=>{this.books=result})
        .catch(error=>{console.error(error)})
    }
    handledelete(){
    deleteBook({bkid:event.target.value})
    .then(()=>{alert('record deleted successfully');}

    )
    return deleteBook();

    }
    }