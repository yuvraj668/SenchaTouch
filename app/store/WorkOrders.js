Ext.define('AddressBook.store.WorkOrders', {
    extend: 'Ext.data.Store',

    config: {
        model: 'AddressBook.model.WorkOrder',
        autoLoad: false,
        sorters: 'id',
        proxy: {
            type: 'ajax',
            url: 'workorders.json',
            reader: {
                type: 'json'
            }
        }
    }
});