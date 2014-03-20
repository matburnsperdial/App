(function (global) {
    var LoginViewModel,
        app = global.app = global.app || {};

    LoginViewModel = kendo.data.ObservableObject.extend({
        isLoggedIn: false,
        username: "",
        password: "",
        error: false,
        emptyUserPass: false,
        online: false,
		
        onLogin: function () {
            var that = this,
                username = that.get("username").trim(),
                password = that.get("password").trim();
			
            if (username === "" || password === "") 
            {
				that.set("emptyUserPass", true);
                return;
            }
            
            if (!isOnline())
            {
                that.set("online", true);
            }
            else
            {
                that.set("online", false);
                
                var checkLogin = getLogin(username, password);
                
                console.log("checkLogin: " + checkLogin);
                
                if (!checkLogin == "0")
                {
                    that.set("isLoggedIn", true);
                    setStored("userId", checkLogin);
                }
                else
                {
                    that.set("error", true);
                    that.set("isLoggedIn", false);
                }
            }
            
        },
        
        onLogout: function () {
            var that = this;

            that.clearForm();
            clearStored();
            that.set("isLoggedIn", false);
            that.set("error", false);
            that.set("emptyUserPass", false);
            that.set("online", false);
            app.jobService.viewModel.set("jobNotAvailable", false);
        },

        clearForm: function () {
            var that = this;

            that.set("username", "");
            that.set("password", "");
        },

        checkEnter: function (e) {
            var that = this;

            if (e.keyCode == 13) {
                $(e.target).blur();
                that.onLogin();
            }
        }
    });

    app.loginService = {
        viewModel: new LoginViewModel()
    };
})(window);