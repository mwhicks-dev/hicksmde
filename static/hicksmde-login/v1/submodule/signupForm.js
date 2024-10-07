/*<![CDATA[*/

var app = angular.module( "signupForm", [] );
app.controller( "signupFormCtl", function( $scope, $http ) {
    // Get URI for signup challenge
    $scope.challenge = function() {
        $http({
            method: 'GET',
            url: '/uri/authmail'
        }).then(function successCallback(response) {
            var uri = response.data;

            // Make challenge request
            $http({
                method: 'POST',
                url: uri + '/authmail/1/challenge/',
                data: {"email": $scope.attr.email}
            }).then(function successCallback(response) {
                // Set mode to challenge
                $scope.authdata.email = $scope.attr.email;
                $scope.authdata.id = response.data.id;
                $scope.environment.mode = 'challenge';
            }, $scope.errorCallback)
        });

        $scope.environment.mode = 'challenge';
    };

    $scope.ready = function() {
        return $scope.signupForm.username.$valid
            && $scope.signupForm.password.$valid
            && $scope.signupForm.name.$valid
            && $scope.signupForm.email.$valid
            && $scope.data.password == $scope.data.passwordConfirmation;
    };
});

/*]]>*/