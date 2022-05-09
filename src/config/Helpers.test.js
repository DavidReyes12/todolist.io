import { saveToLocalStorage, loadFromLocalStorage } from "./Helpers";

describe("Helpers test", () => {

    test("SaveLocalStorage function must be called", () => {

        const localStorageMock = (function() {
            let store = {
                'appSession': {
                    userName: "David Reyes",
                    id: 1,
                    welcomeMsg: "Bienvenido David Reyes"
                }
            };
          
            return {
              getItem: function(key) {
                return store[key] || null
              },
              setItem: function(key, value) {
                store[key] = value.toString()
              },
            };
        })();

        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock
        });

        const spyGetItem = jest.spyOn(localStorage, 'setItem')

        saveToLocalStorage();

        expect(spyGetItem).toHaveBeenCalled();
        
    });

    test("LoadFromLocalStorage function must be called", () => {

        const localStorageMock = (function() {
            let store = {
                'appSession': {
                    userName: "David Reyes",
                    id: 1,
                    welcomeMsg: "Bienvenido David Reyes"
                }
            };
          
            return {
              getItem: function(key) {
                return store[key] || null
              },
              setItem: function(key, value) {
                store[key] = value.toString()
              },
            };
        })();

        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock
        });

        const spyGetItem = jest.spyOn(localStorage, 'getItem')

        loadFromLocalStorage();

        expect(spyGetItem).toHaveBeenCalled();
        
    });

    test("LoadFromLocalStorage function must be called with the storage null", () => {

        const localStorageMock = (function() {
            let store = {
                'appSession': null
            };
          
            return {
              getItem: function(key) {
                return store[key] || null
              },
              setItem: function(key, value) {
                store[key] = value.toString()
              },
            };
        })();

        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock
        });

        const spyGetItem = jest.spyOn(localStorage, 'getItem')

        loadFromLocalStorage();

        expect(spyGetItem).toHaveBeenCalled();
        
    });

});