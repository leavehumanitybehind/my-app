const FOLLOW = `FOLLOW`;
const UNFOLLOW = `UNFOLLOW`;
const SET_USERS = `SET-USERS`;

const initialState = {
    users: [
        { followed: true, id: '1', name: 'Костя', location: { country: 'Россия', city: 'Москва' }, description: '' },
        { followed: true, id: '2', name: 'Катя', location: { country: 'Россия', city: 'СПБ' }, description: '' },
        { followed: false, id: '3', name: 'Коля', location: { country: 'Украина', city: 'Киев' }, description: '' },
        { followed: false, id: '4', name: 'Кеша', location: { country: 'Австралия', city: 'Мельбурн' }, description: '' },
        { followed: true, id: '5', name: 'Ксюша', location: { country: 'Италия', city: 'Рим' }, description: '' },
        { followed: true, id: '6', name: 'Кира', location: { country: 'Россия', city: 'Самара' }, description: '' },
    ]

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            }
            return stateCopy;
        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            }
            return stateCopy;
        }

        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followUser = (id) => ({ type: FOLLOW, id });
export const unfollowUser = (id) => ({ type: UNFOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });

export default usersReducer;