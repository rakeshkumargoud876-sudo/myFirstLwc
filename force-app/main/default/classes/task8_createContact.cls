public with sharing class task8_createContact {
    @AuraEnabled
    public static void createContact(String firstname, String lastname , String phone , String email) {
    Contact con = new Contact();
    con.FirstName=firstname;
    con.LastName=lastname;
    con.Phone=phone;
    con.Email=email;
    insert con;
    }
}