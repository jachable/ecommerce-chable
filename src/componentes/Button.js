const getName = (name = 'Joseph', lastname = 'khan') => {
    console.log(`${name}` `${lastname}`);
};

getName('Christian','Chavez');
getName();

const numbers = [1,2,3,4,5];
const numbers2 = [6,7,8,9];

const numbers3= [...numbers, ...numbers2];