const FOLLOW = `FOLLOW`;
const UNFOLLOW = `UNFOLLOW`;
const SET_USERS = `SET-USERS`;
const SET_CURRENT_PAGE = `SET-CURRENT-PAGE;`
const SET_TOTAL_USERS_COUNT =  `SET_TOTAL_USERS_COUNT`;
const TOGGLE_IS_FETCHING = `TOGGLE_IS_FETCHING`;

const initialState = {
    users: [ ],
    pageSize: 5 ,
    totalUsersCount:0,
    currentPage: 1,
    isFetching: false
};

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
        case SET_USERS:{
            return {
                ...state, users:action.users
            }
        }
            
            case SET_CURRENT_PAGE: {
                return {
                ...state, currentPage: action.currentPage
                }

            }
            
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
return {...state,  isFetching: action.isFetching}
        }
            
        default:
            return state;
    }
}

export const followUser = (id) => ({ type: FOLLOW, id });
export const unfollowUser = (id) => ({ type: UNFOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;