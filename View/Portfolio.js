Ext.define('PortfolioApp.view.Portfolio', {
    extend:'Ext.Container',	
	requires  : ['PortfolioApp.store.Clientdatas','PortfolioApp.view.View','PortfolioApp.store.Griddata','Ext.MessageBox'],
    title: 'Portfolio',
    id: 'Portfolio',
    config: {
      fullscreen: true,
      layout: 'hbox',
      items: [
                {
                    xtype: 'panel',
					flex: 0.8,
					layout: 'fit',
                    items: [
                    {
                        xtype: 'nestedlist',
						layout:'card',
						id :'ClientList',
						title : 'Clients',
						displayField: 'text',
						store :{
							xclass: 'PortfolioApp.store.Clientdatas'// refered from sencha forum thread 195027 
							},
						scrollable :true,
						useTitleAsBackText:true,
						backText:'title',	
						bodyBorder:true,
						onItemDisclosure: true,
						width: '100%',
						flex:1,
						autoLoad: true
													
						
					},
					{
                        xtype: 'toolbar',
                        docked: 'bottom',
                        items: [
                            {
                              xtype: 'button',
                              iconMask: true,
                              iconCls: 'refresh',
                              stretch: false,
                              align: 'left',
                            }
                        ]
					},
					]
				},
               {
                   xtype: 'carousel',
				   id:'GridCarousel',
                   layout: 'card',
				   showAnimation:
				   {
									
					duration:10000,
				    },
				   flex: 2,
					items: [
                      	{
					   xtype: 'touchgridpanel',
					   id:'portfolioGridData',
					   height:600,
					 	store   :{
						xclass:'PortfolioApp.store.Griddata'// refered from sencha forum thread 195027 
						},
						calcWidth : true,
						scrollable :true,
						columns : [
							{
								header    : 'Holding',
								dataIndex : 'Holding',
								style     : 'padding-left: 1em;',
								width     : '30%',
								
							},
							{
								header    : 'Stock',
								dataIndex : 'Stock',
								style     : 'text-align: center;',
								width     : '20%',
								renderer  : function(value, values) {
									var color = (value > 0) ? '009933' : 'FF0000';// To colour the negative values 
									return '<span style="color: #' + color + ';">' + value + '</span>';// refered from sencha forum 
								}
							},
							{
								header    : 'Cash',
								dataIndex : 'Cash',
								cls       : 'centered-cell',
								width     : '20%',
								
							},
							{
								header    : ' Total',
								dataIndex : 'Total',
								cls       : 'centered-cell',
								width     : '15%',
								renderer  : function(value, values) {
									var color = (value > 0) ? '009933' : 'FF0000';// To colour the negative values 
									return '<span style="color: #' + color + ';">' + value + '</span>';// refered from sencha forum 
								}
							},
							{
								header    : '% Value',
								dataIndex : 'Value',
								style     : 'text-align: right; padding-right: 1em;',
								width     : '15%'
							}
						]
					
               	},	
				{
					   xtype: 'touchgridpanel',
					   id:'portfolioGridData2',
					   height:600,
					 	store   :{
						xclass:'PortfolioApp.store.Griddata'// refered from sencha forum thread 195027 
						},
						calcWidth : true,
						scrollable :true,
						columns : [
							{
								header    : 'Holding2',
								dataIndex : 'Holding',
								style     : 'padding-left: 1em;',
								width     : '30%',
								
							},
							{
								header    : 'Stock2',
								dataIndex : 'Stock',
								style     : 'text-align: center;',
								width     : '20%',
								renderer  : function(value, values) {
									var color = (value > 0) ? '009933' : 'FF0000';// To colour the negative values 
									return '<span style="color: #' + color + ';">' + value + '</span>';// refered from sencha forum 
								}
							},
							{
								header    : 'Cash2',
								dataIndex : 'Cash',
								cls       : 'centered-cell',
								width     : '20%',
								
							},
							{
								header    : ' Total2',
								dataIndex : 'Total',
								cls       : 'centered-cell',
								width     : '15%',
								renderer  : function(value, values) {
									var color = (value > 0) ? '009933' : 'FF0000';// To colour the negative values 
									return '<span style="color: #' + color + ';">' + value + '</span>';// refered from sencha forum 
								}
							},
							{
								header    : '% Value2',
								dataIndex : 'Value',
								style     : 'text-align: right; padding-right: 1em;',
								width     : '15%'
							}
						]
					
               	},
					  {
                        xtype: 'toolbar',
                        docked: 'bottom',
						defaults:{
						iconMask: true,
						stretch: false
						},
                        items: [
							{
                              xtype: 'button',
                              iconCls: 'compose',
                              centered: true,
							  handler : function()
							  {
							  if(!this.overlay){
								this.overlay=Ext.Viewport.add({ 
								xtype:'panel',
								id:'NotesPanel',
								scrollable:true,
								hideOnMaskTap:true,
								modal:true,
								showAnimation:{
									type:'popIn',
									duration:500,
									easing:'cubic-bezier'
								},
								hideAnimation: {
									type:'popOut',
									duration:400,
									easing:'cubic-bezier'
								},
								centered:true,
								width:400,
								height:400,
								styleHtmlContent:true,
								items:[
								{
								xtype:'textareafield',
								id:'NotesField',
								height:'100%',
								weight:'100%',
								maxRows: 30,
								name: 'Notes'
								
								},
								{
									docked :'top',
									xtype:'toolbar',
									title:'Notes'
								},
								{
									docked :'bottom',
									xtype:'toolbar',
									items: [
										{
											xtype:'button',
											text:'Cancel',
											id :'NotesCancel',
											ui:'decline',
											
											
										},
										{
											xtype:'button',
											text:'Clear',
											id:'NotesClear'
											
										},
										{
											xtype:'spacer'
										},
										{
											xtype:'button',
											text: 'Save',
											id:'NotesSave',
											ui: 'confirm'	
											
										}
										
										
									]
								}
							]
							
						});
							}
							this.overlay.show();
								
							}
								
							  
                            },
                           {
                              xtype: 'button',
							  docked :'right',
                              iconCls: 'home',
							 
							  
                            },
							
					 
							
                        ]
                      }
                    ]
				
                },
            ]
			
	},
	initialize: function() {
		this.callParent();
	},
	
});