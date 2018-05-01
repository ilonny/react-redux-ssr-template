import constants from '../constants/index'

export const toggleSidebar = (currentPos) => {
    console.log('toggle sidebar ACTION')
    return {
        type: constants.TOGGLE_SIDEBAR,
        currentPos
    }
}