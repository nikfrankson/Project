

export class LocalStorageService<T> {
    constructor(private key: string) {

    }

    saveItemsToLocalStorage(todos: Array<T> | T) {
        const savedToDos = localStorage.setItem(this.key, JSON.stringify(todos));
        console.log('from saveItemsToLocalStorage savedToDos: ', savedToDos);
        return savedToDos;
    }
    getItemsFromLocalStorage(key?: string) {
        let savedItems;
        if (key != null) {
            const items = null;
            savedItems = JSON.parse(localStorage.getItem(key));
            console.log('from getItemFromLocalStorage key: ', key, 'savedItems: ', savedItems);
        } else {
            savedItems = JSON.parse(localStorage.getItem(this.key));

        }
        return savedItems;
    }

    clearItemFromLocalStorage(key?: string) {
        if (key != null) {
            const items = null;
            localStorage.setItem(key, JSON.stringify(items));
        } else {
            localStorage.clear();
        }
    }
}
