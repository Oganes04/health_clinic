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
  
  