import { render, screen } from '@testing-library/react';
import { State, SessionContext } from "./State";
import App from '../App';

const session = null

const setSession = () => {};

describe("State test", () => {

    beforeEach(() => {

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

        render(<State session={session} setSession={setSession}>
                <App />          
            </State>
        );
     });

    test("SaveLocalStorage and LoadFromLocalStorage function must be called when the state component is render", () => {
        // Login must be in the document because the storage is null
        jest.spyOn(localStorage, 'setItem');
        jest.spyOn(localStorage, 'getItem');

        expect(screen.getByText("Bienvenido")).toBeInTheDocument();
        
    });

});