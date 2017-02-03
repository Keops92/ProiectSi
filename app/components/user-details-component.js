import ko from 'knockout';
import './friend-details';
import template from '../templates/user-details.html'
import facebookService from '../services/facebook-service';
import _ from 'lodash';

function viewModel(params) {
    function logout() {
        params.logout();
    }

    var name = ko.observable(null);
    var pictureUrl = ko.observable(null);

    var selectedFriendId = ko.observable(null);
    var friendList = ko.observable(null);
    var nextPageUrl = ko.observable(null);
    var nextPrevPageUrl = ko.observable(null)

    function selectFriend(friendId) {
        selectedFriendId(friendId);
    }

    function selectMe() {
        selectedFriendId('me');
    }
    var feedList = ko.observable();

    selectedFriendId.subscribe(function() {
       facebookService.getMemberFeed(selectedFriendId(), function(data) {
           feedList(data.data);
       });
    });


    facebookService.getMemberDetails(function (details) {
        name(details.name);
        selectedFriendId('me');
        facebookService.getMemberPicture(details.id,
        function(imageDetails) {
            pictureUrl(imageDetails.data.url)
        });
    });

    facebookService.getFriendList(function(data) {
        friendList(data.data);
    });

    return {
        logout: logout,
        name: name,
        pictureUrl: pictureUrl,
        selectFriend: selectFriend,
        selectedFriendId: selectedFriendId,
        friendList: friendList,
        selectMe: selectMe,
        feedList: feedList
    }

}

ko.components.register('user-details',
    {
        viewModel: viewModel,
        template: template
    });