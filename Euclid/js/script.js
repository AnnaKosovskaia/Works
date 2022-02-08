document.addEventListener('DOMContentLoaded', function() {

  // burger
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#nav').classList.toggle('is-active')
    document.querySelector('#burger').classList.toggle('is-active')
  })

  // slider
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 1500,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  }, 1000);

  // tabs
  document.querySelectorAll('.working-tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.working-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

      document.querySelectorAll('.working-tabs__btn').forEach(tab =>  {
        tab.classList.remove('tab-active')
      })
      tabsBtn.classList.add('tab-active')
    })
  })

  // accordion

  $( function() {
    $( "#accordion" ).accordion({
      header: 'h3.questions__item-header',
      active: false,
      collapsible: true,
      heightStyle: "content",
      icons: {
        "header": "questions-button__plus", "activeHeader": "questions-button__plus"
      }
    });
  } );

  // ARIA
  let btn = document.querySelectorAll('.swiper-pagination-bullet');
  btn[0].setAttribute("aria-label", "Перейти к первому слайду");
  btn[1].setAttribute("aria-label", "Перейти ко второму слайду");
  btn[2].setAttribute("aria-label", "Перейти к третьему слайду");

})
