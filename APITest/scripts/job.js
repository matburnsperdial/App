(function (global) {
    var JobViewModel,
        app = global.app = global.app || {};

    JobViewModel = kendo.data.ObservableObject.extend({
        client: "",
        balance: "",
        call: "",
		
        getNextJob: function () {
            var that = this,
                client = that.get("client").trim(),
                balance = that.get("balance").trim();
            	call = that.get("call").trim();
            
            var userId = getStored("userId");
            
            console.log("userId: " + userId);
            
            //var nextJob = getNextJob(userId);
            
            //console.log("Job: " + nextJob);
            
            
            
        }
    });

    app.jobService = {
        viewModel: new JobViewModel()
    };
})(window);