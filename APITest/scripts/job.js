(function (global) {
    var JobViewModel,
        app = global.app = global.app || {};

    JobViewModel = kendo.data.ObservableObject.extend({
        client: "",
        balance: "",
        call: "",

        getNextJob: function () {
            var that = this,
                username = that.get("username").trim(),
                password = that.get("password").trim();
                password = that.get("password").trim();
            
            var checkLogin = call(webService + "getLogin", username, password);
            
            
            
        }
    });

    app.jobService = {
        viewModel: new JobViewModel()
    };
})(window);