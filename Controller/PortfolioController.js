Ext.define('PortfolioApp.controller.PortfolioController', {
    extend: 'Ext.app.Controller',
		require:['Ext.MessageBox','Ext.device.device.Abstract'],
    views: ['Main','Portfolio','View','feature.Feature'],
	models:['Client','Grid'],
	store:['Clientdatas','Griddata'],
    config: {
        control: {
            'button[text=Login]': {
                tap: 'doLogin'
            },
            'button[text=Reset]': {
                tap: 'doReset'
            },
            'button[iconCls=refresh]': {
                tap: 'doRefresh'
            },
            'button[iconCls=home]': {
			
			tap: 'doLogout'
            },
			
			'nestedlist[id=ClientList]':{
				leafitemtap:'doClientTapListen'
			},
			
			
			'button[id=NotesSave]':{
				tap:'doNotesSave'
			},
			'button[id=NotesClear]':{
				tap:'doNotesClear'
			},
			'button[id=NotesCancel]':{
				tap:'doNotesCancel'
			},
        },
        refs: {
            userField: 'textfield[name=username]',
            passwordField: 'passwordfield[name=password]',
            loginForm: '#Main',
            portfolioForm: '#Portfolio',
            tokenField: 'textfield[name=token]',
			notesAreaField:'textareafield[id=NotesField]',
			notesPanel:'panel[id=NotesPanel]',
			gridCarousel:'#GridCarousel',
			gridData:'#portfolioGridData',
			gridData2:'#portfolioGridData2',
			clientList:'#ClientList',
			goLogout:'#doLogout'
			}
    },

    doLogin: function() {
	
      var errorcode = "";
      var errormessage = "";
      var self = this;
	   var onresponse = function(resp) {
          // resp is the XmlHttpRequest object to the server
          self.errorcode = Ext.decode(resp.responseText).errorcode;
          self.errormessage = Ext.decode(resp.responseText).errormessage;
          if(self.errorcode == "0"){
            self.getTokenField().setValue(self.errormessage);
            Ext.Viewport.setActiveItem(self.getPortfolioForm());
			}else{
            Ext.Msg.alert("Error: "+ self.errorcode ,self.errormessage);
          }
	  };
    
      Ext.Ajax.request({
        loadMask: true,
        url: 'https://krishna.srivatsanuk.com/PortfolioApp/authenticate',
        params: {username: self.getUserField().getValue(), password: self.getPasswordField().getValue()},
        success: onresponse
      });
	 
	  this.getClientList().getStore().setProxy({                
   type: 'ajax',
                 url:'https://krishna.srivatsanuk.com/data/'+self.getUserField().getValue()+'.json',
        reader: {
            type: 'json',
			rootProperty: 'items'
            
            
        }
            });
			  this.getClientList().getStore().load();
    },

    doLogout: function() {
      var self = this;
	 
	   if(this.getNotesAreaField().getValue()=="")
		 {
		 Ext.Msg.confirm("Logout","Are you sure you want to Logout ?",function(buttonId,value,obj){ if(buttonId=="yes"){
		
			Ext.Ajax.request({
				loadMask: true,
				url: 'https://krishna.srivatsanuk.com/PortfolioApp/logout',
				params: {token: self.getTokenField().getValue()},
				success: function(resp){
				  self.getLoginForm().reset();
				  Ext.Viewport.setActiveItem(self.getLoginForm());
				}
			  });
			this.getNotesAreaField().setValue("");  
		
		}},self);
	}
	else
	{
	Ext.Msg.confirm("Save","Do you want to save the notes",function(buttonId,value,obj){if(buttonId=="yes")
	{
	this.getNotesAreaField().setValue("");	
	}
	},self);
	
	}
	

    },
	
	
 doClientTapListen: function( thisobj,list, index,target, record, e, eOpts )	{
 var clientId = thisobj.getBackButton().getText();
  
  this.getGridData().getStore().setProxy({                
   type: 'ajax',
                 url:'https://krishna.srivatsanuk.com/data/'+clientId+'tax.json',
        reader: {
            type: 'json',
            
            
        }
            });
  

  this.getGridData().getStore().load();
   this.getGridData2().getStore().setProxy({                
   type: 'ajax',
                 url:'https://krishna.srivatsanuk.com/data/'+clientId+'Ntax.json',
        reader: {
            type: 'json',
            
            
        }
            });
  

  this.getGridData2().getStore().load();
 //alert(list.list.getTitle('text'));
 //taxtype = record.get('text');
 
  this.getGridCarousel().setActiveItem(index).animateActiveItem(index,'flip');
 
 },
    doRefresh: function() {
       alert('Refresh');
	 
           
         
    },

    doReset: function() {
          this.getLoginForm().reset();
    },
	doNotesSave: function(){
       this.getNotesAreaField().setValue("");		
this.getNotesPanel().hide(true);	   
	},
	doNotesClear: function(){
      this.getNotesAreaField().setValue("");						 
	},
	doNotesCancel: function(){
     
	this.getNotesPanel().hide(true);	 
		
	},
    
    init: function() {
		Ext.create('PortfolioApp.view.Main');
		Ext.create('PortfolioApp.view.Portfolio');
     },
	
});