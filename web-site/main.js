//Увеличение изображения при клике  detailwaybills.html
var bigsize = "450"; //Размер большой картинки
var smallsize = "250"; //Размер маленькой картинки
function changeSizeImage(im) {
    if (im.height == bigsize) im.height = smallsize;
    else im.height = bigsize;
}

//Выпадающие содержание index.html
window.onload = function() {
        var acc = document.getElementsByClassName(".accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panell = this.nextElementSibling;
                if (panell.style.maxHeight) {
                    panell.style.maxHeight = null;
                } else {
                    panell.style.maxHeight = panell.scrollHeight + "px";
                }
            });
        }
    }
    //добавить событие наведение tr
window.onload = function() {
    var mas = document.querySelectorAll("tr");
    for (var i = 0; i < mas.length; i++) {
        rowhover(mas[i]);
    }

    function rowhover(row) {
        row.addEventListener("mouseover", function() {
            this.style.backgroundColor = "silver";
        });

        row.addEventListener("mouseout", function() {
            this.style.backgroundColor = "whitesmoke";
        });
    }

}