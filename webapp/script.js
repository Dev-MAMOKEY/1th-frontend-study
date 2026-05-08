// DOM 선택 querySelector

// 생산품 리스트
const productList = document.querySelector("#product-list");

// 카트 리스트
const cartList = document.querySelector("#cart-list");

// 총 합계
const totalPrice = document.querySelector("#total-price");



// 상품 데이터
const products = [
  { id: 1, name: "노트북", price: 1200000 },
  { id: 2, name: "마우스", price: 30000 },
  { id: 3, name: "키보드", price: 80000 }
];



// 장바구니 데이터
let cart = [];


// 화면에 상품 데이터 출력 (DOM : productList)
function showProducts() {

    // 생산품 리스트 비우기 -> 안 비우면 중복으로 출력
    productList.innerHTML = "";
    console.log("리스트 비웠음");

    // 생산품 데이터 하나씩 생산품 리스트에 넣음
    products.forEach( function (product) {

        console.log(product);

        // div요소 생성 후 productItem으로 할당
        const productItem = document.createElement("div");

        // div 요소, 즉 productItem 하나 당 클래스 적용
        productItem.classList.add("product-item");
        
        // div(productItem) 요소 삽입
        productItem.innerHTML = `
            <span>${product.name}</span>
            <strong>${product.price}</strong>
            <button class="add-btn" data-id=${product.id}>추가</button>
        `;

        // 만든 div(productItem)을 생산품 리스트에 넣기
        productList.appendChild(productItem);

    })   
}

productList.addEventListener("click", function (event){

    // 만약 클릭한 요소의 class에 "add-btn"이 있다면
    if (event.target.classList.contains("add-btn")){

        //클릭 요소 data- 형태의 요소 출력
        const productId = Number(event.target.dataset.id);

        // 클릭한 요소가 실제 상품데이터와 일치하는지 확인
        const selectedProduct = products.find(function (product){ // find - true면 해당 객체 반환
            return product.id === productId; // true, false 출력
        });

        // cart 배열에 삽입
        cart.push(selectedProduct);
        
    }
})



// 화면 갱신
showProducts();