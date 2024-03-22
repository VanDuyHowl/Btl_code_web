/*Đăng ký */
 $(document).ready(function(){
     $("#js-Dangky").click(function(){
         alert("Đã click vào đăng ký");
         $("#js-modal").show();
     });
 });

// /* */
 $(document).ready(function(){
     $("#js-back").click(function(){
         alert("Đã quay lại trang chủ");
         $("#js-modal").hide();
     });
 });


// const DangKy = document.querySelector('#js-Dangky')
// const modal = document.querySelector('#js-moadal')
// const Back = document.querySelector('#js-back')

// DangKy.addEventListener('click', showDangKy)
// Back.addEventListener('click',hideDangky)

// function showDangKy(){
//     modal.classList.add('open')
// }
// function hideDangky(){
//     modal.classList.remove('open')
// }
