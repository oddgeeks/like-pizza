
export const getIngredients = ()=>{

   return {
    tomatoes: 0,
    mushrooms: 0,
    corns: 0,
    vegies: 0
    };
}

export const fetchDoughTypes = () => {
    return [{
        id: 1,
        name: 'Thin',
        description: 'Thin and crusty pizza dough'
        },
        {
        id: 2,
        name: 'Thick',
        description: 'Thick and soft pizza dough'
        }];
    };