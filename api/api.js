function Api{
    fetch("http://localhost:2222/user").then((response)=>{
        response.json()
    })
}