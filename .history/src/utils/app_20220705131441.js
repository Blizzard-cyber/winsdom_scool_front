import cookie from "cookie_js";

//cookies名称
const adminToKen = "admin_toKen";

export function getToKen(){
    return cookie.get(adminToKen);
}

export function setToKen(token){
    return cookie.set(adminToKen,token);
}

export function removeToKen(){
    return cookie.remove(adminToKen);
}
