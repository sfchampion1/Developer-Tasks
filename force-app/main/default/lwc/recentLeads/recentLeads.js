// recentLeads.js
import { LightningElement, wire, track } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const fields = ['Lead.Name', 'Lead.CreatedDate'];

export default class RecentLeads extends LightningElement {
    @track leads;
    @track error;

    @wire(getRecord, { recordId: '$recordId', fields })
    wiredRecord({ error, data }) {
        if (data) {
            this.leads = data.fields;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.leads = undefined;
        }
    }
}