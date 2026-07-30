public with sharing class Miniproject3_level1 {
    @AuraEnabled
    public static void createBook(String name,String authour,Decimal price) {
        Book__c bk = new Book__c();
        bk.Name=name;
        bk.Authour__c=authour;
        bk.Price__c=price;
        insert bk;

    }
     @AuraEnabled(cacheable=true)
     public static List<Book__c> getBooks(){
        return[SELECT Id,Name,Authour__c,Price__c FROM Book__c];
     }

     @AuraEnabled(cacheable=true)
     public static List<Book__c> searchBooks(String searchbyname){
        return[SELECT Id,Name,Authour__c,Price__c FROM Book__c WHERE Name LIKE:('%'+searchbyname+'%')];
     }

     @AuraEnabled
     public static void deleteBook(Id bkid){
        Book__c bk = [SELECT Id ,Name, Authour__c,Price__c FROM Book__c WHERE Id=:bkid];
        delete bk;

     }
}