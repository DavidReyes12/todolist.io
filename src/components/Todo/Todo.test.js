import { render, fireEvent, screen } from '@testing-library/react';

import { SessionContext } from "../../config/State";
import axios from "axios";
import App from '../../App';

const { getByTestId } = screen;

const session = {
    userName: "David Reyes",
    id: 1,
    welcomeMsg: ""
};

const setSession = () => {};

describe("Todo test", () => {

    beforeEach(() => {
        jest.mock("axios");
        render(<SessionContext.Provider value={{session, setSession}}>
                    <App />          
                </SessionContext.Provider>
        );
    });

    test("Todo must be render", () => {

        expect(getByTestId("TodoTest")).toBeInTheDocument();
        
    });

    test("addTaskTest must have Comer as value", () => {

        fireEvent.change(getByTestId("addTaskTest"), {
            target: { value: "Comer" },
        });

        expect(getByTestId("addTaskTest")).toHaveValue("Comer");
        
    });

    test("Spin must be render", () => {

        expect(getByTestId("spinTest")).toBeInTheDocument();
        
    });

    test("Tasklist must be render", async() => {

        fireEvent.change(getByTestId("addTaskTest"), {
            target: { value: "Comer" },
        });

        fireEvent.click(getByTestId("addTaskButtonTest"));

        axios.post = await jest.fn()
            .mockImplementationOnce(() => Promise.resolve({ data: { name: "comer", id: 1, done: false } }));

        expect(getByTestId("taskListTest")).toBeInTheDocument();
        
    });

});