Ext.define('PortfolioApp.view.Main', {
    extend: 'Ext.form.Panel',
	
    title: 'Main',
    id: 'Main',
    config: {
		tabBarPosition: 'bottom',
		fullscreen: true,
      items: [
                {
                    xtype: 'fieldset',
                    title: 'User Credentials',
                    instructions: 'Please enter the information above.',
                    defaults: {
                        required: true,
                        labelAlign: 'center',
                        labelWidth: '40%'
                    },
                    items: [
                    {
                        xtype: 'textfield',
                        name : 'username',
                        label: 'User Name',
                        useClearIcon: true,
                        autoCapitalize : false,
                        maxLength: 50,
                        width: '100%',
                        maxWidth: '100%'
                    }, {
                        xtype: 'passwordfield',
                        name : 'password',
                        label: 'Password',
                        useClearIcon: true,
                        maxLength: 30,
                        width: '100%',
                        maxWidth: '100%'
                    },
                    {
                        xtype: 'textfield',
                        name : 'token',
                        label: 'Token',
                        useClearIcon: true,
                        maxLength: 30,
                        width: '100%',
                        maxWidth: '100%',
						hidden : true
                    }
                    ]
                },
              
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            text: 'Reset',
                        },
        						{
                            text: 'Login',
                            ui: 'confirm'
                        }
                    ]
                },
				
            ]

	},
	initialize: function() {
		this.callParent();
	}
});