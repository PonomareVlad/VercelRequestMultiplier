export default {
    fetch(request, response) {
        console.log(request.method, request.url.query, request.body)
        return Response.json({});
    },
};
