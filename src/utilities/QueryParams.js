export function updateRouteParams(history, params) {
    const queryString = makeQueryString(params);
    history.replace(`?${queryString}`);
}

export function makeQueryString(params) {
    return new URLSearchParams(params).toString();
}