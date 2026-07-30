public with sharing class Sorting {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
return[SELECT Id,Name,Phone,Industry FROM Account];
    }
}