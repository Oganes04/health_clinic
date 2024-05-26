//==================== реализация вывода карточек врачей в соответсвии выбранной категории =================================

$(document).ready(function() {
    $(".dropdown__content-selector p").click(function() {
        var direction = $(this).attr('data-direction');
        $(".doctor__item").hide(); // Скрываем все карточки врачей
        $(".doctor__item[data-specialization='" + direction + "']").show(); // Показываем только те карточки, которые соответствуют выбранному направлению
    });

    $(".dropdown__link-selector").click(function(event) {
        event.stopPropagation(); // Предотвращает закрытие выпадающего списка при клике на ссылку
        $(".dropdown__content-selector").slideToggle("fast");
        $('.dropdown__link-selector  svg').toggleClass("rotate_row");
       });
       
       $(document).click(function() {
        $(".dropdown__content-selector").slideUp("fast"); // Закрывает выпадающий список при клике вне его области
        $('.dropdown__link-selector  svg').removeClass("rotate_row");
       });
      
       $(".dropdown__link").click(function(event) {
        event.stopPropagation(); // Предотвращает закрытие выпадающего списка при клике на ссылку
        $(".dropdown__content").slideToggle("fast");
        $('.dropdown__link  svg').toggleClass("rotate_row");
       });
       
       $(document).click(function() {
        $(".dropdown__content").slideUp("fast"); // Закрывает выпадающий список при клике вне его области
        $('.dropdown__link  svg').removeClass("rotate_row");
       });
      
       $('.dropdown__content-selector p').click(function() {
        // Get the text of the clicked p element
        var selectedText = $(this).text();
        
        // Set the text of the dropdown__link-selector to the text of the clicked p element
        $('.selected__direction').text(selectedText);
      });
});






//==================== массив врачей =================================

var doctors = [
    {
        id: 1,
        specialization: "гинекология",
        name: "Парфёнов Иван Владимирович",
        age: "Взрослый",
        experience: "Стаж 28 лет",
        date1: "четверг, 16",
        time1: "12:30",
        date2: "пятница, 17",
        time2: "16:30",
        date3: "суббота, 18"
    },
    {
        id: 2,
        specialization: "неврология",
        name: "Парфёнов Иван Владимирович",
        age: "Взрослый",
        experience: "Стаж 28 лет",
        date1: "четверг, 16",
        time1: "12:30",
        date2: "пятница, 17",
        time2: "16:30",
        date3: "суббота, 18"
    },
    {
        id: 3,
        specialization: "неврология",
        name: "Парфёнов Иван Владимирович",
        age: "Взрослый",
        experience: "Стаж 28 лет",
        date1: "четверг, 16",
        time1: "12:30",
        date2: "пятница, 17",
        time2: "16:30",
        date3: "суббота, 18"
    },
    {
        id: 4,
        specialization: "неврология",
        name: "Парфёнов Иван Владимирович",
        age: "Взрослый",
        experience: "Стаж 28 лет",
        date1: "четверг, 16",
        time1: "12:30",
        date2: "пятница, 17",
        time2: "16:30",
        date3: "суббота, 18"
    },
    {
        id: 5,
        specialization: "оториноларингология",
        name: "Парфёнов Иван Владимирович",
        age: "Взрослый",
        experience: "Стаж 28 лет",
        date1: "четверг, 16",
        time1: "12:30",
        date2: "пятница, 17",
        time2: "16:30",
        date3: "суббота, 18"
    },
    {
        id: 6,
        specialization: "офтальмология",
        name: "Парфёнов Иван Владимирович",
        age: "Взрослый",
        experience: "Стаж 28 лет",
        date1: "четверг, 16",
        time1: "12:30",
        date2: "пятница, 17",
        time2: "16:30",
        date3: "суббота, 18"
    },
    {
        id: 7,
        specialization: "офтальмология",
        name: "Парфёнов Иван Владимирович",
        age: "Взрослый",
        experience: "Стаж 28 лет",
        date1: "четверг, 16",
        time1: "12:30",
        date2: "пятница, 17",
        time2: "16:30",
        date3: "суббота, 18"
    },
    {
        id: 8,
        specialization: "стоматология",
        name: "Парфёнов Иван Владимирович",
        age: "Взрослый",
        experience: "Стаж 28 лет",
        date1: "четверг, 16",
        time1: "12:30",
        date2: "пятница, 17",
        time2: "16:30",
        date3: "суббота, 18"
    },
    {
        id: 9,
        specialization: "терапия",
        name: "Парфёнов Иван Владимирович",
        age: "Взрослый",
        experience: "Стаж 28 лет",
        date1: "четверг, 16",
        time1: "12:30",
        date2: "пятница, 17",
        time2: "16:30",
        date3: "суббота, 18"
    },
    {
        id: 10,
        specialization: "стоматология",
        name: "Парфёнов Иван Владимирович",
        age: "Взрослый",
        experience: "Стаж 28 лет",
        date1: "четверг, 16",
        time1: "12:30",
        date2: "пятница, 17",
        time2: "16:30",
        date3: "суббота, 18"
    }
    // Добавьте остальных врачей здесь
];







//==================== реализация кнопки "показать еще" =================================

