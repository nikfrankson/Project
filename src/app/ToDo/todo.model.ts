
    interface IToDo {
         day?: string;
         time?: string;
         task?: string;
         editing?: boolean;
    }
    export class ToDo {

        public day?: string;
        public time?: string;
        public task?: string;
        public editing?: boolean;

        constructor(todo: IToDo) {
            todo.editing = this.setState(todo);
            Object.assign(this, todo);

        }

        setState(todo: IToDo) {
            if (todo == null || Object.keys(todo).length === 0 ) {
                return true;
            }

            let editing = false;
            Object.keys(todo).forEach((key: string) => {
                console.log('from setState...', todo [key]);
                if (todo [key] == null) {
                   editing = true;
                }
            });
            return editing;
        }
    }
