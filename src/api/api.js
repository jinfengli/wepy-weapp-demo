
const HOST_URL = 'https://www.v2ex.com/api/'
const LATEST_TOPIC = 'topics/latest.json'   //  获取最新的主题

// 获取话题信息  :id | (:username | :node_id | :node_name)
const GET_TOPICS = 'topics/show.json';

// 获取回复 :topic_id (:page , :page_size)?
const GET_REPLIES = 'replies/show.json';


function getTopicInfo(o) {
    console.log("the getTopicInfo request params is: " + _obj2uri(o));
    return HOST_URL + GET_TOPICS + '?' + _obj2uri(o);
}

function getDetailReplies(o) {

    console.log("the getDetailReplies request params is: " + _obj2uri(o));
    return HOST_URL + GET_REPLIES + '?' + _obj2uri(o);
}

function getLatestTopic(o) {
    console.log("the getLatestTopic params is: " + _obj2uri(o));
    return HOST_URL + LATEST_TOPIC + '?' + _obj2uri(o);
}

/**
 * 拼接参数部分的url
 * @param {*} obj 
 */
function _obj2uri(obj) {
    return Object.keys(obj).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
    }).join('&');
}

module.exports = {
    // getAllNode: _getAllNode,
    // getNodeInfo: _getNodeInfo,
    // getHotestTopic: _getHotestTopic,
    getLatestTopic: getLatestTopic,
    getTopicInfo: getTopicInfo,
    getDetailReplies: getDetailReplies
};



