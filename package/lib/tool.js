import array from "./array"
import browser from "./browser"
import date from "./date"
import number from "./number"
import object from "./object"
import string from "./string"

export const useTools = () => {
    return {
        ...array,
        ...browser,
        ...date,
        ...number,
        ...object,
        ...string
    }
}
