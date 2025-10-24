export default {
    fetch(request, response) {
        console.log(request.method, request.query, request.body, request.headers)
        console.log(request)
        console.log(response)
        return Response.json({});
    },
};
