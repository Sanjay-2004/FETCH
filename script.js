fetch('https://reqres.in/api/users/')
    .then(res=>{
        console.log(res.status)
        console.log(res.ok)
        console.log(res.headers)
        return res.json()
    })
    .then(d=>{
        console.log(typeof(d))
        console.log(d)
    
    })
    .catch(error=>console.log("404"))
