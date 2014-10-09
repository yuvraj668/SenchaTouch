Ext.define('AddressBook.view.Login', {
    title: "Luminizer Login",
    extend: 'Ext.form.Panel',
    xtype: 'loginForm',

    config: {
        url: 'login.php',
        standardSubmit: false,
        title: 'Login Luminizer',
        layout: 'vbox',
        items: [
            {
                xtype: 'fieldset',
                title: 'MyCompony',
                instructions: 'Log in with username and password.',
                defaults: {
                    required: true,
                    labelAlign: 'left',
                    labelWidth: '40%'
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'username',
                        id: 'username',
                        label: 'Name',
                        value: 'user',
                        autoCapitalize: false
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'password',
                        id: 'password',
                        label: 'Password',
                        value: 'test'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {xtype: 'spacer'},
                    {
                        text: 'Reset',
                        handler: function() {
                            var form = this.parent.parent;
                            form.reset();
                        }
                    },
                    {
                        text: 'Login',
                        ui: 'confirm',
                        handler: function() {
                            var form = this.parent.parent;

                            var username = form.getValues().username;//form.down('#username').getValue();
                            var password = form.getValues().password;//down('#password').getValue();
                            form.fireEvent('login', username, password);
                        }
                    }
                ]
            }
        ]
    },

    resetForm: function() {
        var view = this.parent;
        view.down("#username").setValue("");
        view.down("#password").setValue("");
    }
});