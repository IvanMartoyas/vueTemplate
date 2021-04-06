import http from 'axios';
import error from '../Classes/Error'

let Error = new error();



const axiosInstanse = http.create({
    baseURL: "http://localhost:4000/api/"
});

// парсинг query параметров в обьект вспомогательный метод для parsUrl
function getJsonFromUrl(url) {
    if(!url) url = location.search;
    var query = url.substr(1);
    var result = {};
    query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });

    return result;
}


// парсит url возвращая обьект
function parsUrl ( urlStr ) {

// const url = new URL('http://vk.com/api/news/getpost/?name=ivan&firsname=mart');

    const url = new URL(urlStr);

    let urlData = {
        host: url.hostname,
        host_origin: url.origin,
        href: url.href,
        pathname: {...url.pathname.split("/").filter(element => element !== '')},
        querys: getJsonFromUrl(url.search),
        heash: url.heash,
    }
    return urlData;
}

/**
 * fetch type headers
 *  Class	            Default Content-Type
    String	            text/plain;charset=UTF-8
    URLSearchParams	    application/x-www-form-urlencoded;charset=UTF-8
    FormData	        multipart/form-data
 */
class QueryHttp {
    // генерация строки запроса к серверу очень удобно для клиента и последующий запрос
    // стандартный запрос по работе с json data
    host;
    constructor () {
        this.host = "http://localhost:4000/api"
    }
    formData(controller, method, body) {
        let url = "";

        url = this.host+"/"+controller+"/"+method; 
        if(body != '') {
            fetch(url, {
                method: query_type,
                headers: headers,
                body: (typeof body != "object")? body : JSON.stringify(body)
            }).then((res)=>{
                res => res.json()
            }).then((resp)=>{
                return console.log("resp ", resp)
            })
            .catch((err)=>{
                return Error.ERROR_FETCH(err);
            })
        } else {
            fetch(url, {
                method: query_type,
                headers: headers,
                body: (typeof body != "object")? body : JSON.stringify(body)
            }).then((res)=>{
                return console.log("res ", res => res.json())
            })
            .catch((err)=>{
                return Error.ERROR_FETCH(err);
            })
        }
    }
    async createUrl(headers, body, controller, method, query, hesh) {   
        let url = "";
        /*
            if(query != "" && hesh != "") {
                url = host+"/"+controller+"/"+method+"?"+query+"#"+hesh;
            }
            if(query != "" && hesh == "") {
                url = host+"/"+controller+"/"+method+"?"+query;
            }
            if(query == "" && hesh != "") {
                url = host+"/"+controller+"/"+method+"#"+hesh;
            }
            if(query == "" && hesh == "") {
                url = host+"/"+controller+"/"+method; 
            }
        */

        url = this.host+"/"+controller+"/"+method; 
        
        console.log('typeof body', typeof body)
        console.log('url ', url)
        console.log('method ', body ? 'POST' : 'GET',)
        console.log('body have ', JSON.stringify(body) )

        let result;
        result = await fetch(url, {
            method: body ? 'POST' : 'GET',
            headers: {'Content-Type':'application/json'},
            body: (typeof body == "string")? body : JSON.stringify(body),

        })

        return result.json();
    };

}
  
export default QueryHttp;