
function loggedIn(loggedInCallback, loggedOutCallback) {
    window.FB.getLoginStatus(function(response) {
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
        }
    );
}

function logout(successCallback) {
    FB.logout(successCallback);
}


function getMemberDetails(detailsCallback) {
     FB.api('/me', detailsCallback);
}
module.exports = {
    loggedIn: loggedIn,
    login: login,
    logout: logout,
    getMemberDetails: getMemberDetails
}