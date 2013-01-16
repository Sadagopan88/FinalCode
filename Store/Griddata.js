Ext.define('PortfolioApp.store.Griddata', {
	extend:'Ext.data.Store',
requires:['PortfolioApp.model.Grid'],
config:{
		autoLoad:true,
		storeId :'gridDataStore',
		model : "PortfolioApp.model.Grid",
		proxy: {
        type: 'ajax',
        url:'./data/default.json',
        reader: {
            type: 'json',
        }
	
    }
				
		}
		});