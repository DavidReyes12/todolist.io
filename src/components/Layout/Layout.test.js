import { render, fireEvent, screen } from '@testing-library/react';

import { SessionContext } from "../../config/State";
import App from '../../App';

const { getByTestId } = screen;

const session = {
    userName: "David Reyes",
    id: 1,
    welcomeMsg: ""
};

const setSession = () => {};

describe("Layout test", () => {

    beforeEach(() => {
       render(<SessionContext.Provider value={{session, setSession}}>
                <App />          
            </SessionContext.Provider>
       );
    });

    test("Layout must be render", () => {

        fireEvent.click(getByTestId("MenuIconTest"));

        expect(getByTestId("LayoutTest")).toBeInTheDocument();
        
    });

});