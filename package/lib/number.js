/**
 * @description: 匹配正整数
 * @param {number} val 传入一个数字
 * @return {boolean} true 为正整数
 * @example isNegativeNum(9) => true
 */
const isPositiveNum = (val) => {
    return /^[1-9]d*$/.test(val.toString());
};

/**
 * @description: 匹配负整数
 * @param {number} val 传入一个数字
 * @return {boolean} true 为负整数
 * @example isNegativeNum(-9) => true
 */
const isNegativeNum = (val) => {
    return /^-[1-9]d*$/.test(val.toString());
};

/**
 * @description: 匹配整数
 * @param {number} val 传入一个数字
 * @return {boolean} true 整数
 * @example isInteger(2.2) => false
 */
const isInteger = (val) => {
    return /^(-|\+)?\d+$/.test(val.toString());
};

/**
 * @description: 匹配非负浮点数
 * @param {number} val 传入一个数字
 * @return {boolean}
 * @example isNotNegativeFloatNum(2.2) => true
 */
const isNotNegativeFloatNum = (val) => {
    return /^\d+(\.\d+)?$/.test(val.toString());
};

/**
 * @description: 金钱格式化，三位加逗号
 * @param {number} val 传入一个数字
 * @return {boolean}
 * @example isNotNegativeFloatNum(2.2) => true
 */
const formatMoney = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * @description:验证小数
 * @param {string} value
 * @return {boolean} 验证通过是否
 * @example isSubnetMask ('133@qq.com') => true
 */
const isDecimal = (value) => /^\d+\.\d+$/g.test(value);

export default {
    isPositiveNum,
    isNegativeNum,
    isInteger,
    isNotNegativeFloatNum,
    formatMoney,
    isDecimal
}
