AOS.init();

function hienthi() {
    var hien = document.getElementById("menu_black");
    hien.classList.remove("an_black");
  }
function an(){
    var an = document.getElementById("menu_black");
    an.classList.add("an_black")
} 
function neo_thanh_header()
{
  let _pageYOffset = window.pageYOffset
  if(_pageYOffset > 0)
  {
    document.getElementById("header_sidebar").classList.add('header_sidebar_light')
  }
  else
  {
    document.getElementById("header_sidebar").classList.remove('header_sidebar_light')
  }
};

// show products
const nuong = [
    {
        src: "images/nuong_dau_do_nhat.webp",
        name: 'Đậu Đỏ Kiểu Nhật',
        price: 62000,
        info: 'Bánh Trung Thu Kinh Đô 2019, Đậu đỏ kiểu Nhật 1 Trứng- Chuyên cung cấp bánh trung thu kinh đô với chiết khấu cao, giá rẻ hơn giá công ty, giao hàng tận nơi.'
    },
    {
        src: 'images/khoaimon.png',
        name: 'Khoai Môn',
        price: 62000,
        info: 'Bánh Trung Thu Kinh Đô 2019, Khoai môn 1 Trứng- Chuyên cung cấp bánh trung thu kinh đô với chiết khấu cao, giá rẻ hơn giá công ty, giao hàng tận nơi.'
    },
    {
        src: 'images/dau_xanh_la_dua.png', 
        name: 'Đậu Xanh Lá Dứa',
        price: 65000,
        info: 'Bánh Trung Thu Kinh Đô 2019, Đậu xanh lá dứa 1 Trứng- Chuyên cung cấp bánh trung thu kinh đô với chiết khấu cao, giá rẻ hơn giá công ty, giao hàng tận nơi.'
    },
    {
        src: 'images/lapxuongnguhat.png',
        name: 'Lạp Xưởng Ngũ Hạt',
        price: 73000,
        info: 'Bánh Trung Thu Kinh Đô 2019, Lạp xưởng ngũ hạt 1 Trứng - Chuyên cung cấp bánh trung thu kinh đô với chiết khấu cao, giá rẻ hơn giá công ty, giao hàng tận nơi.'
    },
    {
        src: 'images/thapcamjambon.png',
        name: 'Thập Cẩm Jambon',
        price: 73000,
        info: 'Bánh Trung Thu Kinh Đô 2019, Thập cẩm Jambon 1 Trứng - Chuyên cung cấp bánh trung thu kinh đô với chiết khấu cao, giá rẻ hơn giá công ty, giao hàng tận nơi.'
    },
    {
        src: 'images/gaquayjambon.png',
        name: 'Gà Quay Jambon',
        price: 79000,
        info: 'Bánh Trung Thu Kinh Đô 2019,Gà Quay Jampon (1 Trứng) - Chuyên cung cấp bánh trung thu kinh đô với chiết khấu cao, giá rẻ hơn giá công ty, giao hàng tận nơi.'
    },
    {
        src: 'images/namdongco.png',
        name: 'Nấm Đông Cô Xốt Rượu Rhum',
        price: 79000,
        info: 'Bánh Trung Thu Kinh Đô 2019, Nấm đông cô xốt rượu rhum- Chuyên cung cấp bánh trung thu kinh đô với chiết khấu cao, giá rẻ hơn giá công ty, giao hàng tận nơi.'
    },
    {
        src: 'images/saurieng.png',
        name: 'Sầu Riêng',
        price: 65000,
        info: 'Bánh Trung Thu Kinh Đô 2019, Sầu riêng 1 Trứng - Chuyên cung cấp bánh trung thu kinh đô với chiết khấu cao, giá rẻ hơn giá công ty, giao hàng tận nơi.'
    }
];

