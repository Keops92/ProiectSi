import ko from 'knockout';
import template from '../templates/friend-details.html'


function viewModel(params) {
    var name = params.details.name;
    var imageUrl = params.details.picture.data.url;

    function select() {
        params.select(params.details.id);
    }

    var isSelected = ko.pureComputed(function() {
        return params.activeSelection() == params.details.id;
    });


    return {
        name: name,
        imageUrl: imageUrl,
        select: select,
        isSelected: isSelected
    }
}

ko.components.register('friend-details',
    {
        viewModel: viewModel,
        template: template
    });

