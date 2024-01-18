export const countTotalFeedback = (totalObject) => {

    let total = 0;
    
    for (const key in totalObject) {
        
        total += totalObject[key];

    }

    return total;
}