const deo = [
    {
        src: "images/deo_hatsenhatdua.webp",
        name: 'Hạt Sen Hạt Dưa',
        price: 70000,
        info: 'Này đây miếng bánh trắng ngần ~ cùng nhau chia sẻ vẹn toàn tình thân'
    },
    {
        src: 'images/deo_jambonlx.png',
        name: 'Jambon Lạp Xưởng',
        price: 87000,
        info: 'Nếu bánh nướng là cô chị sắc sảo, mặn mà, lộng lẫy, đa đoan, thì từng chiếc bánh dẻo Kinh Đô lại là một cô em ngây thơ, trong trắng, mà tha thiết đằm thắm với điệp điệp trùng trùng nét duyên thầm của mùa thu trinh bạch'
    },
    {
        src: 'images/deo_dauxanhhatdua.png',
        name: 'Đậu Xanh Hạt Dưa',
        price: 75000,
        info: 'Bánh Trung Thu Kinh Đô 2022, Bánh dẻo đậu xanh hạt dưa (1 Trứng), - Chuyên cung cấp bánh trung thu kinh đô với chiết khấu cao, giá rẻ hơn giá công ty, giao hàng tận nơi.'
    },
    {
        src: 'images/deo_thapcam.png',
        name: 'Thập Cẩm',
        price: 75000,
        info: 'Này đây miếng bánh trắng ngần ~ cùng nhau chia sẻ vẹn toàn tình thân'
    },
    {
        src: 'images/deo_hatsen.png',
        name: 'Hạt Sen',
        price: 60000,
        info: 'Bánh Trung Thu Kinh Đô 2019, Bánh Dẻo Hạt Sen (0 Trứng), - Chuyên cung cấp bánh trung thu kinh đô với chiết khấu cao, giá rẻ hơn giá công ty, giao hàng tận nơi.'
    }
];

const tuyet = [
    {
        src: "images/tuyet_3banhhong.jpg",
        name: 'Hộp 3 Bánh Hồng',
        price: 280000,
        info: '3 vị bánh trong hộp bánh hồng, mỗi bánh 80gr: 1. Xá xíu jambon 2. Hạt Sen 3. Đậu đỏ'
    },
    {
        src: 'images/tuyet_3banhxanh.jpg',
        name: 'Hộp 3 Bánh Xanh',
        price: 280000,
        info: '3 vị bánh trong hộp 3 bánh xanh: 1. Jambon gà quay 2. Đậu xanh 3. Khoai môn'
    },
    {
        src: 'images/tuyet_6banhhong.jpg',
        name: 'Hộp 6 Bánh Hồng',
        price: 480000,
        info: '6 vị bánh trong hộp Như Ý 6 bánh hộp hồng: 1. Jambon gà quay 2. Thập cẩm lạp xưởng 3. Đậu xanh 4. Hạt sen 5. Đậu đỏ 6. Sữa dừa'
    },
    {
        src: 'images/tuyet_6banhxanh.jpg',
        name: 'Hộp 6 Bánh Xanh',
        price: 480000,
        info: 'Hộp gồm 6 vị bánh, trọng lượng mỗi bánh 80gr: 1. Thập cẩm lạp xưởng 2. Xá xíu jambon3. Đậu xanh 4. Hạt sen 5. Đậu đỏ 6. Khoai môn'
    }, 
    {
        src: 'images/tuyet_3banh.jpg',
        name: 'Hộp Tuyết 3 Bánh',
        price: 280000,
        info: 'Hộp bánh tuyết 3 bánh gồm: 1. Vị Cam Nhật (Yuzu) 2. Trà Xanh 3. Mè Đen'
    },
    {
        src: 'images/tuyet_6banh.jpg',
        name: 'Hộp Tuyết 6 Bánh',
        price: 480000,
        info: 'Hộp bánh tuyết 6 bánh gồm: 1. Vị Cam Nhật (Yuzu) (2 bánh) 2. Trà Xanh 3. Mè Đen (2 bánh) 4. Đậu đỏ'
    }
];

