document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const clearOrderButton = document.querySelector('#clear-order');
    const submitOrderButton = document.querySelector('#submit-order');
    const orderForm = document.querySelector('#order-form');
    const cartList = document.querySelector('#cart ul');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('img').alt;
            const productPrice = this.parentElement.querySelector('span').textContent;
            const selectedFlavorButton = this.parentElement.querySelector('.flavor.selected');
            
            if (selectedFlavorButton) {
                const productType = selectedFlavorButton.dataset.flavor;

                const itemDescription = `${productName} de ${productType}. PREÇO: ${productPrice}`;
                
                const item = document.createElement('li');
                item.textContent = itemDescription;
                cartList.appendChild(item);
            } else {
                alert("Por favor, selecione um sabor.");
            }
        });
    });

    clearOrderButton.addEventListener('click', function() {
        cartList.innerHTML = ''; // Limpa o conteúdo do carrinho
    });

    submitOrderButton.addEventListener('click', function() {
        const cartItems = cartList.querySelectorAll('li');
        const orderDetails = [];

        cartItems.forEach(item => {
            orderDetails.push(item.textContent);
        });

        // Enviar os detalhes do pedido para o backend

        // Limpar o carrinho após o pedido ser enviado
        cartList.innerHTML = '';

        // Resetar o formulário
        orderForm.reset();

        alert('Pedido enviado!');
    });

    const flavorButtons = document.querySelectorAll('.flavor');
    flavorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentSelected = document.querySelector('.flavor.selected');
            if (currentSelected) {
                currentSelected.classList.remove('selected');
            }
            this.classList.add('selected');
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const saboresButton = document.querySelector('.sabores-button');
    const saboresContent = document.querySelector('.sabores-content');

    saboresButton.addEventListener('click', function() {
        saboresContent.classList.toggle('show');
        moveSaboresContent();
    });

    function moveSaboresContent() {
        const saboresButtonRect = saboresButton.getBoundingClientRect();
        saboresContent.style.top = (saboresButtonRect.bottom + window.pageYOffset) + 'px';
        saboresContent.style.left = saboresButtonRect.left + 'px';
    }
});
