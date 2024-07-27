import { userReducer, userActions } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import { UserSchema, User } from './model/types/user';

export {
    userReducer, userActions, User, UserSchema, getUserAuthData, getUserInited,
};
