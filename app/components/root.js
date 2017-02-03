import ko from 'knockout'
import template from '../templates/root.html';
import './user-details-component';
import facebookService from '../services/facebook-service';



function RootViewModel() {
    var isLoggedIn = ko.observable(false);
    setTimeout(function() {
        // wait for object to load
        facebookService.loggedIn(
            function() {
                isLoggedIn(true);
            },
            function () {
                isLoggedIn(false);
            }
        );
    }, 500);

    function login() {
        facebookService.login(
            function() {
                isLoggedIn(true);
            },
            function() {
                isLoggedIn(false);
            });
    }

    function logout() {
        facebookService.logout(
            function() {
                isLoggedIn(false);
            }
        )
    }
    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout
    }
}

ko.components.register('root',
    {
        viewModel: RootViewModel,
        template: template
    });
