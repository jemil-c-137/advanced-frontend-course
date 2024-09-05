import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { EditableProfileCardReducer } from 'features/EditableProfileCard/model/slices/EditableProfileCardSlice';
import { componentRender } from 'shared/lib/tests/componentRender';
import { api } from 'shared/api/api';
import { EditableProfileCard } from './EditableProfileCard';
import '@testing-library/jest-dom';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 465,
    currency: Currency.USD,
    country: Country.Australia,
    city: 'Moscow',
    username: 'admin213',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
            },
        },
    },
    asyncReducers: {
        profile: EditableProfileCardReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('read only mode should be switched', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('after cancel edit values set to initial', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('admin');
    });

    test('Error should appear', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Text')).toBeInTheDocument();
    });

    test('should make request on valid form sent', async () => {
        const mockRequest = jest.spyOn(api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockRequest).toHaveBeenCalled();
    });
});