const lava = [
    {
        src: "images/lava_3.jpg",
        name: 'Lava Trứng Chảy (3 Bánh)',
        price: 280000,
        info: 'Dòng bánh lava - bánh trung thu có lớp nhân chính giữa tan chảy - được các nghệ nhân Kinh Đô dày công nghiên cứu giới thiệu đến người Việt Nam với mong muốn mang lại những trải nghiệm thật khác trong mùa trung thu.'
    },
    {
        src: 'images/lava_6.jpg',
        name: 'Lava Trứng Chảy (6 bánh)',
        price: 480000,
        info: 'Dòng bánh lava - bánh trung thu có lớp nhân chính giữa tan chảy - được các nghệ nhân Kinh Đô dày công nghiên cứu giới thiệu đến người Việt Nam với mong muốn mang lại những trải nghiệm thật khác trong mùa trung thu.'
    }
];

const trangvang = [
    {
        src: "images/tv_hungthinh.jpg",
        name: 'Hồng Ngọc Hưng Thịnh',
        price: 560000,
        info: 'Hộp bánh Bánh trung thu cao cấp Hồng Ngọc Hưng Thịnh gồm: 6 bánh, mỗi bánh 80g'
    },
    {
        src: 'images/tv_hungphu.jpg',
        name: 'Hồng Ngọc Hưng Phú',
        price: 760000,
        info: 'Trong dịp Tết Trung thu, gia đình từ khắp nơi trên thế giới quây quần bên nhau để sum họp vui vẻ. Họ trao đổi những hộp bánh trung thu Hưng Phú Golden Moon ngon nhất và tận hưởng không gian yên tĩnh của đêm trăng. Rằm tháng tám. Trong hộp bánh Hồng Ngọc Hưng Phú có 8 chiếc bánh, mỗi chiếc nặng 80g.'
    },
    {
        src: 'images/tv_annhien.jpg',
        name: 'Hồng Ngọc An Nhiên',
        price: 610000,
        info: 'Hộp Kinh Đô Bánh trung thu cao cấp Hồng Ngọc An Nhiên Xanh dương gồm 4 bánh, mỗi bánh 160g.'
    },
    {
        src: 'images/tv_anlanh.jpg',
        name: 'Hồng Ngọc An Lành',
        price: 610000,
        info: 'Hộp bánh Kinh Đô Bánh trung thu cao cấp Hồng Ngọc An Lành Xanh gồm 4 bánh, mỗi bánh 160g, với các nhân bánh: Cua Sốt Kiểu Singapore, Thịt Xông Khói, Đậu Xanh Hạnh Nhân, Đậu Đỏ Hạnh Nhân'
    },
    {
        src: 'images/tv_anphu.jpg',
        name: 'Hồng Ngọc An Phú',
        price: 760000,
        info: 'Hộp Bánh trung thu cao cấp Hồng Ngọc An Phú vàng gồm 4 bánh, mỗi bánh trọng lượng 160g, là hộp bánh trung thu Kinh Đô Bánh trung thu cao cấp cao cấp được rất nhiều khách hàng lựa chọn mỗi màu trung thu về.'
    },
    {
        src: 'images/tv_anthinh.jpg',
        name: 'Hồng Ngọc An Thịnh',
        price: 760000,
        info: 'Quý phái với sắc đỏ trầm sang trọng, nổi bật bên ánh bạc rạng ngời, Bánh Kinh Đô Bánh trung thu cao cấp Hồng Ngọc an thịnh Đỏ được thiết kế tinh xảo với những họa tiết mềm mại nhảy múa như vũ điệu đêm rằm.'
    },
    {
        src: 'images/tv_taman.jpg',
        name: 'Hồng Ngọc Tam An',
        price: 760000,
        info: 'Hộp gồm 4 bánh, mỗi bánh có trọng lượng 120g Dòng bánh Bánh trung thu cao cấp Hồng Ngọc Tâm An dùng đường ăn kiêng sử dụng hình ảnh hoa cúc trên hoành phi triều Nguyễn, tượng trưng cho lời chúc trường thọ, phúc lộc và lòng hiếu thảo, nguyện cầu cho một mùa thu may mắn, cát tường.'
    },
    {
        src: 'images/tv_anbinh.jpg',
        name: 'Hồng Ngọc An Bình',
        price: 560000,
        info: 'Hộp gồm 4 bánh nướng, 1 trứng, 160g mỗi bánh. Dòng bánh Kinh Đô Bánh trung thu cao cấp Hồng Ngọc An Bình lấy cảm hứng tư bữa tiệc hoàng gia, với hình ảnh họa tiết hoa văn mây lành triều Nguyễn trên nắp hộp, tượng trưng cho lời chúc một mùa trung thu bình an, hạnh phúc. Hộp bánh có màu xanh dương tao nhã, đây mẫu hộp bánh Bánh trung thu cao cấp giá rẻ để bạn mua làm quà tặng.'
    },
    {
        src: 'images/tv_phale.jpg',
        name: 'Pha Lê Vạn Phúc',
        price: 1000000,
        info: 'Hộp Bánh Kinh Đô Bánh trung thu cao cấp Pha Lê Vạn Phúc xanh gồm 6 bánh, mỗi bánh có trọng lượng 120g, với Tuyết Dâu Tây (2 Bánh), Tuyết Cappuccino (2 Bánh), Tuyết Trứng Sữa (Custard – 2 Bánh)'
    },
    {
        src: 'images/tv_vinhhoa.jpg',
        name: 'Hoàng Kim Vinh Hoa',
        price: 1300000,
        info: '4 bánh * 160gr + 1 hộp trà ô long 50gr'
    },
    {
        src: 'images/tv_vinhhien.jpg',
        name: 'Hoàng Kim Vinh Hiển',
        price: 1300000,
        info: 'Hộp 4 bánh, trọng lượng mỗi bánh 160gr + Hộp trà ô long 50gr Nhân bánh: Cua Bát Bửu, Thịt Sốt Tương BBQ, Gà Quay Tứ Quý, Đậu Xanh Hạnh Nhân'
    }
]

