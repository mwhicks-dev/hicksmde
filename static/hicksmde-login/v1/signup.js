/*<![CDATA[*/

var app = angular.module( "signup", ["ngCookies", "nav", 'signupForm', 'signupChallenge'] );
app.controller( "signupCtl", function( $scope, $cookies ) {
    if (!!$cookies.get('token') && $cookies.get('token') !== '') {
        window.location.href = '/';
    }

    $scope.environment = {
        mode: 'form',
        msg: '',
        status_ok: true
    };

    $scope.data = {
        username: '',
        password: '',
        passwordConfirmation: ''
    };

    $scope.attr = {
        name: '',
        email: ''
    };

    $scope.authdata = {
        id: '',
        email: '',
        response: ''
    };

    $scope.resetFormData = function() {
        $scope.data.username = '';
        $scope.data.password = '';
        $scope.data.passwordConfirmation = '';
        $scope.attr.name = '';
        $scope.attr.email = '';
    };
    
    $scope.errorCallback = function(response) {
        console.log(response);
        $scope.environment.mode = 'form';
        $scope.environment.status_ok = false;
        $scope.environment.msg = response.data.detail;
        $scope.resetFormData();
    };
});

/*]]>*/