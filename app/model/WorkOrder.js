Ext.define('AddressBook.model.WorkOrder', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'id',
            'lastName',
            'latitude',
            'longitude'
        ]
    }
});