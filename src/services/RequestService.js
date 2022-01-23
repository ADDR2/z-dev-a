const {
    REACT_APP_BACKEND_PROTOCOL,
    REACT_APP_BACKEND_PORT,
    REACT_APP_BACKEND_DOMAIN
} = process.env;
const BACKEND_PORT = REACT_APP_BACKEND_PORT ? `:${REACT_APP_BACKEND_PORT}` : '';
const BACKEND_PREFIX_URL = `${REACT_APP_BACKEND_PROTOCOL}://${REACT_APP_BACKEND_DOMAIN}${BACKEND_PORT}`;

class RequestService {
    static getRequestFromCache(url) {
        const rawResult = localStorage.getItem(url);

        if (!rawResult) return null;

        try {
            return JSON.parse(rawResult);
        } catch(error) {
            console.warn(error);
            return null;
        }
    }

    static cacheRequest(url = '', response) {
        try {
            const stringifiedData = JSON.stringify({
                response,
                requestTimestamp: +new Date()
            });

            localStorage.setItem(url, stringifiedData);
        } catch(error) {
            console.warn(error);
        }
    }

    static get(endpoint = '', options = {}) {
        const url = `${BACKEND_PREFIX_URL}${endpoint}`;
        const cachedResponse = RequestService.getRequestFromCache(url);

        if (cachedResponse) {
            const { response, requestTimestamp } = cachedResponse;
            const requestOlderThanADay = (requestTimestamp + (24 * 60 * 60 * 1000)) <= (+new Date());

            if (!requestOlderThanADay) return Promise.resolve(response);
        }

        const request = fetch(
            url,
            { ...options }
        );

        return request
            .then(result => {
                if (result.status >= 400) {
                    console.warn(result);
                    throw new Error(`${result.url} responded with ${result.status}`);
                }
                return result.json();
            })
            .then(response => {
                RequestService.cacheRequest(url, response);
                return response;
            })
        ;
    }
}

export default RequestService;