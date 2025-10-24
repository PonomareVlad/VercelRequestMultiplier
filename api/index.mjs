export default {
    fetch(request, response) {
        const url = new URL(request.url)
        console.log(request.method, Object.fromEntries(url.searchParams.entries()), request.body)
        return Response.json({});
    },
};
