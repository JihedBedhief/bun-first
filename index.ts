import figlet from "figlet";

const server = Bun.serve({
    port :3000,
    fetch(request) {
        const url = new URL(request.url);
        if(url.pathname===("/")){
            const body = figlet.textSync("ahla byk si bun ")
            return new Response(body)
        }
        if(url.pathname===("/about")){
            
            return new Response("about me ")
        }
        
        return new Response("404 !")
    },
})
console.log(`Listening on http://localhost:${server.port} ...`);