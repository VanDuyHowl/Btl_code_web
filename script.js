/*Đăng ký */
// $(document).ready(function(){
//     $("#Dangky").click(function(){
//         alert("Đã click vào đăng ký");
//         $("#modal").show();
//     });
// });

// /* */
// $(document).ready(function(){
//     $("#back").click(function(){
//         alert("Đã quay lại trang chủ");
//         $("#modal").hide();
//     });
// });


const DangKy = document.querySelector('#js-Dangky')
const modal = document.querySelector('#js-moadal')
const Back = document.querySelector('#js-back')

DangKy.addEventListener('click', showDangKy)
Back.addEventListener('click',hideDangky)

function showDangKy(){
    modal.classList.add('open')
}
function hideDangky(){
    modal.classList.remove('open')
}
