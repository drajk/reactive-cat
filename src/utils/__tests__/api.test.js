import axios from 'axios';
import { getPets, filterByGender, filterByPetType } from '../api';
import mock from './mock';

jest.mock('axios');

describe('utils > api', () => {
    // TODO: skipping it now as it fails with 'flatMap()' not found. Requires changes in jest config
    it.skip('return a flat list of pets', async () => {
        axios.request.mockResolvedValue({ data: mock });
        const expected = ['Cookie'];
        const actual = await getPets('Male', 'Cat');
        expect(actual).toEqual(expected);
    })

    it('filters list by gender', () => {
        expect(filterByGender(mock, 'Male').length).toEqual(2);
        expect(filterByGender(mock, 'Female').length).toEqual(0);
    });

    it('filters list by pet type', () => {
        const { pets } = mock[1];
        expect(filterByPetType(pets, 'Cat').length).toEqual(0);
        expect(filterByPetType(pets, 'Dog').length).toEqual(2);
    });
});
