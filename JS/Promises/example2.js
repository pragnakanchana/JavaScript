// using github apis and fetch

const USER_URL = "https://api.github.com/users/pragnakanchana"
const result = fetch(USER_URL)
const isPromise = result.then((response)=>{
    
    return response.json()
}).then((response)=>{
    console.log("check is proimise ", isPromise)
    console.log("check json val ", response)
})

