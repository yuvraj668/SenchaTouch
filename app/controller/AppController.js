Ext.define('AddressBook.controller.AppController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainview',
            editButton: '#editButton',
            contacts: 'contacts',
            loginForm: 'loginForm',
            showMap: 'map-show',
            editContact: 'contact-edit',
            saveButton: '#saveButton'
        },

        control: {
            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
            editButton: {
                tap: 'onContactEdit'
            },
            contacts: {
                itemtap: 'onMarkerSelect'
            },
            loginForm: {
                login: 'onLogin'
            },
            showMap: {
                markerClicked: 'onMarkerSelect'
            },
            saveButton: {
                tap: 'onContactSave'
            },
            editContact: {
                change: 'onContactChange'
            }
        }
    },

    onMainPush: function(view, item) {
        var editButton = this.getEditButton();

        if (item.xtype == "map-show") {
            this.getLoginForm().reset();

            this.showEditButton();
        } else {
            this.hideEditButton();
        }
    },

    onMainPop: function(view, item) {
        if (item.xtype == "contact-edit") {
            this.showEditButton();
        } else {
            this.hideEditButton();
        }
    },

    onMarkerSelect: function(record) {
        var editButton = this.getEditButton();

        if (!this.showEdit) {
            this.showEdit = Ext.create('AddressBook.view.workorder.Edit');
        }

        // Bind the record onto the show contact view
        this.showEdit.setRecord(record);

        // Push the show contact view into the navigation view
        this.getMain().push(this.showEdit);
    },

    onLogin: function(username, password) {
        var controller = this;
        Ext.Ajax.request({
            url: 'login.php',
            method: 'POST',
            disableCaching: true,

            params: {
                username: username,
                password: password
            },

            success: function(response) {
                console.log("Login successful for {username}");
                var editButton = controller.getEditButton();
                if (!controller.showContact) {
                    controller.showContact = Ext.create('AddressBook.view.workorder.Map');
                }

                var store = Ext.getStore("WorkOrders");
                store.load({callback: function(records, operation, success) {
                                if(success) {
                                    console.log(records);
                                    controller.showContact.centerMap(store.data.items[0]);
                                    controller.showContact.setMarkers(store.data.items);
                                    // Push the show contact view into the navigation view
                                    controller.getMain().push(controller.showContact);
                                    controller.getLoginForm().resetForm();
                                }
                            },
                            scope: this
                });

            },

            failure: function(response) {
                console.log("Login failure for {username}");
            }
        });

    },

    onMarkerClicked: function(markerData) {

    },

    onContactEdit: function() {
        if (!this.editContact) {
            this.editContact = Ext.create('AddressBook.view.workorder.Edit');
        }

        // Bind the record onto the edit contact view
        this.editContact.setRecord(this.getShowContact().getRecord());

        this.getMain().push(this.editContact);
    },

    onContactChange: function() {
        this.showSaveButton();
    },

    onContactSave: function() {
        var record = this.getEditContact().saveRecord();

        this.getShowContact().updateRecord(record);

        this.getMain().pop();
    },

    showEditButton: function() {
        var editButton = this.getEditButton();

        if (!editButton.isHidden()) {
            return;
        }

        this.hideSaveButton();

        editButton.show();
    },

    hideEditButton: function() {
        var editButton = this.getEditButton();

        if (editButton.isHidden()) {
            return;
        }

        editButton.hide();
    },

    showSaveButton: function() {
        var saveButton = this.getSaveButton();

        if (!saveButton.isHidden()) {
            return;
        }

        saveButton.show();
    },

    hideSaveButton: function() {
        var saveButton = this.getSaveButton();

        if (saveButton.isHidden()) {
            return;
        }

        saveButton.hide();
    }
});