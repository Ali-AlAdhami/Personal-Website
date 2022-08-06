$( document ).ready(function() {
  console.log( "ready!" );
    AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
});