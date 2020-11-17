const initialState = {
    menus: [
        { name: 'Профиль', url: '/profile' },
        { name: 'Сообщения', url: '/dialogs' },
        { name: 'Музыка', url: '/music' },
        { name: 'Новости', url: '/news' },
        { name: 'Настройки', url: '/settings' }
    ]
}

const sideBarReducer = (state = initialState , action) => {
    return state;
}
export default sideBarReducer;