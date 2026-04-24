var AppState = (function () {
    var state = {
        currentPage: "/",
        formMessages: []
    };

    var listeners = [];

    function getState() {
        return state;
    }

    function setState(newValues) {
        Object.keys(newValues).forEach(function (key) {
            state[key] = newValues[key];
        });
        listeners.forEach(function (callback) {
            callback(state);
        });
    }

    function subscribe(callback) {
        listeners.push(callback);
    }

    return {
        getState: getState,
        setState: setState,
        subscribe: subscribe
    };
})();
