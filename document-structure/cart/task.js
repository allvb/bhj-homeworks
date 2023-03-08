const quantityControl = [...document.querySelectorAll('.product__quantity-control')];//список кнопок управления количеством
const addButtonToCart = document.querySelectorAll('.product__add');//список кнопок добавления товара в корзину
const cartProducts = document.querySelector('.cart__products');

for (const btn of quantityControl) {
    btn.addEventListener('click', () => { //обработчик кнопок количества
        const btnParent = btn.closest('.product__quantity-controls');//родитель кнопки
        const value = btnParent.querySelector('.product__quantity-value');//значение кнопки
        if (btn.innerText === '-') {//если "-"
            value.textContent = +value.textContent - 1;
            value.textContent = value.textContent < 0 ? 0 : value.textContent;
        } else if (btn.innerText === '+') { //если "+"
            value.textContent = +value.textContent + 1;
        }
    })
}

for (const btn of addButtonToCart) {
    btn.addEventListener('click', () => { //обработчик нажатия на кнопку добавления в корзину
        const productId = btn.closest('.product');
        const productsInCart = cartProducts.getElementsByClassName('cart__product');//список продуктов в корзине
        let flag = 0;

        function addProduct (productId) {//функция создания и добавления продукта в корзину
            const product = document.createElement('div');
            product.classList.add('cart__product');
            product.dataset.id = productId.dataset.id;
            product.innerHTML = 
                `<div class="cart__product-count">${productId.querySelector('.product__quantity-value').textContent}</div>
                <img class="cart__product-image" src="${productId.querySelector('img').src}">`;
            cartProducts.appendChild(product);   
        }

        if (!productsInCart.length) { //если корзина пуста
            addProduct(productId);
            return;
        }

        if (productId.querySelector('.product__quantity-value').textContent === '0') {
            return;
        }

        for (const item of productsInCart) { //есть ли продукт уже в корзине
            if (item.dataset.id === productId.dataset.id) {
                let sameProduct = [...productsInCart].filter((item) => item.dataset.id === productId.dataset.id);
                let qyantity = +sameProduct[0].querySelector('.cart__product-count').textContent;
                qyantity = qyantity + +productId.querySelector('.product__quantity-value').textContent;
                sameProduct[0].querySelector('.cart__product-count').textContent = qyantity;
                flag++;
            };
        }

        if (!flag) { //если нет в корзине добавляем его
            addProduct(productId);
        }    
    });
}


