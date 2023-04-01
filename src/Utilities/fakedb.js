// use local storage to manage cart data
const addToDb = id => {
    let bookmarkList = getBookmarkList();
    // add quantity
    const quantity = bookmarkList[id];
    if (!quantity) {
        bookmarkList[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        bookmarkList[id] = newQuantity;
    }
    localStorage.setItem('bookmark', JSON.stringify(bookmarkList));
}

const getBookmarkList = () => {
    let bookmarkList = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('bookmark');
    if (storedCart) {
        bookmarkList = JSON.parse(storedCart);
    }
    return bookmarkList;
}



export {
    addToDb,
    getBookmarkList
}
