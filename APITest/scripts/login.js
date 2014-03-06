(function (global) {
    var LoginViewModel,
        app = global.app = global.app || {};

    LoginViewModel = kendo.data.ObservableObject.extend({
        isLoggedIn: false,
        username: "",
        password: "",
        error: false,

        onLogin: function () {
            var that = this,
                username = that.get("username").trim(),
                password = that.get("password").trim();

            if (username === "" || password === "") {
                navigator.notification.alert("Both fields are required!",
                    function () { }, "Login failed", 'OK');

                return;
            }
            
            var checkLogin = call(webService + "getLogin", username, password);
            
            console.log("checkLogin: " + checkLogin);
            
            if (!checkLogin == "0")
            {
                that.set("isLoggedIn", true);
                setStored("userId", checkLogin);
                var bla = getStored("userId");
            }
            else
            {
                console.log("in: " + checkLogin)
                that.set("error", true);
                that.set("isLoggedIn", false);
            }
            
        },
        
        onLogout: function () {
            var that = this;

            that.clearForm();
            clearStored();
            that.set("isLoggedIn", false);
            that.set("error", false);
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