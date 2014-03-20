(function (global) {
    var EtaViewModel,
        app = global.app = global.app || {};

    EtaViewModel = kendo.data.ObservableObject.extend({
        date: "",
        time: "",
        error: false,
        online: false,
		
        onLoad: function () {
            //var that = this,
                //date = that.get("date").trim(),
                //time = that.get("time").trim();
			
            app.etaService.viewModel.getTime();
            
        },
        
        getDate: function ()
        {
            var that = this,
                date = that.get("date").trim();
            
            try
            {
                
            }
            catch (error)
            {
            	console.log(error);
            }
        },
        
        getTime: function ()
        {
            var that = this,
                time = that.get("time").trim();
            
            try
            {
    			for (var hour = 0; hour <= 24; hour++)
                {
                    if (hour <= 9)
                    {
                    	hour = "0" + hour;
                    }
                    
                    for (var min = 0; min <= 45; min+=15)
                    {
                    	/*if (min == 0)
                        {
                        	min = "0" + min;
                        }*/
                        
                        console.log(hour + ":" + min);
                        //that.set("time", hour + ":" + min);
                        
                        var data = [];                
                            dropdown.push({ "dropdown": hour + ":" + min})
                        
                            $("#dropdown").kendoDropDownList({
                                dataTextField: "etaTime",
                                dataSource: data
                            });
                        
                        /*$("#dropdown").kendoDropDownList({
                            dataSource: kendo.data.DataSource.create({ data: hour + ":" + min }),
                            template: $("#etaTime").html(),
                            fixedHeaders: true
                        });*/
                    }
                    
                }
            }
            catch (error)
            {
            	console.log(error);
            }
        }
        
    });

    app.etaService = {
        viewModel: new EtaViewModel()
    };
})(window);