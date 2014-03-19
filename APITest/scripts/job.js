(function (global) {
    var JobViewModel,
        app = global.app = global.app || {};

    JobViewModel = kendo.data.ObservableObject.extend({
        callRef: "",
        company: "",
        address: "",
        contactName: "",
        telephone: "",
        description: "",
        type: "",
        date: "",
		start: "",
        end: "",
        online: false,
        status: false,
		
        getNextJob: function () 
        {            
            try
            {
                if (!isOnline())
                {
                    console.log("offline");
                    app.jobService.viewModel.set("online", true);
                }
                else
                {
                    console.log("online");
                    app.jobService.viewModel.set("online", false);
                    
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
            	contactName = that.get("contactName").trim();
            	telephone = that.get("telephone").trim();
            	description = that.get("description").trim();
            	type = that.get("type").trim();
            	date = that.get("date").trim();
            	start = that.get("start").trim();
            	end = that.get("end").trim();
            
            if ("row" in nextJob)
            {
                that.getFieldForBinding(nextJob);
                
                /*for (var key in nextJob.row) 
                {
                    var fieldName = key;
                    var fieldValue = nextJob.row[key];
                    
                    if (fieldName.indexOf("Job") >= 0 && fieldName.indexOf("ID") >= 0)
                    {
                        that.set("callRef", fieldValue);
                        setStored("callRef", fieldValue);
                    }
                    else if (fieldName.indexOf("Company") >= 0)
                    {
                        that.set("company", fieldValue);
                        setStored("company", fieldValue);
                    }
                    else if (fieldName.indexOf("Address") >= 0)
                    {
                        that.set("address", fieldValue);
                        setStored("address", fieldValue);
                    }
                    else if (fieldName.indexOf("Last") >= 0 && fieldName.indexOf("Name") >= 0)
                    {
                        that.set("contactName", fieldValue);
                        setStored("contactName", fieldValue);
                    }
                    else if (fieldName.indexOf("Phone") >= 0)
                    {
                        that.set("telephone", fieldValue);
                        setStored("telephone", fieldValue);
                    }
                    else if (fieldName.indexOf("Description") >= 0)
                    {
                        that.set("description", fieldValue);
                        setStored("description", fieldValue);
                    }
                    else if (fieldName.indexOf("Type") >= 0)
                    {
                        that.set("type", fieldValue);
                        setStored("type", fieldValue);
                    }
                    else if (fieldName.indexOf("Start") >= 0)
                    {
                        var valueToTrim = fieldValue;
                        valueToTrim = valueToTrim.slice(0, -15);
                        that.set("date", valueToTrim);
                        setStored("date", fieldValue);
                        
                        fieldValue = fieldValue.slice(11, -9);
                        that.set("start", fieldValue);
                        setStored("start", fieldValue);
                    }
                    else if (fieldName.indexOf("End") >= 0)
                    {
                        fieldValue = fieldValue.slice(11, -9);
                        that.set("end", fieldValue);
                        setStored("end", fieldValue);
                    }
                }*/
            }
            else
            {
                console.log("No data available");
                // feedback
            }
        },
        
        getFieldForBinding: function (nextJob) 
        {
            for (var key in nextJob.row) 
            {
            	var fieldName = key;
                var fieldValue = nextJob.row[key];
                    
                var nextJobAllocated = checkAllocated(fieldName, fieldValue);
            }
        },
        
        checkAllocated: function (fieldName, fieldValue) 
        {
            if (fieldName.indexOf("Status") >= 0)
            {
            	//that.set("status", true);
                if (fieldValue == "")
                {
                    
                }
            }
            
        },
        
        bindFields: function (nextJob) 
        {
            if (fieldName.indexOf("Job") >= 0 && fieldName.indexOf("ID") >= 0)
            {
            	that.set("callRef", fieldValue);
                setStored("callRef", fieldValue);
            }
                else if (fieldName.indexOf("Company") >= 0)
                {
                	that.set("company", fieldValue);
                    setStored("company", fieldValue);
                }
                else if (fieldName.indexOf("Address") >= 0)
                {
                	that.set("address", fieldValue);
                    setStored("address", fieldValue);
                }
                else if (fieldName.indexOf("Last") >= 0 && fieldName.indexOf("Name") >= 0)
                {
                	that.set("contactName", fieldValue);
                    setStored("contactName", fieldValue);
                }
                else if (fieldName.indexOf("Phone") >= 0)
                {
                	that.set("telephone", fieldValue);
                    setStored("telephone", fieldValue);
                }
                else if (fieldName.indexOf("Description") >= 0)
                {
                	that.set("description", fieldValue);
                    setStored("description", fieldValue);
                }
                else if (fieldName.indexOf("Type") >= 0)
                {
                	that.set("type", fieldValue);
                    setStored("type", fieldValue);
                }
                else if (fieldName.indexOf("Start") >= 0)
                {
                	var valueToTrim = fieldValue;
                    valueToTrim = valueToTrim.slice(0, -15);
                    that.set("date", valueToTrim);
                    setStored("date", fieldValue);
                        
                    fieldValue = fieldValue.slice(11, -9);
                    that.set("start", fieldValue);
                    setStored("start", fieldValue);
                }
                else if (fieldName.indexOf("End") >= 0)
                {
                	fieldValue = fieldValue.slice(11, -9);
                    that.set("end", fieldValue);
                    setStored("end", fieldValue);
                }
        }
    });

    app.jobService = {
        viewModel: new JobViewModel()
    };
})(window);