export const create = data => {
    return{
        type : 'create',
        payload : data
    }
}

//dispatch(create({FullName : ''}))