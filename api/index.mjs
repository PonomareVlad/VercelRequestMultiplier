export default {
    fetch(request, response) {
        const url = new URL(request.url)
        console.log(request.method, url.searchParams.getAll('url'), request.body)
        return Response.json({});
    },
};
