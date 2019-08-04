(function () {
    const paramName = "q";

    const url = new URL(location);
    const search = url.searchParams.get(paramName);

    if (search === null || search.toLowerCase().indexOf("danergy") !== -1) {
        return;
    }

    url.searchParams.set(paramName, search + " Danergy");
    location.replace(url.href);
}());
