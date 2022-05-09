import { render, screen } from '@testing-library/react';

import { SessionContext } from "../../config/State";
import App from '../../App';

const { getByTestId } = screen;

const session = {
    userName: "David Reyes",
    id: 1,
    welcomeMsg: "Bienvenido David Reyes"
};;

const setSession = () => {};

describe("Home test", () => {

    beforeEach(() => {
       render(<SessionContext.Provider value={{session, setSession}}>
                <App />          
            </SessionContext.Provider>
       );
    });

    test("Home must be render", () => {

        expect(getByTestId("homeTest")).toBeInTheDocument();
        
    });

});