import axios from "axios"

const urlBase = "https://api.fake.rest/6ecdfc96-714b-488b-a8bd-7908883775ab";

export const useAPI = () => {

    const onSendRequest = async({ body = {}, url = "", method = "" }) => {

        if( !url || !method ) return;

        try {

            const response = await axios({
                data: body,
                url: `${urlBase}${url}`,
                method
            });

            return response.data;
            
        } catch (error) {
            console.log(error);
        };

    };

    return onSendRequest;
};
