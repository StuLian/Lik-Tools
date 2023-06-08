/**
 * @description: 从对象中选取对应于给定键的键值对.使用Array.reduce()将筛选/选取的密钥转换回具有相应键值对的对象 (如果在 obj 中存在该键)。
 * @param {Array<T>} arr
 * @return {Array<T>} 定键的键值对
 */
const pick = (obj = {}, arr = []) => {
    return arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
}

/**
     * @description: 对象深拷贝
     * @param {*} obj
     * @return {*}
     */
const deepClone = (obj) => {
    if (!obj || typeof (obj) !== "object") return
    let newObj = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof (obj[key]) === "object" ? deepClone(obj[key]) : obj[key]
        }
    }
    return newObj
}

export default {
    pick,
    deepClone
}
