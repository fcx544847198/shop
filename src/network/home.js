import { request } from "./request";

export function gethomemultidata(){
    return request({
        url:'/home/multidata'
    })
}