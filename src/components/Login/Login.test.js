import { render, fireEvent, screen } from '@testing-library/react';

import { SessionContext } from "../../config/State";
import App from '../../App';

const { getByTestId } = screen;

const session = null;

const setSession = () => {};

describe("Login test", () => {

    beforeEach(() => {
       render(<SessionContext.Provider value={{session, setSession}}>
                <App />          
            </SessionContext.Provider>
       );
    });

    test("Login must be render", () => {

        expect(getByTestId("LoginTest")).toBeInTheDocument();
        
    });

    test("Login usernameInput must have David as value", () => {

        fireEvent.change(getByTestId("usernameInputTest"), {
            target: { value: "David" },
        });

        expect(getByTestId("usernameInputTest")).toHaveValue("David");
        
    });

    test("Login passwordInputTest must have 123 as value", () => {

        fireEvent.change(getByTestId("passwordInputTest"), {
            target: { value: "123" },
        });

        expect(getByTestId("passwordInputTest")).toHaveValue("123");
        
    });

});