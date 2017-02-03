
function loggedIn(loggedInCallback, loggedOutCallback) {
    if (FB == null) {
        loggedOutCallback();
        return;
    }
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            loggedInCallback();
        } else if (response.status === 'not_authorized') {
            loggedOutCallback();
        } else {
            loggedOutCallback();
        }
    });
}

function login(successCallback, failCallback) {
    FB.login(
        function(response) {
            if (response.authResponse) {
                successCallback();
            } else {
                failCallback();
            }
        }, {
            scope: 'user_likes,user_posts,read_custom_friendlists'
        }
    );
}

function logout(successCallback) {
    FB.logout(successCallback);
}


function getMemberPicture(memberId, successCallback) {
    FB.api('/' + memberId + '/picture', successCallback);
}

function getFriendList(callback) {
    FB.api('me/likes?fields=id,picture,name', callback);
}

function getMemberFeed(memberId, callback) {
    FB.api('/' + memberId + '/feed', callback);
}

function getMemberDetails(detailsCallback) {
     FB.api('/me', detailsCallback);
}
module.exports = {
    loggedIn: loggedIn,
    login: login,
    logout: logout,
    getMemberDetails: getMemberDetails,
    getMemberPicture: getMemberPicture,
    getFriendList: getFriendList,
    getMemberFeed: getMemberFeed
}