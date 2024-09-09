import { userReducer, userActions } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import { UserSchema, User } from './model/types/user';
import { isUserAdmin, isUserManager } from './model/selectors/getUserRoles/getUserRoles';

export {
    userReducer,
    userActions,
    getUserAuthData,
    getUserInited,
    isUserAdmin,
    isUserManager,
};

export type {
    User,
    UserSchema,
};

export { UserRole } from './model/constants/user';
