const StateManager = (function(){
    let _currentState = undefined,
        _subscribers = [],
        _reducer = undefined;

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback === 'function')
            _subscribers.push(callback);
    }

    //prviate
    function notifySubscribers(){
        _subscribers.forEach(callback => callback());
    }

    function dispatch(action){
        const newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        notifySubscribers();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error('Reducer function is mandatory to create the store');
        _reducer = reducer;
        
        //to initialize the store state with a 'valid default state'
        _currentState = _reducer(undefined, { type : '@@INIT' });
        const store = { getState, subscribe, dispatch }
        return store;
    }

    return { createStore };
})()