/*<![CDATA[*/

var app = angular.module("blog", ["nav", "blogPost"]);
app.controller("blogCtl", function($scope, $http) {
    // TODO: Retrieve via HTTP later
    $scope.getPosts = function() {
        return [
            {
                id: 'a6f6c928-139c-4171-aae8-aa1dea0c8faf',
                title: 'Website Overhaul',
                date: [2024, 8, 30],
                content: 'Welcome to the new hicksm.dev web portal! I recently desided to overhaul the frontend of my web portal in order to better display my skills. When I first made this page, I was a novice developer, still finishing up my senior coursework and not at all equipped to build a complex web server. Now, I want my website to reflect that.\nThis website is made entirely in-house - no WordPress or anything fancy like that - to give me an opportunity to practice building a medium-sized solution from scratch. Currently, my technology stack is AngularJS, Python, and PostgreSQL.\nMy website is built as a service-oriented architecture. To demonstrate this, the <a href="https://github.com/mwhicks-dev/hicksmde-mapping">web server</a>, <a href="https://github.com/mwhicks-dev/pyacct">account details</a>, and <a href="https://github.com/mwhicks-dev/authmail">email authentication</a> are all services I have deployed independently (albeit on the same host for now, until I can afford to run a few GCP nodes to host as microservices). This way, I can add new features without having to worry so much about dependencies between my software and redeployment of each piece; instead, I only need to focus on building my new backend software, and writing a UI for it that my web server can handle.\nStay tuned to see what I do next.'
            },
            {
                id: 'cc7fa7bd-f247-4215-bf24-578edffe4f3b',
                title: 'Lorem Ipsum',
                date: ['?', '?', '?'],
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in risus in tortor pretium gravida non vitae justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec accumsan aliquet neque, id facilisis nulla volutpat quis. Nulla non imperdiet est. Duis sed enim orci. Fusce maximus, augue non efficitur facilisis, lacus ligula scelerisque diam, et pharetra sem felis id arcu. Aenean porttitor risus non eros fringilla, vel ornare lacus consequat. Mauris id tellus nulla. Morbi cursus, quam ac luctus tincidunt, quam erat euismod sem, tempor maximus ligula tellus quis mi. Nam interdum facilisis odio, sit amet fermentum nibh semper id. Aliquam iaculis mauris ut lacus sollicitudin feugiat. Vivamus accumsan ipsum eu ante mollis egestas porta a felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;\nUt quis erat diam. Maecenas risus nisl, vestibulum ut dignissim eu, molestie non orci. Pellentesque sit amet justo sed arcu malesuada semper eget ac nisi. Praesent congue elementum risus, at hendrerit elit convallis sit amet. Mauris imperdiet volutpat posuere. Fusce mauris metus, tristique a congue molestie, facilisis vel ante. Etiam in tincidunt arcu. Aenean odio nisl, venenatis eget aliquet pharetra, bibendum non velit. Praesent dapibus suscipit quam, eu dictum tortor volutpat eu. Maecenas euismod magna et eleifend semper. Curabitur eu velit mollis, consectetur arcu ut, varius mauris. Maecenas placerat est sit amet velit commodo, at elementum nibh vulputate. Nulla facilisi. Ut dictum non diam sed dapibus. Nunc pretium diam rutrum suscipit tempor.\nProin id sapien sed lectus porttitor convallis. Vestibulum mattis velit at dapibus venenatis. Sed sit amet pretium tellus, id ultrices ex. Nam ut lectus venenatis, rhoncus ante nec, suscipit justo. Mauris fringilla ullamcorper dolor nec dapibus. Nunc justo nisi, eleifend sed dolor at, consectetur aliquet odio. Praesent vitae ornare sapien, at feugiat est. Quisque eget lacus est.\nCras nec tortor volutpat massa ornare tincidunt nec id ex. Nullam et turpis velit. Duis eleifend interdum placerat. Integer euismod sit amet risus in varius. Sed convallis risus vitae lacus elementum placerat. Aliquam erat volutpat. Nullam pharetra ante sed tortor viverra lobortis. Nulla sed ultricies justo. Etiam ornare ornare lorem. Vestibulum sollicitudin libero venenatis libero porttitor maximus. Curabitur faucibus leo tellus, vel placerat nunc molestie ut.\nSed efficitur viverra laoreet. Vivamus facilisis massa lobortis, egestas orci a, dapibus diam. Nullam a nulla lacus. Praesent pretium massa lacus, iaculis vestibulum sapien varius sit amet. Phasellus imperdiet vehicula orci sed aliquam. Fusce posuere lobortis arcu, ut porta purus tempus eget. Curabitur laoreet, metus a sodales faucibus, elit mauris ornare purus, ac efficitur nisl libero ut justo. Ut quis odio vel ipsum sollicitudin condimentum. Phasellus maximus, massa eu consectetur sodales, nunc arcu ornare nunc, sed viverra sapien arcu et ante. Sed convallis lacinia nisl et congue.'
            }
        ];
    }

    $scope.truncate = function(content) {
        if (content.length <= 150) {
            return content;
        }

        return content.substring(0, 150) + '...';
    }

    $scope.redirectToPost = function(id) {
        window.location.href = '/blog/post/' + id;
    }

    $scope.posts = $scope.getPosts();
});

/*]]>*/