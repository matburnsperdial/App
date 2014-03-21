(function (global) {
    var EtaViewModel,
        app = global.app = global.app || {};

    EtaViewModel = kendo.data.ObservableObject.extend({
        date: "",
        time: "",
        error: false,
        online: false,
        weatherDataSource: null,
		
        onLoad: function () 
        {
			var data = ["One", "Two"];
            $("#dropdownlist").kendoDropDownList({
              dataSource: data
			});
            
            app.etaService.viewModel.getDate();
			
            app.etaService.viewModel.getTime();
        },
        
        getDate: function ()
        {
            var that = this,
                date = that.get("date").trim();
            
            try
            {
                var dateStored = getStored("date");
                
                that.set("date", dateStored);
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
            
            var data = [];
            
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
                        
                        var myTime = hour + ":" + min;
                        
                        console.log(myTime);
                        
                        /*data.push({
                            name: myTime
                        });*/
                    }
                }
                
                

                /*dataSource = new kendo.data.DataSource({
                    transport: {
                        read: {
                            url: myTime,
                            dataType: "text"
                        }
                    }
                });
                
                that.set("weatherDataSource", dataSource);*/
                
                /*$("#dropdown").kendoDropDownList({
                    dataSource: kendo.data.DataSource.create({ data: data }),
                    template: $("#etaTime").html(),
                    fixedHeaders: true
                });*/
                
                /*$("#dropdown").kendoDropDownList({
                    dataTextField: "text",
                    dataValueField: "value",
                    template: $("#etaTime").html(),
                    dataSource: [{ data: data }]
                });*/
            }
            catch (error)
            {
            	console.log(error);
            }
        },
        
    });

    app.etaService = {
        viewModel: new EtaViewModel()
    };
})(window);