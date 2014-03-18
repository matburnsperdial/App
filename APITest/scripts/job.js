(function (global) {
    var JobViewModel,
        app = global.app = global.app || {};

    JobViewModel = kendo.data.ObservableObject.extend({
        callRef: "",
        company: "",
        address: "",
        firstName: "",
        lastName: "",
        telephone: "",
        description: "",
		
        getNextJob: function () 
        {
        	try
            {
                var userId = getStored("userId");
                var nextJob = getMyNextJob(userId);
                
                if (nextJob !== undefined)
                {
                    console.log(nextJob);
                    app.jobService.viewModel.setupNextJob(nextJob);
                }
                else
                {
                    console.log("log out");
                    
                }
            }
            catch (error)
            {
                console.log("Error: " + error);
                app.loginService.viewModel.set("isLoggedIn", false);
            }
            
        },
        
        setupNextJob: function (nextJob) 
        {
            var that = this
                callRef = that.get("callRef").trim(),
                company = that.get("company").trim();
            	address = that.get("address").trim();
            	firstName = that.get("firstName").trim();
            	lastName = that.get("lastName").trim();
            	telephone = that.get("telephone").trim();
            	description = that.get("description").trim();
            
            if ("row" in nextJob)
            {
                for (var key in nextJob.row) {
                    //alert(' name=' + key + ' value=' + nextJob.row[key]);
                    
                    var fieldName = key;
                    var fieldValue = nextJob.row[key];
                    
                    //console.log("fieldName: " + fieldName);
                    
                    switch (fieldName, fieldValue)
            		{
                        case (fieldName.indexOf('Company') != -1):
                        	console.log("in!     fieldName: " + fieldName);	
                        	that.set("company", fieldValue);
                        	
                            break;
                        case (fieldName.indexOf('irst') >= 0):
                            //fieldValue = nextJob.row[key];
                        	that.set("firstName", fieldValue);
                        	console.log("in!     fieldName: " + fieldName);
                            break;
                    }
					
                    console.log("fieldValue: " + fieldValue);
                }
                
                
            }

        }
    });

    app.jobService = {
        viewModel: new JobViewModel()
    };
})(window);