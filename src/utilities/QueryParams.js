export function updateRouteParams(history, params) {
    const queryString = new URLSearchParams(params).toString()
    history.replace(`?${queryString}`);
}