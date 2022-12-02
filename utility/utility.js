const baseUrl = `https://api.imgur.com/3`
const token = '2e299b9f2ce5bc47011e59988aba1700ae88b758'
const obj = {
    headers : {
        Authorization : `Bearer ${token}`,
        'Content-type': 'application/json'
    }
}

async function getdata(url){
    try {
        const res = await fetch(url,obj);
        const data = await res.json();
        // console.log(data);
        return data.data;
      } catch (error) {
        console.log(error);
      }
}

async function postData(url,datas){
    try {
        const res = await fetch(url,{
            method: 'POST',
            body:datas,
            headers:obj.headers
        })
        const data = await res.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

async function deleteData(url){
    try {
        const res = await fetch(url,{
            method: 'DELETE',
            headers:obj.headers
        })
        // console.log(res)
        const data = await res.json()
        // console.log(data)
        return data 
    } catch (error) {
        console.log(error)
    }
}

async function patchData(url,datas){
    try {

        const res = await fetch(url,{
            method: 'PATCH',
            body:datas,
            headers:obj.headers
        })
        const data = await res.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export {baseUrl, getdata, postData, deleteData, patchData}