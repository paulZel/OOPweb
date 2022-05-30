export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    DownloadItem(path) {
        const element = document.createElement('a');
        element.setAttribute('href', path);
        element.setAttribute('download', 'nice_picture');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element); //после того как ссылка отработала удаляем что бы не мешала
    }

    init() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.DownloadItem(this.path);
            }); 
        });
    }
}