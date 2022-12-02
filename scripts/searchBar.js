import { navbar } from "../utility/navbar.js";
document.getElementById("nav").innerHTML = navbar

// var IMGUR_CLIENT_ID = "dfdece23d28e6a2"
// var IMGUR_CLIENT_SECRET = "ec2913024d089442d62378f396e0bee940a5e75e"
const baseUrl = `https://api.imgur.com/3/`
const token = "39ec7c7bd39c235ef4ad8e0e9c15d5b8fce94667"
// getImgurData() https://api.imgur.com/3/account/imgur/images/0.json?perPage=42&page=6


const debounce = (fn, delay)=>{
    let timer = null;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, delay);
    }
}

async function getImgurData() {
    let searchedVal = inputBox.value
    try {
        const res = await fetch(`${baseUrl}gallery/search?q=${searchedVal}&perPage=${10}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const data = await res.json();
        // console.log(data, " data ");
        showDataInDropBox(data.data)
    } catch (error) {
        console.log(error, " error");
    }
}

let searchDropDownBox = document.getElementById("searchDropDownBox")
function showDataInDropBox(data) {
    console.log(data, " data ");
    searchDropDownBox.innerHTML = "";
    data.map((item, index)=>{
        // console.log(item, " item ", index);
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerHTML = item.title
        div.append(p)
        searchDropDownBox.append(div);
    })
}

let inputBox = document.getElementById("inputBox")
console.log(inputBox, " inputBox");
if(inputBox)
inputBox.addEventListener('input', debounce(getImgurData, 300))
