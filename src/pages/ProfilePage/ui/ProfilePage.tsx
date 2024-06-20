import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';

const reducer: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <div>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
