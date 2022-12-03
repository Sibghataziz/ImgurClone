import { baseUrl, getdata } from "../utility/utility.js"

let data = []
let page = 1
let window  ='all'
let sort = 'top'
let subreddit = "pics"

const startLanding =async ()=>{
    const newData =await getdata(`${baseUrl}/gallery/hot`);
    console.log(newData)
}

startLanding()