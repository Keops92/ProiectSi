import ko from 'knockout';
import template from '../templates/user-details.html'
import facebookService from '../services/facebook-service';

function viewModel(params) {
    function logout() {
        params.logout();
    }

    var name = ko.observable(null);
    var pictureUrl = ko.observable(null);

    facebookService.getMemberDetails(function (details) {
        name(details.name);

        facebookService.getMemberPicture(details.id,
        function(imageDetails) {
            pictureUrl(imageDetails.data.url)
        })
    });


    return {
        logout: logout,
        name: name,
        pictureUrl: pictureUrl
    }

}

ko.components.register('user-details',
    {
        viewModel: viewModel,
        template: template
    });