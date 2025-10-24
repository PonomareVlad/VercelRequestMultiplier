export default {
    fetch({body, query, cookies, headers}) {
        return Response.json({
            body, query, cookies, headers, env: process.env, versions: process.versions
        });
    },
};