$(document).ready(function() {
    var currentPage = 1; // Начальная страница
    var itemsPerPage = 6; // Количество врачей на странице

    function loadDoctors() {
        var start = (currentPage - 1) * itemsPerPage;
        var end = start + itemsPerPage;

        // Фильтрация и сортировка данных перед отображением
        var filteredData = doctors.slice(start, end);

        // Добавление новых карточек врачей
        filteredData.forEach(doctor => {
            var item = `
                <div class="doctor__item" data-specialization="${doctor.specialization}">
                    <img src="./img/doctor_${doctor.id}.png" alt=""> <!-- Предполагается, что изображения хранятся отдельно -->
                    <div class="doctor__info">
                        <div class="doctor__info-row first-row">
                            <h3>${doctor.name}</h3> 
                            <p>${doctor.age} ${doctor.experience}</p>
                        </div>
                        <div class="doctor__info-row second-row">
                            <p>Выберете время приёма для записи онлайн</p>
                        </div>
                        <div class="doctor__info-row third-row">
                            <div class="doctor__dates">
                                <div class="doctor__date doctor__date-active">${doctor.date1}</div>
                                <div class="doctor__date">${doctor.date2}</div>
                                <div class="doctor__date">${doctor.date3}</div>
                            </div>
                            <span class="open-modal">Календарь</span>
                        </div>
                        <div class="doctor__info-row fourth-row">
                            <div class="doctor__times">
                                <div class="doctor__time">${doctor.time1}</div>
                                <div class="doctor__time">${doctor.time2}</div>
                            </div>
                        </div>
                    </div>
                </div>`;
            $(".doctor__items").append(item); // Добавляем новый элемент в конец контейнера
        });

        // Увеличиваем номер текущей страницы
        currentPage++;

        // Проверяем, нужно ли показывать кнопку "Показать ещё"
        if ((currentPage - 1) * itemsPerPage >= doctors.length) {
            $("#loadMoreButton").hide();
        } else {
            $("#loadMoreButton").show();
        }
    }

    // Загрузка первых врачей при загрузке страницы
    loadDoctors();

    // Обработчик клика по кнопке "Показать ещё"
    $("#loadMoreButton").click(loadDoctors);
});







//==================== реализация календаря =================================

$('.datepicker').datepicker({
    format: 'dd-mm-yyyy',
    autoclose: true,
    startDate: '0d'
});

$('.cell').click(function(){
    $('.cell').removeClass('select');
    $(this).addClass('select');
});

$(document).ready(function() {
    // Инициализация календаря
    $('.datepicker').datepicker({
        format: 'dd-mm-yyyy',
        autoclose: true,
        startDate: '0d'
    });




//==================== релаизация выбора карточки врача =================================================

// Функция для выделения активной карточки врача
$(document).on('click', '.doctor__item', function() {
    // Убираем выделение с предыдущей активной карточки
    $('.doctor__item').removeClass('active__card');
    // Выделяем текущую карточку
    $(this).addClass('active__card');
    // Убираем блоки third-row и fourth-row
    $(this).find('.third-row, .fourth-row').hide();
    // Показываем блок fifth-row
    if ($(this).find('.fifth-row').length === 0) {
        $(this).find('.doctor__info').append('<div class="doctor__info-row fifth-row"><a href="#calendar" class="open-calendar">Календарь</a></div>');
    } else {
        $(this).find('.fifth-row').show();
    }
});

// Обработчик клика по кнопке "Открыть календарь"
$(document).on('click', '.open-calendar', function() {
    $('.calendar').show();
});

// Обработчик выбора даты и времени в календаре
$('.cell').click(function() {
    $('.cell').removeClass('select');
    $(this).addClass('select');
    var selectedDate = $(this).data('date');
    var selectedTime = $(this).data('time');

    // Заполнение формы
    $('#record__form input[name="date"]').val(selectedDate);
    $('#record__form input[name="time"]').val(selectedTime);
});

// Обработчик отправки формы
$('#record__form').submit(function(event) {
    event.preventDefault();

    // Получение данных формы
    var doctorName = $('.doctor__item.active__card').find('h3').text();
    var selectedDate = $('#dp1').val(); // Получаем значение даты
    var selectedTime = $('.cell.select').text(); // Получаем значеие времени
    var patientName = $('#record__form input[name="patient_name"]').val(); // Получаем значение имени пациента
    var patientEmail = $('#record__form input[name="patient_email"]').val(); // Получаем значение почты пациента

    if (!selectedDate || !selectedTime) {  // Вадидация выбора даты и времени
        $('.error-message').text('Пожалуйста, выберите дату и время.');
        event.preventDefault(); // Предотвращаем отправку формы
        return;
    } else {
        $('.error-message').text('');
    }

    var submitButton = $(this).find('button[type="submit"]');
    var originalButtonText = submitButton.text();
    submitButton.text('Отправка...');
    // Отправка данных через AJAX
    $.ajax({
        url: 'https://example.com/api/appointments', // Замените на ваш URL
        method: 'POST',
        data: {
            doctor: doctorName,
            date: selectedDate,
            time: selectedTime,
            patient_name: patientName,
            patient_email: patientEmail
        },
        success: function(response) {
            // alert('Запись успешно отправлена!');
            // // Очистка формы после успешной отправки
            // $('#record__form')[0].reset();
            // // Скрытие календаря
            // $('.calendar').hide();
            // // Снятие выделения с активной карточки врача
            // $('.doctor__item').removeClass('active');
            // // Скрытие fifth-row
            // $('.fifth-row').hide();
        },
        error: function(error) {
            // Изменение текста кнопки на "Запись успешна"
            submitButton.text('Запись успешна!');
            // Очистка формы после успешной отправки
            $('#record__form')[0].reset();
            // Скрытие календаря
            $('.calendar').css('display', 'none');
            // Снятие выделения с активной карточки врача
            $('.doctor__item').removeClass('active');
            // Скрытие fifth-row
            $('.fifth-row').hide();
            // Вернуть исходный текст кнопки через некоторое время
            setTimeout(function() {
                submitButton.text(originalButtonText);
            }, 5000); 
        }
    });
});
});