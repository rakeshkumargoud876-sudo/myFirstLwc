public with sharing class task10_deleteAccount {
    @AuraEnabled(cacheable=true)
    
    public static List<Account> getAccounts() {
        return[SELECT Id,Name FROM Account ];

    }
     @AuraEnabled
    public static void deleteAccount(Id accountId){
Account acc=[SELECT Id FROM Account WHERE Id =:accountId LIMIT 1];
delete acc;
    }

}
