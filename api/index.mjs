export default {
    async fetch(request) {
        const urls = new URL(request.url).searchParams.getAll('url')
        const requests = urls.map(multiplyRequest.bind(request))
        const response = await Promise.allSettled(requests)
        console.log(urls, response)
        return Response.json(response)
    },
}

async function multiplyRequest(request, url) {
    const init = {
        body: request.body,
        method: request.method,
        headers: request.headers,
    }
    const response = await fetch(url, init)
    return { ...response, body: await response.text() }
}
