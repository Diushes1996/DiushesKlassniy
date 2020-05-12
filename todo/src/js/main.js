const useStorage = () => { //ф-ция сохранения данных в истории

    const name = 'list'; //название ключа, который хранится в истории браузера (localStorage)
    let list = []; //массив данных, которые хранятся в localStorage
    let currentIndex = 0;
    const hasItems = () => {
        return localStorage.getItem(name) !== null; //Данная ф-ция обращается в localStorage к ключу list
    }

    const setItems = () => {
        list = hasItems() ? JSON.parse(localStorage.getItem(name)) : []; //localStorage парсится в JSON
        currentIndex = list.length;
        console.log(list)
    }

    const getItems = () => {
        return list;                //данная ф-ция возвращает массив list
    }

    const addItem = item => {
        list.push(item);           //данная функция добавляет элемент в массив list и сохраняет его в истории браузера
        saveToStorage();
    }

    const saveToStorage = () => {
        localStorage.setItem(name, JSON.stringify(list)); //данная функция передает в localStorage ключ name со значением массива list, который записан в строку
    }

    return { setItems, addItem, getItems, currentIndex }
};

let { setItems, addItem, getItems, currentIndex } = useStorage();
setItems();

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('show-form').onclick = () => {                               //при нажатии на добавить задание открывает форму
        document.getElementsByClassName('item-form')[0].style.display = 'flex';
    }

    document.getElementById('cancel').onclick = () => {                                  //при нажатии на отмена очищает поля ввода и закрывает форму
        emptyFields();
        document.getElementsByClassName('item-form')[0].style.display = 'none';
    }

    document.getElementById('add-item').onclick = () => {                           //данная ф-ция при нажатии на "добавить" создает новый объект
        const newItem = {};          
        newItem.id = ++currentIndex;
        newItem.name = document.getElementById('name').value;                       //после чего поля ввода очищаются
        newItem.description = document.getElementById('description').value;         //затем новый элемент добавляется на страницу
        newItem.priority = document.getElementById('priority').value;               //после чего элемент добавляется в localStorage
        emptyFields();
        renderItem(newItem);

        addItem(newItem);
    }

    document.getElementById('tab__real').onclick = () => {                               // Переключение по вкладкам
        document.getElementsByClassName('tabcontent__real')[0].style.display = 'flex';
        document.getElementsByClassName('tabcontent__complete')[0].style.display = 'none';
        document.getElementsByClassName('tabcontent__delete')[0].style.display = 'none';
    }

    document.getElementById('tab__complete').onclick = () => {                               //Переключение по вкладкам
        document.getElementsByClassName('tabcontent__complete')[0].style.display = 'flex';
        document.getElementsByClassName('tabcontent__real')[0].style.display = 'none';
        document.getElementsByClassName('tabcontent__delete')[0].style.display = 'none';
    }

    document.getElementById('tab__delete').onclick = () => {                               //Переключение по вкладкам
        document.getElementsByClassName('tabcontent__delete')[0].style.display = 'flex';
        document.getElementsByClassName('tabcontent__real')[0].style.display = 'none';
        document.getElementsByClassName('tabcontent__complete')[0].style.display = 'none';
    }

    const emptyFields = () => {                                    //данная ф-ция очищает поля ввода
        document.getElementById('name').value = '';
        document.getElementById('description').value = '';
        document.getElementById('priority').value = '';
    }

    const renderItems = () => {
        getItems().map((item, index) => renderItem(item, index));
    }

    const renderItem = (item, index) => {                                       //добавляем строку таблицы с кнопками управления задачами

        let el = document.createElement('tr');
        el.innerText = 'Задание:' + ' ' + item.name;
        let desc = document.createElement('p');
        desc.innerText = 'Описание:' + ' ' + item.description;
        let pri = document.createElement('p');
        pri.innerText = 'Приоритет:' +' ' + item.priority;
        let buttonEdit = document.createElement('button');
        buttonEdit.className = 'button__edit';
        buttonEdit.innerText = 'Редактировать';
        let buttonComplete = document.createElement('button');
        buttonComplete.className = 'button__complete';
        buttonComplete.innerText = 'Выполнено';
        let buttonDelete = document.createElement('button');
        buttonDelete.className = 'button__delete';
        buttonDelete.innerText = 'Удалить';

        document.getElementById('work__real').appendChild(el);

        el.appendChild(desc);
        el.appendChild(pri);
        el.appendChild(buttonEdit);
        el.appendChild(buttonComplete);
        el.appendChild(buttonDelete);

        document.getElementsByClassName( 'button__delete' ).onclick = () => {
            
            console.log(123);
        }
        

        /*deleteElement = document.querySelector('.work__real');
        buttonDelete.addEventListener("click", function(){
            deleteElement.removeChild(el);
        })*/
    }

    renderItems();

});
