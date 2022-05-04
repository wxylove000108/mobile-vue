import request from "@/utils/request";

export function getFindBannerList(data) {
    return request({
        method: 'POST',
        url: '/banner',
        data
    })
}

export function getRecommendList(data) {
    return request({
        method: 'POST',
        url: '/personalized',
        data
    })
}