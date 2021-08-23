import axios from 'axios'

export const getAll = async () => {
    const response = await axios.get('http://localhost:4000/productos')
    return response.data
}
export const add = async (product) => {
    const response = await axios.post('http://localhost:4000/productos',
        product,
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
    return response.data
}
export const edit = async (product) => {
    const response = await axios.put(`http://localhost:4000/productos/${product.id}`,
        product,
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
    return response.data
}

export const delet = async (product) => {
    // aqui la api no devuele nada
    await axios.delete(`http://localhost:4000/productos/${product.id}`,
        product,
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
}