renderProduct(nuong);

function renderProduct(arr){
    let productList = document.querySelector('.product_list');
    productList.innerHTML = '';
    for (let i = 0; i < arr.length; i++){
        const p = arr[i];
        productList.innerHTML += `
        <div class="product_container">
            <div class="image_box">
                <img src="${p.src}">
                <ul>
                    <li>
                        <i class="fa fa-search-plus"></i>
                        <span>Xem chi tiết</span>
                    </li>
                    <li>
                        <i class="fa fa-cart-plus"></i>
                        <span>Thêm vào giỏ hàng</span>
                    </li>
                    <li>
                        <i class="fa fa-heart"></i>
                        <span>Yêu thích</span>
                    </li>
                    <li>
                        <i class="fa fa-arrows-alt-h"></i>                 
                        <span>So sánh</span>
                    </li>
                </ul>
            </div>
            <h3 id="product_name">${p.name}</h3>
            <h5 id="price">${(Number(p.price)).toLocaleString('de-DE')}</h5>
            <p id="product_info" style="display: none">${p.info}</p>
        </div>`  
    }
    addToCart();
    productInfo();
    likeProduct();
}


// add to cart
function addToCart(){
    let addBtn = document.querySelectorAll('.fa-cart-plus');
    addBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
            var product = e.target.parentElement.parentElement.parentElement.parentElement;

            var productImg = product.querySelector('img').src;
            var productName = product.querySelector('#product_name').innerText;
            var productPrice = product.querySelector('#price').innerHTML;

            let cartBody = document.querySelector('tbody');
            let addedItems = cartBody.querySelectorAll('tr');

            // check if a product is in cart
            for (let i = 0; i < addedItems.length; i++){
                if (addedItems[i].querySelector('.cart_product_name').innerText.trim() == productName){
                    //console.log(productName);
                    let quantity = addedItems[i].querySelector('.cart_quantity span');
                    let number = quantity.innerText;
                    number++;
                    quantity.innerHTML = number;
                    total();
                    updateNote();
                    congrats();
                    return;
                }
            }
            let addtr = document.createElement('tr');
            addtr.innerHTML = `
                <td class="cart_product_name">
                    <i class="fa fa-times-circle"></i>
                    <img src='${productImg}'>
                    <span style="text-align: left">${productName}</span>
                </td>
                <td class="cart_product_price">${productPrice}</td>
                <td class="cart_quantity"><i class="fa fa-plus"></i><span>1</span><i class="fa fa-minus"></i></td>` 

            // plus button
            const plusBtn = addtr.querySelector('.fa-plus');
            const minusBtn = addtr.querySelector('.fa-minus');
            plusBtn.addEventListener('click', () => {
                let currentNumber = Number(addtr.querySelector('.cart_quantity span').innerText);
                currentNumber++;
                addtr.querySelector('.cart_quantity span').innerHTML = currentNumber;
                total();
                updateNote();
            })
            // minus button
            minusBtn.addEventListener('click', () => {
                let currentNumber = Number(addtr.querySelector('.cart_quantity span').innerText);
                if (currentNumber > 1){
                    //console.log(currentNumber);
                currentNumber--;
                addtr.querySelector('.cart_quantity span').innerHTML = currentNumber;
                total();
                updateNote();
                }
            })
            cartBody.append(addtr); 
            deleteCart();
            updateNote();
            total();
            congrats();
        })
        
    })
}

