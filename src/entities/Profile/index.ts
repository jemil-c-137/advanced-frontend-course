import { profileReducer, profileActions } from './model/slice/profileSlice';
import { Profile, ProfileSchema } from './model/types/profile';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { updateProfileData } from './model/services/updateProfileData/updateProfileData';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { getProfileData } from './model/selectors/getprofileData';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading';
import { getProfileError } from './model/selectors/getProfileError';
import { getProfileReadonly } from './model/selectors/getProfileReadonly';
import { getProfileForm } from './model/selectors/getProfileForm';

export {
    profileReducer,
    profileActions,
    Profile,
    ProfileSchema,
    fetchProfileData,
    updateProfileData,
    ProfileCard,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileForm,
};
