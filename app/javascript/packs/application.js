// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require t.min.js
//= require_tree .
//= require popper
//= require chartkick
//= require Chart.bundle




import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import JQuery from 'jquery';
window.$ = window.JQuery = JQuery;
import Chartkick from 'chartkick'
import Highcharts from 'highcharts'
window.Highcharts = Highcharts

//import  "../layouts/application.css"
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel'
//para colocar nuevos javascript se deben de colocar en aplication.js y despues de los import //
require("packs/lightbox-plus-jquery.min.js")


Rails.start()
Turbolinks.start()
ActiveStorage.start()

console.log('hella')

addEventListener('DOMContentLoaded',() =>{
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu){
        btn_menu.addEventListener('click',()=>{
            const menu_items = document.querySelector('.navbar_menu_items')
            menu_items.classList.toggle('show')
        })
    }
})




 window.onscroll = function (e)
    {
     $('.logo').hide();
     }



     
     (function($) {
        "use strict";
        
        /* ..............................................
        Loader 
        ................................................. */
        
        $(window).on('load', function() { 
            $('.preloader').fadeOut(); 
            $('#preloader').delay(550).fadeOut('slow'); 
            $('body').delay(450).css({'overflow':'visible'});
        });
            
        /* ..............................................
        Navbar Bar
        ................................................. */
        
        $('.navbar-nav .nav-link').on('click', function() {
            var toggle = $('.navbar-toggler').is(':visible');
            if (toggle) {
                $('.navbar-collapse').collapse('hide');
            }
        });
        
        /* ..............................................
        Fixed Menu
        ................................................. */
        
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 50) {
                $('.top-header').addClass('fixed-appsafetysolutionscr');
            } else {
                $('.top-header').removeClass('fixed-appsafetysolutionscr');
            }
        });
    
        /* ..............................................
        Properties Filter
        ................................................. */
        var Container = $('.container');
        Container.imagesLoaded(function () {
            var portfolio = $('.properties-menu');
            portfolio.on('click', 'button', function () {
                $(this).addClass('active').siblings().removeClass('active');
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.properties-list').isotope({
                itemSelector: '.properties-grid'
            });
    
        });
    
        /* ..............................................
        Gallery
        ................................................. */
        
        $(document).ready(function() {
            $('.popup-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }
            });
        });
        
    
         
    
        
    }(jQuery));
    
    



    