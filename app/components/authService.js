angular.module('myApp.authService', [])
    .factory('authService', authService);

authService.$inject = ['$http'];

function authService(){
    var user = {
        username: 'thomas',
        password: 'thomas'
    };
    var connected = false;

    var service = {
        login: login,
        user: user,
        isConnected: isConnected,
        logout: logout,
    };

    function login(userinfo) {

        if (!(userinfo.username == user.username && userinfo.password == user.password)) {
            console.log("Authentication failed");
            connected = false;
            return false;
        } else {
            console.log("Authentication successful");
            connected = true;
            return true;
        }

    }
    function isConnected() {
        return connected;
    }
    function logout() {
        connected = false;
    }
    return service;
}