public with sharing class Navigationmixin {
    @AuraEnabled
    public static Id addAccount(String name) {
Account acc = new Account();
acc.Name=name;
insert acc;
return acc.Id;
    }
}