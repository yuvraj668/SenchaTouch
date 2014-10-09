Ext.Loader.setConfig({ enabled: true });
Ext.application({
    name: 'AddressBook',

    icon: 'resources/images/icon.png',
    tabletStartupScreen: 'resources/images/tablet_startup.png',
    phoneStartupScreen: 'resources/images/phone_startup.png',
    glossOnIcon: true,

    models: ['WorkOrder'],
    stores: ['WorkOrders'],
    views: ['Main','workorder.Map'],
    controllers: ['AppController'],

    launch: function() {
        Ext.Viewport.add({
            xclass: 'AddressBook.view.Main'
        });
    }
});