import { requestGet, requestPost } from "./request";

export const $API = {
    goodsInfo   : 'dashboard/AdcpcGoodsGetStatisticalData',
    goodsList   : 'dashboard/AdcpcGoodsGetGnrlCondition',
    calendarList: 'dashboard/getCalendarGnrlCondition',
    calendarInfo: 'dashboard/addCalendargetStatisticalData',
    postList    : 'dashboard/getCpcPostList',
    postInfo    : 'dashboard/getPostStatisticalData',
};


// 获取商品详情
export const goodsInfoData = async (productID, startDate, endDate) => {
    let data = Object.assign({}, {
        action: 'getStatisticalData',
        type  : 1,
    }, {
        productID,
        startDate,
        endDate
    });
    return await requestPost($API.goodsInfo, data);
}

// 获取商品 列表
export const goodsListData = async () => {
    let data = {
        action  : 'getGnrlCondition',
        gnrlType: 1
    };
    return await requestGet($API.goodsList, data);
};

// 获取日历 列表
export const calendarListData = async () => {
    return await requestGet($API.calendarList, {
        action  : 'getGnrlCondition',
        gnrlType: 2
    })
};

// 获取日历 详细
export const calendarInfoData = async (productID, startDate, endDate) => {
    let data = Object.assign({}, {
        action: 'getStatisticalData',
        type  : 2,
    }, {
        productID,
        startDate,
        endDate
    });
    return await requestPost($API.calendarInfo, data);
};


// 获取文章 详细
export const postInfoData = async (productID, startDate, endDate) => {
    let data = Object.assign({}, {
        action: 'getStatisticalData',
        type  : 4,
    }, {
        productID,
        startDate,
        endDate
    })
    return await requestPost($API.postInfo, data);
}

// 获取文章 列表
export const postListData = async () => {
    return await requestGet($API.postList, {
        action   : 'getCpcPostList',
        page     : 1,
        page_size: 10000,
    })
}
