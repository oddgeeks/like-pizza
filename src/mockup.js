
export const getIngredientsCount = ()=>{

   return {
    tomatoes: 0,
    mushrooms: 0,
    corns: 0,
    vegies: 0
    };
}
export const getIngredientsControl = () => {
    return [
        {label: 'Tomatoes', type: 'tomatoes'},
        {label: 'Mushrooms', type: 'mushrooms'},
        {label: 'Corns', type: 'corns'},
        {label: 'Vegies', type: 'vegies'},
    ];
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
    
export const getIngredientsPrices = () => {
    return {
        tomatoes: 0.5,
        mushrooms: 0.5,
        corns: 0.5,
        vegies: 0.5
    }
}