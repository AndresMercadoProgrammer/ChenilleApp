import { stock } from "../../Products/PRODUCTS.JS"

export const filterStockItems = (query) => {

    if (query.length > 2) {
        const resultsMatch = stock.filter((product) => {

            return product.name.toLowerCase().includes(query.toLowerCase());
        })
        return resultsMatch

    }

    return []





}
