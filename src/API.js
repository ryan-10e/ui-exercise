var venues = [
    {'id': 123, 'name': 'The Staples Center', 'status': 'LIVE'},
    {'id': 124, 'name': 'Dodger Stadium', 'status': 'SETUP'},
    {'id': 125, 'name': 'The Forum', 'status': 'NEW'}
];

function getMaxId() {
    var maxId = 0;
    for (var i = 0; i < venues.length; i++) {
        if (venues[i].id > maxId) maxId = venues[i].id;
    }
    return maxId;
}

export default {
    name: () => {
        return 'Venue Management Interface';
    },
    create: (venue) => {
        console.log(venues.length);
        venue.id = getMaxId() + 1;
        venues[venues.length] = venue;
        return venue;
    },
    read: (id) => {
        for (var i = 0; i < venues.length; i++) {
            if (venues[i].id === id) {
                return venues[i];
            }
        }
    },
    update: (id, venue) => {
        for (var i = 0; i < venues.length; i++) {
            if (venues[i].id === id) {
                venues[i].name = venue.name;
                venues[i].status = venue.status;
                return venues[i];
            }
        }
    },
    delete: (id) => {
        for (var i = 0; i < venues.length; i++) {
            if (venues[i].id === id) {
                delete venues[i];
                return true;
            }
        }
        console.log('Not found');
        return false;
    },
    search: (searchOptions) => {
        return venues;
    }
}
