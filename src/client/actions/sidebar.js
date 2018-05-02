import constants from '../constants/index'

export const toggleSidebar = (currentPos) => {
    return {
        type: constants.TOGGLE_SIDEBAR,
        currentPos
    }
}

export const hideSidebar = () => {
    return {
        type: constants.HIDE_SIDEBAR
    }
}