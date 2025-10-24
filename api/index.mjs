export default {
    async fetch(request) {
        const urls = new URL(request.url).searchParams.getAll('url')
        const requests = urls.map(multiplyRequest.bind(null, request))
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
    return {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        body: await getBody(response),
    }
}

function getBody(response) {
    switch (response.headers.get('content-type')) {
        case 'application/json':
            return response.json()
        default:
            return response.text()
    }
}