// calculate total
function total(){
    let addedItems = document.querySelectorAll('tbody tr');
    let total = 0;
    for (let i = 0; i < addedItems.length; i++){
        let quantity = Number(addedItems[i].querySelector('.cart_quantity').innerText);
        let productPrice = addedItems[i].querySelector('.cart_product_price').innerHTML;
        total += quantity * productPrice * 1000;
    }
    let totalNumber = document.querySelector('.total_number');
    totalNumber.innerHTML = total.toLocaleString('de-DE');
}

// delete a product
function deleteCart(){
    let cartBody = document.querySelector('tbody');
    let addedItems = cartBody.querySelectorAll('tr');
    for (let i = 0; i < addedItems.length; i++){
        let deleteBtn = addedItems[i].querySelector('.fa-times-circle');
        deleteBtn.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();
            total();
            updateNote();
        })
    }
}

//update cart note 
function updateNote(){
    const cartNote = document.querySelector('.cart_note');
    let cartBody = document.querySelector('tbody');
    let addedItems = cartBody.querySelectorAll('tr'); 
    let cartQuantity = 0;
    addedItems.forEach(item => {
        cartQuantity += Number(item.querySelector('.cart_quantity').innerText);
    })
    cartNote.innerHTML = cartQuantity;
    if (addedItems.length > 0)
        cartNote.style.display = 'block';
}

// show cart
function showCart(){
    let cart = document.querySelector('.cart');
    cart.classList.toggle('cart_slide_in');
}

// popup congrats
function congrats(){
    let modal = document.querySelector('.modal');
    let closeBtn = document.querySelector('.congrats_popup i')
    let sound = document.querySelector('audio');
    modal.style.display = 'block';
    sound.play();
    
    // close popup
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';    
    })
}

// popup product info
function productInfo(){
    let modalInfo = document.querySelector('.modal_info');
    let viewBtn = document.querySelectorAll('.fa-search-plus');

    viewBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
            var product = e.target.parentElement.parentElement.parentElement.parentElement;

            var productImg = product.querySelector('img').src;
            var productName = product.querySelector('#product_name').innerText;
            var productPrice = product.querySelector('#price').innerHTML;
            var productInfo = product.querySelector('#product_info').innerHTML;

            modalInfo.style.display = 'block';
            modalInfo.innerHTML = 
            `<div class="modal_inner">
                <i class="fa fa-times"></i> 
                <div class="modal_info_content">
                    <img class="modal_info_image" src="${productImg}">
                    <div class="modal_info_text">
                        <h3>${productName}</h3>
                        <h4>${productPrice}</h4>
                        <p>${productInfo}</p>
                    </div>
                </div>
            </div>`

        })
    })
    //close
    modalInfo.addEventListener('click', () => modalInfo.style.display = 'none');
}

// like a product 
function likeProduct(){
    let likeBtn = document.querySelectorAll('.fa-heart');
    likeBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.target.style.color = '#bc8157'
            e.target.parentElement.style.backgroundColor = 'wheat';
        })
    })
}   








