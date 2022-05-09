import mockAxios from 'axios';
import { useAPI } from "./useAPI";


describe("useAPI custom hook test", () => {

    test("useAPI return data", async() => {
        // this test didn't work - mockAxios return undefined i don't know why
        const onSendRequest = useAPI();

        mockAxios.get.mockImplementationOnce(() => Promise.resolve({
            data: [
                {
                    name: "Comer",
                    id: 1
                }
            ]
        }))

        const response = await onSendRequest({ method: "get", url: "/todolist/getList" });
        
        expect(response).toEqual([
            {
                name: "Comer",
                id: 1
            }
        ]);
    });

    test("useAPI return Error", async() => {
        const onSendRequest = useAPI();

        const errorMessage = 'Network Error';

        mockAxios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );

        await expect(onSendRequest({ method: "get", url: "/todolist", body: {} })).toEqual(Promise.reject(new Error(errorMessage)));

    });

});