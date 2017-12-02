const source = document.getElementById('girl-image-template').innerHTML;
const template = Handlebars.compile(source);

function loadPage() {
  $.ajax({
    url:'/images/api'
  }).then(
    data => {
      console.log(data);
      var itemHTML = $(template({images:data}));
      $("#girl_list").append(itemHTML).masonry(itemHTML);
      $('#girl_list').imagesLoaded().progress(function () {
        $('#girl_list').masonry('layout');
      });
    },
    err => {
      console.log(err);
    }
  );
}


$('#girl_list').masonry({
  itemSelector: '.girl_item',
  columnWidth: '.girl_item',
  percentPosition: true
});

$('#girl_list').imagesLoaded().progress(function () {
  $('#girl_list').masonry('layout');
});


$(window).on('scroll');
loadPage();
