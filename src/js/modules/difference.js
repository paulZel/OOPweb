export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
        } catch(e) {

        }

        //this.items = items;
        //уже не нужно this.items = items; //нам будет необходимо получать items с двух столбиков
        this.oldCounter = 0;
        this.newCounter = 0;
    }

    /* не работает как надо
    //создаем метод каторый будет заниматся присвоением обработчиков событий
    bindTriggers(container, items, counter) {
        container.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length -2) {
                items[counter].style.display = 'flex';
                counter++;
            } else {//если мы дошли до последний карточки каторую нужну показати мы ее показываем и удаляем последний блок
                items[counter].style.display = 'flex';
                items[items.length - 1].remove();
            }
        });
    }
    */
    bindTriggers() {
        this.oldOfficer.querySelector('.plus').addEventListener('click', () => {
            if (this.oldCounter !== this.oldItems.length -2) {
                this.oldItems[this.oldCounter].style.display = 'flex';
                this.oldCounter++;
            } else {//если мы дошли до последний карточки каторую нужну показати мы ее показываем и удаляем последний блок
                this.oldItems[this.oldCounter].style.display = 'flex';
                this.oldItems[this.oldItems.length - 1].remove();
            }
        });

        this.newOfficer.querySelector('.plus').addEventListener('click', () => {
            if (this.newCounter !== this.newItems.length -2) {
                this.newItems[this.newCounter].style.display = 'flex';
                this.newCounter++;
            } else {//если мы дошли до последний карточки каторую нужну показати мы ее показываем и удаляем последний блок
                this.newItems[this.newCounter].style.display = 'flex';
                this.newItems[this.newItems.length - 1].remove();
            }
        });
    }

    /*
    hideItems(items) {
        items.forEach((item, i, arr) => {
            if (i !== arr.length - 1) { //этот елемент не является последним в этом массиве
                item.style.display = 'none';
            }
        });
    }
    */
    hideItems() {
        this.oldItems.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });

        this.newItems.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }


    init() {
        try{
            /*
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);
        this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
        this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
        */

        this.hideItems();
        this.bindTriggers();

        }catch(e) {}
    }
}