/*<![CDATA[*/

var app = angular.module("contactForm", ["ngCookies"]);
app.controller("contactFormCtl", function($scope, $http, $cookies) {
    $scope.status_ok = true;
    $scope.err_msg = '';

    $scope.content = '';

    $scope.errorResponse = function(detail) {
        $scope.status_ok = false;
        $scope.err_msg = detail;
        $scope.content = '';
    };

    $scope.submitMessage = function() {
        if ($scope.content == '') return;

        // Get PyAcct URI
        $http({
            method: 'GET',
            url: '/uri/pyacct'
        }).then(function successCallback(response) {
            var uri = response.data;

            // Get PyAcct user ID
            $http({
                method: 'GET',
                url: uri + '/pyacct/2/account/',
                headers: {
                    'token' : $cookies.get('token')
                }
            }).then(function successCallback(response) {
                var id = response.data.id;

                // Get PyAcct user email
                $http({
                    method: 'GET',
                    url: uri + '/pyacct/2/account/' + id + '/email',
                    headers: {
                        'token' : $cookies.get('token')
                    }
                }).then(function successCallback(response) {
                    var email = response.data.value;

                    // Get AuthMail URI
                    $http({
                        method: 'GET',
                        url: '/uri/authmail'
                    }).then(function successCallback(response) {
                        var uri = response.data;

                        // Send mail to both mason@hicksm.dev and sender
                        $http({
                            method: 'POST',
                            url: uri + '/authmail/1/msg/',
                            data: {
                                "sender" : email,
                                "recipients" : ["mason@hicksm.dev", email],
                                "body" : document.getElementById('msgText').value,
                                "authorization" : $cookies.get('token')
                            }
                        }).then(function successCallback(response) {
                            document.getElementById('postText').innerText = "Recieved - I will get back to you soon!";
                            $scope.content = '';
                        }, 
                        function errorCallback(response) {
                            $scope.errorResponse(response.data.deal);
                        });
                    }, 
                    function errorCallback(response) {
                        $scope.errorResponse(response.data.detail);
                    });
                }, 
                function errorCallback(response) {
                    $scope.errorResponse(response.data.detail);
                });
            }, 
            function errorCallback(response) {
                $scope.errorResponse(response.data.detail);
            });
        }, 
        function errorCallback(response) {
            $scope.errorResponse(response.data.detail);
        });
    };
});

/*]]>*/