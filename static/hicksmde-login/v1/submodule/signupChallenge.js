/*<![CDATA[*/

var app = angular.module( "signupChallenge", [] );
app.controller( "signupChallengeCtl", function( $scope, $http ) {
    $scope.response = function() {
        // Make HTTP request to submit response to challenge
        $http({
            method: 'GET',
            url: '/uri/authmail',
        }).then(function successCallback(response) {
            var uri = response.data;

            $scope.authdata.response = document.getElementById('oac').value;

            // submit response
            $http({
                method: 'POST',
                url: uri + '/authmail/1/response/',
                data: $scope.authdata
            }).then(function responseCallback(response) {
                $http({
                    method: 'GET',
                    url: '/uri/pyacct'
                }).then(function responseCallback(response) {
                    var uri = response.data;

                    // POST PyAcct account
                    $http({
                        method: 'POST',
                        url: uri + '/pyacct/2/account/',
                        data: {
                            username: $scope.data.username,
                            password: $scope.data.password,
                            password_confirmation: $scope.data.passwordConfirmation,
                            attributes: [
                                {
                                    key: "name",
                                    value: $scope.attr.name
                                }, 
                                {
                                    key: "email",
                                    value: $scope.attr.email
                                }
                            ]
                        }
                    }).then(function responseCallback(response) {
                        // go to login form
                        window.location.href = '/login';
                    }, $scope.errorCallback);
                }, $scope.errorCallback);
            }, $scope.errorCallback);
        }, 
        $scope.errorCallback);
    };

    $scope.cancel = function() {
        $scope.environment.status_ok = true;
        $scope.environment.mode = 'form';
    }
});

/*]]>*/