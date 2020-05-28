import {makeQueryString} from "./QueryParams";

export function getApiToken() {
    return process.env.REACT_APP_API_TOKEN;
}

async function request(method, url, params) {
    const queryString = makeQueryString(params);
    if(queryString !== '') {
        url = `${url}?${queryString}`;
    }
    const request = new Request(
        `https://api.staging.billy.dk/v2${url}`,
        {
            method,
            headers: {
                'X-Access-Token': getApiToken(),
                'Content-Type': 'application/json'
            }
        }
    );

    return await fetch(request).then(response => {
        return response.json()
            .then(json => {
                if (!response.ok) {
                    throw new Error(json.errorMessage);
                }
                return json;
            });
    })
}

export function getContacts(params) {
    params = {...params, include: 'contact.country:sideload'};
    return request('GET', '/contacts', params);
}
