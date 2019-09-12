const storage = {
    get: name => {
        try {
            let value = localStorage.getItem(name);
            if (value) {
                try {
                    value = JSON.parse(value);
                    return value;
                } catch (error) {
                    return value;
                }
            }
        } catch (error) {
            console.error('Error while retrieving data', error);
        }
    },
    set: (name, data) => {
        try {
            let value = JSON.stringify(data);
            return localStorage.setItem(name, value);
        } catch (error) {
            console.error('Error while storing data:', error);
        }
    },
    setTruckers: truckers => {
        return storage.set('@app:truckers', truckers)
    },
    getTruckers: () => {
        return storage.get('@app:truckers');
    }
}

export default storage;