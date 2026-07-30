public with sharing class task9_fetchAccount {
    @AuraEnabled
    public static List<Account> getaccounts() {
        return[SELECT Id,Name,Phone,Industry from Account LIMIT 5];

    }
    
}
