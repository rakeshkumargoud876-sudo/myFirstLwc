public with sharing class task7 {
    @AuraEnabled
    public static void methodnmae(String accname) {
    Account acc = new Account();
    acc.Name=accname;
    acc.phone='123456789';
    acc.Industry='Finance';
    insert acc;
    }
}