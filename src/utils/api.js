import axios from 'axios';
import { API_URL } from './constants';

const getAll = async () => {
    try {
        const { data } = await axios.request(API_URL);
        return data;
    } catch (error) {
        console.log(`api::request() - ${error}`);
        return [];
    }
}

const filterByGender = (persons, gender) => persons.filter((person) => person.gender === gender);

const filterByPetType = (pets, type) => (pets || []).filter((pet) => pet.type === type);

const getPets = async (gender, type) => {
    const persons = await getAll();

    console.log({ persons });
    console.log({ data: filterByGender(persons, gender) });

    return filterByGender(persons, gender)
        .flatMap(({ pets }) =>
            filterByPetType(pets, type).map(({ name }) => name)
        )
        .sort();
};

export {
    getPets,
    getAll,
    filterByGender,
    filterByPetType
};
