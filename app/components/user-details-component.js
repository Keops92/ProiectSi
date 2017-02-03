import ko from 'knockout';
import template from '../templates/user-details.html'

function viewModel(params) {
    function logout() {
        params.logout();
    }

    var memberDetails = ko.observable(null);

    return {
        logout: logout,
        memberDetails: memberDetails
    }

}

ko.components.register('user-details',
    {
        viewModel: viewModel,
        template: template
    });