/*<![CDATA[*/

var app = angular.module( "contact", ["ngCookies", "nav", "contactForm"] );
app.controller( "contactCtl", function( $scope, $cookies ) {
    // Retrieve this with HTTP later
    $scope.authenticated = !!$cookies.get('token') && $cookies.get('token') !== '';
});

/*]]>*/