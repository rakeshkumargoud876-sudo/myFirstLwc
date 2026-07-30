public with sharing class wire {
    @AuraEnabled(cacheable=true)
    public static List<Account> displayAccounts() {
return[SELECT Id,Name,Phone,Industry FROM Account];
    }
}