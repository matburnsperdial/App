(function (global) {
    var LoginViewModel,
        app = global.app = global.app || {};

    LoginViewModel = kendo.data.ObservableObject.extend({
        isLoggedIn: false,
        username: "",
        password: "",

        onLogin: function () {
            var that = this,
                username = that.get("username").trim(),
                password = that.get("password").trim();

            if (username === "" || password === "") {
                navigator.notification.alert("Both fields are required!",
                    function () { }, "Login failed", 'OK');

                return;
            }
            
            /*var checkLogin;
            
            jQuery.support.cors = true;
            
			$.ajax({
					type: "POST",
                    async: false,
					url: "http://localhost:64840/tPointWebService.asmx/getLogin",
                    data: JSON.stringify({ username: username, password: password }),
                    contentType: "application/json; charset=utf-8",
					success: function (response) 
                    {                        
                        checkLogin = response.d;
                        
                        return checkLogin;
					},
                    error: function (response) 
                    {
						console.log("Error: " + response);
					}
			});*/
            
            var checkLogin = call(webService + "getLogin", username, password);
            //console.log(that.call(webService + "getLogin", username, password));
            console.log(checkLogin); 
            
            if (!checkLogin == "0")
            {
                that.set("isLoggedIn", true);
            }
            
        },
        

        onLogout: function () {
            var that = this;

            that.clearForm();
            that.set("isLoggedIn", false);
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