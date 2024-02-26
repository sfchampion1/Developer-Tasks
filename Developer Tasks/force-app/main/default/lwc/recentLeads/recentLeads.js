import { LightningElement, wire, track } from 'lwc';
import getRecentLeads from '@salesforce/apex/LeadController.getRecentLeads';
// Define the columns in the datatable
const COLUMNS = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Company', fieldName: 'Company' },
    { label: 'Status', fieldName: 'Status' },
];
// Export the class to make it available in the template
export default class RecentLeads extends LightningElement {
    @track error;
    @track leads;
    columns = COLUMNS;

    // Call the Apex method to retrieve the recent leads
    @wire(getRecentLeads)
    wiredLeads({ error, data }) {
        if (data) {
            this.leads = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.leads = undefined;
        }
    }
}