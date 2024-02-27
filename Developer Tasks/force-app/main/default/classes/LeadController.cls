public with sharing class LeadController {
    @AuraEnabled(cacheable=true)
    public static List<Lead> getRecentLeads() {
        return [SELECT Id, Name, Company, Status FROM Lead ORDER BY CreatedDate DESC LIMIT 10];
    }
}