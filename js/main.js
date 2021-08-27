$(document).ready(function () {
    var currentFloor = 2; // Переменная с текущим этажем
    var counterUp = $(".counter-up"); // Кнопка увеличения этажа
    var counterDown = $(".counter-down"); // Кнопка уменьшения этажа
    var floorPath = $(".home-image path"); // Каждый отдельный этаж в SVG
    var modal = $(".modal"); // Модальное окно
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");
    var menuButton = $(".menu-button");
    var navbarPanel = $(".navbar-panel");

    menuButton.on("click", function(){
        navbarPanel.toggle("fast");
    })

    // Функция про наведении мышкой на этаж
    floorPath.on("mouseover", function () { 
    floorPath.removeClass("current-floor");  // Удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // Получаем значение текущего этажа
    $(".counter").text(currentFloor); // Записываем значение этажа в счетчик справа
    });

    floorPath.on("click", toggleModal); // При клике на этаж - вызвать окно
    
    modalCloseButton.on("click", toggleModal); // При клике на крестик - закрыть окно

    viewFlatsButton.on("click", toggleModal); // При клике на кнопку "Показать квартиры на этаже" - показывает квартиры на этаже
    
    counterUp.on("click", function () { // Отслеживаем клик по кнопке вверх
        if (currentFloor < 18) { // Проверяем значение этажа, оно не должно быть больше 18
            currentFloor++; // Прибавляем 1 этаж
        usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, useGrouping: false }); // Форматируем переменную с этажем, чтобы было 01, а не 1
        $(".counter").text(usCurrentFloor); // Записываем значение этажа в счетчик справа
        floorPath.removeClass("current-floor"); // Удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // Подсвечиваем текущий этаж
        }
    });

    counterDown.on("click" ,function () { // Отслеживаем клик по кнопке вниз
        if (currentFloor > 2) { // Проверяем значение этажа, оно не должно быть меньше 2
            currentFloor--; // Удаляем 1 этаж
            usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, useGrouping: false }); // Форматируем переменную с этажем, чтобы было 01, а не 1
            $(".counter").text(usCurrentFloor); // Записываем значение этажа в счетчик справа
            floorPath.removeClass("current-floor"); // Удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // Подсвечиваем текущий этаж
        }
    })
    
    function toggleModal() { // Функция открыть - закрыть окно
        modal.toggleClass("is-open");
    }  

});
