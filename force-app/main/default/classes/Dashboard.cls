public with sharing class Dashboard {
    @AuraEnabled(cacheable=true)
    public static Integer getAccounts() {
return[SELECT COUNT() FROM Account];
    }
     @AuraEnabled(cacheable=true)
    public static Integer getContacts() {
return[SELECT COUNT() FROM Contact];
    }
     @AuraEnabled(cacheable=true)
    public static Integer getOpportunities() {
return[SELECT COUNT() FROM Opportunity];
    }
}