import * as deepEqual from 'deep-equal'

function arrayContainsObject(array: any[], obj: any) {
    if (array.findIndex((item) => {
        return deepEqual(item, obj)
    }) !== -1) {
        return true
    }
    return false
}

export default arrayContainsObject
