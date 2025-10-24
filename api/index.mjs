export default {
    fetch(request, response) {
        console.log(request.method, new URL(request.url), request.body)
        return Response.json({});
    },
};
