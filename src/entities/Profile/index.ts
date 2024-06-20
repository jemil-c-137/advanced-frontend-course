import { profileReducer, profileActions } from './model/slice/profileSlice';
import { Profile, ProfileSchema } from './model/types/profile';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
    profileReducer, profileActions, Profile, ProfileSchema, fetchProfileData, ProfileCard,
};
