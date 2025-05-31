import { stock } from "../../Products/PRODUCTS.JS"

export const filterStockItems = (valueInSearchBar) => {


    const resultsMatch = stock.filter((product) => {

        return product.name.toLowerCase().includes(valueInSearchBar.toLowerCase());
    })
    console.log(resultsMatch);

    return resultsMatch;

}
