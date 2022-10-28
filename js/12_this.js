const user = {
    name: 'Petras',
    getName: function() {
        return this.name;
    }
};

const user2 = {
    name: 'Jonas',
    getName: () => {
        return this.name;
    }
};

