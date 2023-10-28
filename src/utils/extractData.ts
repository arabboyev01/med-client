import { DataReturnsTypes, UsersDataProps } from '@/types'
import { fetchAddress } from '@/utils/location'

export const extract = async (originalData: UsersDataProps[]): Promise<DataReturnsTypes[]> => {
    return await Promise.all(originalData.map(async (item) => {
        const {id, user, location} = item;
        const {fullName, username} = user;
        const {latitude, longitude} = JSON.parse(location);
        const address = await fetchAddress(latitude, longitude);

        return {
            id,
            fullName,
            username,
            address,
        };
    }));

};