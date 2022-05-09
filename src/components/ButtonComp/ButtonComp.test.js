import { render, fireEvent, screen } from '@testing-library/react';

import { SessionContext } from "../../config/State";
import ButtonComp from './index';

const { getByTestId } = screen;

const session = {
    userName: "David Reyes",
    id: 1,
    welcomeMsg: ""
};

const setSession = () => {};

describe("ButtonComp test", () => {

    test("ButtonComp must be render", () => {

        render(<SessionContext.Provider value={{session, setSession}}>
                    <ButtonComp render={(mockFunction) => (
                        <button data-testid="buttonTestAct" onClick={() => mockFunction(null)}>Press</button>
                    )} />          
                </SessionContext.Provider>
        );

        fireEvent.click(getByTestId("buttonTestAct"));

        expect(getByTestId("buttonTest")).toBeInTheDocument();
        
    });

    test("ButtonComp must be render with the correct session", () => {

        render(<SessionContext.Provider value={{session, setSession}}>
                    <ButtonComp render={(mockFunction) => (
                        <button data-testid="buttonTestAct" onClick={() => mockFunction({ userName: "David Reyes", password: "123" })}>
                            Press
                        </button>
                    )} />          
                </SessionContext.Provider>
        );

        fireEvent.click(getByTestId("buttonTestAct"));

        expect(getByTestId("buttonTest")).toBeInTheDocument();
        
    });

    test("ButtonComp function must be called", () => {
        let mockFunction = jest.fn();
        render(<SessionContext.Provider value={{session, setSession}}>
                    <ButtonComp render={() => (
                        <button data-testid="buttonTestAct" onClick={() => mockFunction({ userName: "David", password: "123" })}>
                            Press
                        </button>
                    )} />          
                </SessionContext.Provider>
        );

        fireEvent.click(getByTestId("buttonTestAct"));

        expect(mockFunction).toBeCalledTimes(1);
        
    });

});