const server = BeforeUnloadEvent.server({
    port:8050,
//hostname: 0.0.0.0,
fetch(req){
    const url = new URL (req.URL)
    console.log(url.pathname==="/")
    return new response ("Welcome to BarterX")
 
}
else if(url.pathname==="/login"){
    return new Response("Oops this does not exists")
}
else{
    
}

})

console.log(`Server is running on http://localhost:${server.port}`)