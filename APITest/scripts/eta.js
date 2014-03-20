(function (global) {
    var EtaViewModel,
        app = global.app = global.app || {};

    EtaViewModel = kendo.data.ObservableObject.extend({
        date: "",
        time: "",
        error: false,
        online: false,
		
        onLoad: function () 
        {
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
                var year = dateStored.slice(0, 4);
                var month = dateStored.slice(5, 7);
                var day = dateStored.slice(8, 10);
                
                console.log(day);
                
                for (day; day <= 30; day++)
                {
                 	
                }
                
                //console.log(day);
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
                        
                        //console.log(myTime);
                        
                        data.push({
                            name: myTime
                        });
                    }
                }
                
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
        }
        
    });

    app.etaService = {
        viewModel: new EtaViewModel()
    };
})(window);