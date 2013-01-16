Ext.define('PortfolioApp.store.Clientdatas', {
	extend:'Ext.data.TreeStore',
	requires:['PortfolioApp.model.Client'],
	config: {
	model:'PortfolioApp.model.Client',
	autoLoad:true,
   	proxy: {
        type: 'ajax',
       url: './data/clients.json',
        reader: {
            type: 'json',
            rootProperty: 'items'// referred from Sencha Forum
        }
	
    }
	}

});