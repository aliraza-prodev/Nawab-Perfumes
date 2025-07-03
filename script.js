// document.addEventListener('DOMContentLoaded', () => {
//     // --- Global Elements ---
//     const cartIcon = document.getElementById('cartIcon');
//     const cartSidebar = document.getElementById('cartSidebar');
//     const closeCartBtn = document.getElementById('closeCart');
//     const cartItemsContainer = document.getElementById('cartItems');
//     const cartSubtotalSpan = document.getElementById('cartSubtotal');
//     const cartCountSpan = document.getElementById('cartCount');
//     const navbarToggler = document.querySelector('.navbar-toggler');
//     const navbarCollapse = document.getElementById('navbarNav');

//     // --- Product Data ---
//     // Updated to use assets/perfumeX.jpeg paths for 28 products
//     const products = [
//         {
//             id: 'rose-vintage',
//             name: 'Nawab Saheb',
//             tagline: 'Timeless floral elegance',
//             description: 'A classic, sophisticated rose fragrance, blending Bulgarian rose with a hint of spicy black pepper and a warm amber base. Perfect for a refined and unforgettable presence. Experience the allure of a bygone era, reimagined for the modern connoisseur. Each drop unveils layers of delicate petals and an unexpected depth that lingers beautifully on the skin.',
//             ingredients: ['Top: Bergamot, Pink Pepper', 'Middle: Bulgarian Rose, Geranium, Violet', 'Base: Amber, Sandalwood, Musk'],
//             price: 120,
//             image: 'assets/Nawab-Saheb-Product.png', // maps to Nawab-Saheb-Product.png
//             images: [
//                 'assets/Nawab-Saheb-Product.png',
//                 'assets/perfume1.jpeg',
//                 'assets/perfume2.jpeg'
//             ],
//             reviews: [
//                 { user: 'Aisha K.', rating: 5, text: 'Absolutely love the subtle yet lasting scent. Feels truly luxurious and receives compliments everywhere!' },
//                 { user: 'Usman R.', rating: 4, text: 'A sophisticated rose scent, not too overpowering. Great for evening wear. Wears beautifully throughout the day.' },
//                 { user: 'Zara B.', rating: 5, text: 'My new signature fragrance. The vintage feel is perfect, yet it feels incredibly modern. A masterpiece!' }
//             ],
//             sizes: ['30ml', '50ml', '100ml']
//         },
//         {
//             id: 'oud-elixir',
//             name: 'Nawabzada',
//             tagline: 'Mysterious, deep & captivating',
//             description: 'An enchanting blend of rare Oud wood, intertwined with smoky incense and a hint of vanilla. A truly unique and long-lasting scent that evokes a sense of mystery and sophistication. Ideal for those who appreciate complex, rich fragrances with an undeniable presence.',
//             ingredients: ['Top: Saffron, Raspberry', 'Middle: Oud, Rose, Patchouli', 'Base: Amber, Incense, Vanilla, Sandalwood'],
//             price: 180,
//             image: 'assets/Nawabzada-Product.png', // maps to perfume1.jpeg
//             images: [
//                 'assets/perfume1.jpeg',
//                 'assets/perfume.jpeg',
//                 'assets/perfume2.jpeg'
//             ],
//             reviews: [
//                 { user: 'Faisal S.', rating: 5, text: 'This Oud is incredible! So deep and long-lasting. Definitely worth the price.' },
//                 { user: 'Nazia B.', rating: 4, text: 'A very rich and warm scent, perfect for colder evenings. A little goes a long way.' }
//             ],
//             sizes: ['50ml', '100ml']
//         },
//         {
//             id: 'citrus-bloom',
//             name: 'Kingdom',
//             tagline: 'Fresh, vibrant & invigorating',
//             description: 'A burst of fresh citrus notes like mandarin and bergamot, softened by delicate white florals. A lively and uplifting fragrance perfect for day wear and warmer climates. It evokes the feeling of a sun-drenched garden, refreshing and light.',
//             ingredients: ['Top: Mandarin, Bergamot, Lemon', 'Middle: Jasmine, Neroli, Green Tea', 'Base: White Musk, Cedarwood, Vetiver'],
//             price: 95,
//             image: 'assets/kingdom-Product.png', // maps to perfume2.jpeg
//             images: [
//                 'assets/perfume2.jpeg',
//                 'assets/perfume.jpeg',
//                 'assets/perfume1.jpeg'
//             ],
//             reviews: [
//                 { user: 'Sara A.', rating: 5, text: 'So refreshing and light! Perfect for summer mornings and feels incredibly uplifting.' },
//                 { user: 'Ahmed Z.', rating: 4, text: 'A bright and clean scent, exactly what I look for in a daily fragrance. Excellent for professional settings.' }
//             ],
//             sizes: ['30ml', '50ml']
//         },
//         {
//             id: 'velvet-night',
//             name: 'Time less',
//             tagline: 'Rich, sensual & alluring',
//             description: 'A deep, mysterious fragrance with notes of dark chocolate, patchouli, and a hint of sweet vanilla. Perfect for evening wear and special occasions. It is an intoxicating blend that leaves a memorable trail, designed for those who embrace their captivating aura.',
//             ingredients: ['Top: Cocoa, Bergamot, Pink Pepper', 'Middle: Patchouli, Orchid, Jasmine', 'Base: Vanilla, Sandalwood, Tonka Bean, Amber'],
//             price: 150,
//             image: 'assets/Timeless-Product.png', // maps to perfume3.jpeg
//             images: [
//                 'assets/perfume3.jpeg',
//                 'assets/perfume1.jpeg',
//                 'assets/perfume2.jpeg'
//             ],
//             reviews: [
//                 { user: 'Hassan A.', rating: 5, text: 'This is my go-to for special nights. It\'s incredibly rich and lasts forever.' },
//                 { user: 'Kinza M.', rating: 5, text: 'Absolutely mesmerizing. The chocolate and patchouli create a unique and sophisticated aroma.' }
//             ],
//             sizes: ['50ml', '100ml']
//         },
//         {
//             id: 'aqua-dream',
//             name: 'Era',
//             tagline: 'Clean, crisp & refreshing',
//             description: 'An invigorating oceanic scent with fresh citrus and aquatic notes, balanced by a light woody base. Perfect for a refreshing and light feel, reminiscent of a serene walk by the sea. It\'s a clean and uplifting fragrance for everyday wear.',
//             ingredients: ['Top: Sea Salt, Grapefruit, Aquozone', 'Middle: Jasmine, Marine Notes, Lavender', 'Base: Ambergris, Cedar, White Musk'],
//             price: 110,
//             image: 'assets/Era-Product.png', // maps to perfume4.jpeg
//             images: [
//                 'assets/perfume4.jpeg',
//                 'assets/perfume.jpeg',
//                 'assets/perfume3.jpeg'
//             ],
//             reviews: [
//                 { user: 'Imran L.', rating: 4, text: 'Very fresh and aquatic, great for hot weather. Not too strong, just right.' },
//                 { user: 'Sana T.', rating: 5, text: 'Love this scent! It smells so clean and summery, like a fresh ocean breeze.' }
//             ],
//             sizes: ['30ml', '50ml']
//         },
//         {
//             id: 'spiced-saffron',
//             name: 'Aura',
//             tagline: 'Warm, exotic & inviting',
//             description: 'A captivating blend of warm spices like saffron and cinnamon, balanced by soft florals and a rich, woody base. An exotic and inviting fragrance that transports you to distant lands. Its unique character makes it perfect for those seeking an opulent and memorable scent.',
//             ingredients: ['Top: Saffron, Cinnamon, Nutmeg', 'Middle: Rose, Jasmine, Clove', 'Base: Sandalwood, Amber, Oud, Vanilla'],
//             price: 135,
//             image: 'assets/Aura-Product.png', // maps to perfume5.jpeg
//             images: [
//                 'assets/perfume5.jpeg',
//                 'assets/perfume.jpeg',
//                 'assets/perfume3.jpeg'
//             ],
//             reviews: [
//                 { user: 'Zainab F.', rating: 5, text: 'A truly unique and rich fragrance. The saffron really comes through beautifully.' },
//                 { user: 'Omar H.', rating: 4, text: 'Warm and inviting, great for winter. It has a distinctive character.' }
//             ],
//             sizes: ['50ml', '100ml']
//         },
//         // --- Additional Products (from perfume6.jpeg to perfume27.jpeg) ---
//         {
//             id: 'golden-dawn',
//             name: 'Crush',
//             tagline: 'Radiant & uplifting citrus',
//             description: 'Awaken your senses with this bright and cheerful fragrance, bursting with notes of sun-kissed fruits and a hint of morning dew.',
//             ingredients: ['Top: Grapefruit, Clementine', 'Middle: Orange Blossom', 'Base: White Musk'],
//             price: 105,
//             image: 'assets/Crush-Product.png',
//             images: ['assets/perfume6.jpeg', 'assets/perfume.jpeg'],
//             reviews: [], sizes: ['30ml', '50ml']
//         },
//         {
//             id: 'midnight-bloom',
//             name: 'VIP Gold',
//             tagline: 'Enigmatic & sophisticated floral',
//             description: 'A captivating nocturnal floral, blending dark rose with jasmine and a touch of smoky incense for an intriguing allure.',
//             ingredients: ['Top: Blackcurrant, Bergamot', 'Middle: Tuberose, Jasmine', 'Base: Patchouli, Incense'],
//             price: 140,
//             image: 'assets/VipGold-Product.png',
//             images: ['assets/perfume7.jpeg', 'assets/perfume1.jpeg'],
//             reviews: [], sizes: ['50ml', '100ml']
//         },
//         {
//             id: 'desert-spice',
//             name: 'Cool',
//             tagline: 'Warm, arid & adventurous',
//             description: 'Experience the dry warmth of desert spices, with notes of cinnamon, saffron, and a grounding woody base. A truly unique and bold fragrance.',
//             ingredients: ['Top: Cardamom, Pepper', 'Middle: Cumin, Paprika', 'Base: Cedarwood, Amber'],
//             price: 165,
//             image: 'assets/Cool-Product.png',
//             images: ['assets/perfume8.jpeg', 'assets/perfume3.jpeg'],
//             reviews: [], sizes: ['50ml', '100ml']
//         },
//         {
//             id: 'silver-mist',
//             name: 'White Oud Premium',
//             tagline: 'Cool, ethereal & subtle',
//             description: 'A light, airy scent reminiscent of a misty morning, with delicate aquatic notes and a hint of fresh lavender.',
//             ingredients: ['Top: Marine Notes, Bergamot', 'Middle: Lavender, Lily of the Valley', 'Base: Vetiver, White Musk'],
//             price: 85,
//             image: 'assets/White-Oud-Premium.png',
//             images: ['assets/perfume9.jpeg', 'assets/perfume4.jpeg'],
//             reviews: [], sizes: ['30ml', '50ml']
//         },
//         {
//             id: 'forest-whisper',
//             name: 'Special Oud',
//             tagline: 'Earthy, green & serene',
//             description: 'Immerse yourself in the tranquility of a deep forest, with notes of fresh moss, damp earth, and a subtle hint of pine.',
//             ingredients: ['Top: Pine Needles, Bergamot', 'Middle: Green Notes, Moss', 'Base: Sandalwood, Patchouli'],
//             price: 115,
//             image: 'assets/Special-Oud-Product.png',
//             images: ['assets/perfume10.jpeg', 'assets/perfume5.jpeg'],
//             reviews: [], sizes: ['50ml']
//         },
//         {
//             id: 'ruby-nectar',
//             name: 'Corporate',
//             tagline: 'Sweet, fruity & enchanting',
//             description: 'A luscious blend of ripe berries and sweet florals, creating a vibrant and irresistible fragrance, like a hidden garden in full bloom.',
//             ingredients: ['Top: Red Berries, Pear', 'Middle: Peony, Rose', 'Base: Vanilla, Amber'],
//             price: 125,
//             image: 'assets/Corporate-Product.png',
//             images: ['assets/perfume11.jpeg', 'assets/perfume6.jpeg'],
//             reviews: [], sizes: ['30ml', '50ml', '100ml']
//         },
//         {
//             id: 'amber-glow',
//             name: 'Nawab creed',
//             tagline: 'Warm, resinous & comforting',
//             description: 'Wrap yourself in the golden warmth of amber, infused with hints of vanilla and exotic spices for a truly comforting scent.',
//             ingredients: ['Top: Clove, Bergamot', 'Middle: Amber, Labdanum', 'Base: Vanilla, Benzoin'],
//             price: 145,
//             image: 'assets/Nawab-Creed-Product.png',
//             images: ['assets/perfume12.jpeg', 'assets/perfume7.jpeg'],
//             reviews: [], sizes: ['50ml', '100ml']
//         },
//         {
//             id: 'celestial-powder',
//             name: 'Nawab office',
//             tagline: 'Soft, powdery & elegant',
//             description: 'A delicate and sophisticated powdery scent, evoking images of stardust and ethereal beauty, with hints of iris and musk.',
//             ingredients: ['Top: Aldehydes', 'Middle: Iris, Violet', 'Base: Musk, Sandalwood'],
//             price: 100,
//             image: 'assets/Nawab-Office-Product.png',
//             images: ['assets/perfume13.jpeg', 'assets/perfume8.jpeg'],
//             reviews: [], sizes: ['30ml', '50ml']
//         },
//         {
//             id: 'mystic-leather',
//             name: 'Nawab Blue D',
//             tagline: 'Bold, smoky & intriguing',
//             description: 'A daring blend of rich leather and smoky woods, with a hint of something sweet and mysterious, for the adventurous spirit.',
//             ingredients: ['Top: Cardamom, Raspberry', 'Middle: Leather, Oudh', 'Base: Vetiver, Tobacco'],
//             price: 175,
//             image: 'assets/Nawab-BlueD-Product.png',
//             images: ['assets/perfume14.jpeg', 'assets/perfume9.jpeg'],
//             reviews: [], sizes: ['100ml']
//         },
//         {
//             id: 'green-fig',
//             name: 'Nawab T leather',
//             tagline: 'Crisp, leafy & earthy',
//             description: 'Captures the essence of a sun-drenched fig tree, with fresh green leaves, ripe fruit, and milky sap. A refreshing and unique aroma.',
//             ingredients: ['Top: Fig Leaf', 'Middle: Fig Fruit', 'Base: Fig Milk, Cedar'],
//             price: 90,
//             image: 'assets/Nawab-TLeather-Product.png',
//             images: ['assets/perfume15.jpeg', 'assets/perfume10.jpeg'],
//             reviews: [], sizes: ['30ml', '50ml']
//         },
//         {
//             id: 'spiced-vanilla',
//             name: 'Nawab H Boss',
//             tagline: 'Warm, sweet & inviting',
//             description: 'A comforting blend of creamy vanilla and aromatic spices, creating a cozy and alluring fragrance perfect for any season.',
//             ingredients: ['Top: Clove, Cinnamon', 'Middle: Vanilla Orchid', 'Base: Tonka Bean, Amber'],
//             price: 110,
//             image: 'assets/Nawab-HBoss-Product.png',
//             images: ['assets/perfume16.jpeg', 'assets/perfume11.jpeg'],
//             reviews: [], sizes: ['50ml', '100ml']
//         },
//         {
//             id: 'white-sandalwood',
//             name: 'Royal Oud',
//             tagline: 'Creamy, soft & woody',
//             description: 'A serene and meditative fragrance, featuring the smooth, creamy notes of white sandalwood, balanced by a touch of soft musk.',
//             ingredients: ['Top: Bergamot', 'Middle: Sandalwood, Jasmine', 'Base: White Musk, Cedar'],
//             price: 130,
//             image: 'assets/Royal-Oud-Product.png',
//             images: ['assets/perfume17.jpeg', 'assets/perfume12.jpeg'],
//             reviews: [], sizes: ['30ml', '50ml']
//         },
//         {
//             id: 'ocean-breeze',
//             name: 'Chocolate Musk',
//             tagline: 'Crisp, clean & refreshing',
//             description: 'Evokes the invigorating scent of salty sea air and fresh ocean currents, with a hint of aquatic florals.',
//             ingredients: ['Top: Sea Notes, Citrus', 'Middle: Jasmine, Marine', 'Base: Ambergris, Moss'],
//             price: 98,
//             image: 'assets/Chocolate-Musk-Product.png',
//             images: ['assets/perfume18.jpeg', 'assets/perfume13.jpeg'],
//             reviews: [], sizes: ['50ml']
//         },
//         {
//             id: 'peony-blush',
//             name: 'Nawab Begum',
//             tagline: 'Delicate, romantic & lush',
//             description: 'A tender and romantic fragrance, capturing the sweet, lush aroma of blooming peonies in a sun-drenched garden.',
//             ingredients: ['Top: Red Apple', 'Middle: Peony, Jasmine', 'Base: Suede'],
//             price: 108,
//             image: 'assets/Nawab-Begum-Female.png',
//             images: ['assets/perfume19.jpeg', 'assets/perfume14.jpeg'],
//             reviews: [], sizes: ['30ml', '50ml']
//         },
//         {
//             id: 'ebony-wood',
//             name: 'Nawabzadi',
//             tagline: 'Dark, smoky & intense',
//             description: 'A deep and mysterious woody scent, with notes of rich ebony, incense, and a subtle warmth, perfect for evening wear.',
//             ingredients: ['Top: Incense', 'Middle: Ebony Wood, Leather', 'Base: Patchouli, Amber'],
//             price: 155,
//             image: 'assets/Nawabzadi-Female.png',
//             images: ['assets/perfume20.jpeg', 'assets/perfume15.jpeg'],
//             reviews: [], sizes: ['50ml', '100ml']
//         },
//         {
//             id: 'wild-fig',
//             name: 'H.I.F.',
//             tagline: 'Sweet, green & vibrant',
//             description: 'A Mediterranean escape in a bottle, combining the sweetness of fig fruit with the freshness of fig leaves and a creamy coconut undertone.',
//             ingredients: ['Top: Fig Leaf, Grapefruit', 'Middle: Fig Fruit, Coconut', 'Base: Cedar, Tonka Bean'],
//             price: 118,
//             image: 'assets/HIF-Female.png',
//             images: ['assets/perfume21.jpeg', 'assets/perfume16.jpeg'],
//             reviews: [], sizes: ['30ml', '50ml']
//         },
//         {
//             id: 'cashmere-dream',
//             name: 'G Bloom',
//             tagline: 'Soft, comforting & luxurious',
//             description: 'A gentle and inviting fragrance, evoking the warmth of soft cashmere, with notes of delicate musk and subtle powdery florals.',
//             ingredients: ['Top: Bergamot', 'Middle: Iris, Violet', 'Base: Cashmere Woods, Musk'],
//             price: 132,
//             image: 'assets/G-Bloom-Female.png',
//             images: ['assets/perfume22.jpeg', 'assets/perfume17.jpeg'],
//             reviews: [], sizes: ['50ml']
//         },
//         {
//             id: 'saffron-rose',
//             name: 'Tommy G',
//             tagline: 'Spicy, floral & opulent',
//             description: 'A rich and luxurious blend of delicate rose petals infused with exotic saffron, creating a warm, inviting, and truly opulent scent.',
//             ingredients: ['Top: Saffron, Pear', 'Middle: Turkish Rose, Peony', 'Base: Oud, Patchouli, Amber'],
//             price: 160,
//             image: 'assets/Tommy-G-Female.png',
//             images: ['assets/perfume23.jpeg', 'assets/perfume18.jpeg'],
//             reviews: [], sizes: ['50ml', '100ml']
//         },
//         {
//             id: 'lemon-verbena',
//             name: 'Bomb S',
//             tagline: 'Crisp, herbal & uplifting',
//             description: 'A refreshingly zesty and green fragrance, highlighting the bright, lemony aroma of verbena leaves, perfect for an energetic boost.',
//             ingredients: ['Top: Lemon, Mandarin', 'Middle: Verbena, Petitgrain', 'Base: Musk, Cedar'],
//             price: 88,
//             image: 'assets/Bomb-S-Female.png',
//             images: ['assets/perfume24.jpeg', 'assets/perfume19.jpeg'],
//             reviews: [], sizes: ['30ml']
//         },
//         {
//             id: 'tobacco-leaf',
//             name: 'G Gold',
//             tagline: 'Rich, aromatic & warm',
//             description: 'A comforting and sophisticated scent, featuring dried tobacco leaves blended with warm spices and creamy vanilla for a luxurious aroma.',
//             ingredients: ['Top: Tobacco Leaf, Spices', 'Middle: Vanilla, Cocoa', 'Base: Tonka Bean, Woody Notes'],
//             price: 170,
//             image: 'assets/Ggold-Female.png',
//             images: ['assets/perfume25.jpeg', 'assets/perfume20.jpeg'],
//             reviews: [], sizes: ['50ml', '100ml']
//         },
//         {
//             id: 'ginger-lily',
//             name: 'Flora Moves',
//             tagline: 'Exotic, spicy & floral',
//             description: 'An enchanting floral fragrance with the spicy warmth of ginger and the creamy sweetness of lily, creating an exotic and captivating experience.',
//             ingredients: ['Top: Ginger, Cardamom', 'Middle: Lily, Tuberose', 'Base: Sandalwood, Vanilla'],
//             price: 128,
//             image: 'assets/Flora-Moves-Female.png',
//             images: ['assets/perfume26.jpeg', 'assets/perfume21.jpeg'],
//             reviews: [], sizes: ['30ml', '50ml']
//         },
//         {
//             id: 'smoky-vetiver',
//             name: 'G Flora by Nawab',
//             tagline: 'Earthy, dark & mysterious',
//             description: 'A deep and sophisticated fragrance grounded in the smoky, earthy notes of vetiver, enhanced with hints of rich spice and warm amber.',
//             ingredients: ['Top: Bergamot, Black Pepper', 'Middle: Vetiver, Cedar', 'Base: Amber, Incense'],
//             price: 148,
//             image: 'assets/GFlora-By-Nawab-Female.png',
//             images: ['assets/perfume27.jpeg', 'assets/perfume22.jpeg'],
//             reviews: [], sizes: ['50ml', '100ml']
//         }
//     ];

//     // --- Cart Functions (No change here, as logic is sound) ---
//     let cart = JSON.parse(localStorage.getItem('noirOrCart')) || [];

//     function saveCart() {
//         localStorage.setItem('noirOrCart', JSON.stringify(cart));
//         updateCartUI();
//     }

//     function findProductById(id) {
//         return products.find(p => p.id === id);
//     }

//     function updateCartUI() {
//         if (cartItemsContainer) {
//             cartItemsContainer.innerHTML = '';
//         }
//         let subtotal = 0;
//         let totalItems = 0;

//         if (cart.length === 0) {
//             if (cartItemsContainer) {
//                 cartItemsContainer.innerHTML = '<p class="text-center text-muted mt-5">Your cart is empty.</p>';
//             }
//         } else {
//             cart.forEach(item => {
//                 const product = findProductById(item.id);
//                 if (!product) return;

//                 const itemTotal = product.price * item.quantity;
//                 subtotal += itemTotal;
//                 totalItems += item.quantity;

//                 const cartItemDiv = document.createElement('div');
//                 cartItemDiv.classList.add('cart-item', 'd-flex', 'align-items-center');
//                 cartItemDiv.innerHTML = `
//                     <img src="${product.image}" alt="${product.name}" class="img-fluid">
//                     <div class="cart-item-details flex-grow-1">
//                         <h6 class="mb-0 text-white">${product.name}</h6>
//                         <small class="text-muted">${item.size ? item.size + ' / ' : ''}Rs. ${product.price.toLocaleString()}</small>
//                         <div class="quantity-controls d-flex align-items-center mt-1">
//                             <button class="btn btn-sm decrease-qty" data-id="${item.id}" data-size="${item.size || ''}">-</button>
//                             <input type="text" class="form-control form-control-sm text-center mx-2" value="${item.quantity}" readonly>
//                             <button class="btn btn-sm increase-qty" data-id="${item.id}" data-size="${item.size || ''}">+</button>
//                             <button class="btn btn-sm btn-link text-danger ms-auto remove-item" data-id="${item.id}" data-size="${item.size || ''}">
//                                 <i class="fas fa-trash-alt"></i>
//                             </button>
//                         </div>
//                     </div>
//                 `;
//                 if (cartItemsContainer) {
//                     cartItemsContainer.appendChild(cartItemDiv);
//                 }
//             });
//         }
//         if (cartSubtotalSpan) {
//             cartSubtotalSpan.textContent = `Rs. ${subtotal.toLocaleString()}`;
//         }
//         if (cartCountSpan) {
//             cartCountSpan.textContent = totalItems;
//         }

//         document.querySelectorAll('.increase-qty').forEach(button => {
//             button.onclick = (e) => updateQuantity(e.target.dataset.id, e.target.dataset.size, 1);
//         });
//         document.querySelectorAll('.decrease-qty').forEach(button => {
//             button.onclick = (e) => updateQuantity(e.target.dataset.id, e.target.dataset.size, -1);
//         });
//         document.querySelectorAll('.remove-item').forEach(button => {
//             button.onclick = (e) => removeItem(e.target.dataset.id || e.target.closest('button').dataset.id, e.target.dataset.size || e.target.closest('button').dataset.size);
//         });

//         if (window.location.pathname.includes('/checkout.html')) { // Updated path
//             updateCheckoutSummary();
//         }
//     }

//     function addToCart(productId, quantity = 1, size = null) {
//         const product = findProductById(productId);
//         if (!product) {
//             console.error('Product not found:', productId);
//             return;
//         }

//         const existingItemIndex = cart.findIndex(item => item.id === productId && item.size === size);

//         if (existingItemIndex > -1) {
//             cart[existingItemIndex].quantity += quantity;
//         } else {
//             cart.push({ id: productId, quantity: quantity, size: size });
//         }
//         saveCart();
//         if (cartSidebar) {
//             cartSidebar.classList.add('show');
//         }
//     }

//     function updateQuantity(productId, size, change) {
//         const itemIndex = cart.findIndex(item => item.id === productId && item.size === size);
//         if (itemIndex > -1) {
//             cart[itemIndex].quantity += change;
//             if (cart[itemIndex].quantity <= 0) {
//                 cart.splice(itemIndex, 1);
//             }
//             saveCart();
//         }
//     }

//     function removeItem(productId, size) {
//         cart = cart.filter(item => !(item.id === productId && item.size === size));
//         saveCart();
//     }

//     function clearCart() {
//         cart = [];
//         saveCart();
//     }

//     // --- Event Listeners for Global Elements (No change) ---
//     if (cartIcon) {
//         cartIcon.addEventListener('click', () => {
//             if (cartSidebar) {
//                 cartSidebar.classList.toggle('show');
//             }
//         });
//     }
//     if (closeCartBtn) {
//         closeCartBtn.addEventListener('click', () => {
//             if (cartSidebar) {
//                 cartSidebar.classList.remove('show');
//             }
//         });
//     }

//     if (navbarCollapse) {
//         navbarCollapse.querySelectorAll('.nav-link').forEach(link => {
//             link.addEventListener('click', () => {
//                 if (navbarCollapse.classList.contains('show')) {
//                     const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
//                     bsCollapse.hide();
//                 }
//             });
//         });
//     }

//     // --- Page Specific Logic ---

//     // Home Page: Smooth scroll for "Shop Now"
//     const shopNowBtn = document.querySelector('.hero-section .btn-gold');
//     if (shopNowBtn) {
//         shopNowBtn.addEventListener('click', (e) => {
//             e.preventDefault();
//             const featuredSection = document.getElementById('featured');
//             if (featuredSection) {
//                 featuredSection.scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//     }

//     // Home & Shop Pages: Add to Cart & Quick View
//     document.querySelectorAll('.add-to-cart-btn').forEach(button => {
//         button.addEventListener('click', (e) => {
//             const productId = e.target.dataset.productId;
//             addToCart(productId);
//         });
//     });

//     // Shop Page: Populate products dynamically
//     const productGrid = document.getElementById('productGrid');
//     if (productGrid) {
//         productGrid.innerHTML = '';
//         products.forEach(product => {
//             const productCard = document.createElement('div');
//             productCard.classList.add('col');
//             productCard.innerHTML = `
//                 <div class="product-card">
//                     <a href="/shop/${product.id}.html"><img src="${product.image}" alt="${product.name}" class="img-fluid mb-3"></a>
//                     <h3 class="mb-1 text-white">${product.name}</h3>
//                     <p class="tagline text-muted">${product.tagline}</p>
//                     <div class="price text-gold mb-3">Rs. ${product.price.toLocaleString()}</div>
//                     <div class="d-flex flex-column gap-2">
//                         <button class="btn btn-outline-gold btn-sm quick-view-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal" data-product-id="${product.id}">Quick View</button>
//                         <button class="btn btn-gold btn-sm add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
//                     </div>
//                 </div>
//             `;
//             productGrid.appendChild(productCard);
//         });

//         const quickViewModal = document.getElementById('quickViewModal');
//         if (quickViewModal) {
//             quickViewModal.addEventListener('show.bs.modal', (event) => {
//                 const button = event.relatedTarget;
//                 const productId = button.dataset.productId;
//                 const product = findProductById(productId);

//                 if (product) {
//                     quickViewModal.querySelector('.modal-title').textContent = product.name;
//                     quickViewModal.querySelector('.quick-view-image').src = product.image;
//                     quickViewModal.querySelector('.quick-view-image').alt = product.name;
//                     quickViewModal.querySelector('.quick-view-description').textContent = product.tagline;
//                     quickViewModal.querySelector('.quick-view-price').textContent = `Rs. ${product.price.toLocaleString()}`;

//                     const sizeSelect = quickViewModal.querySelector('.quick-view-size');
//                     if (sizeSelect) {
//                         sizeSelect.innerHTML = '';
//                         if (product.sizes && product.sizes.length > 0) {
//                             product.sizes.forEach(size => {
//                                 const option = document.createElement('option');
//                                 option.value = size;
//                                 option.textContent = size;
//                                 sizeSelect.appendChild(option);
//                             });
//                             sizeSelect.style.display = 'block';
//                             if (sizeSelect.closest('.mb-4')) sizeSelect.closest('.mb-4').style.display = 'block'; // Adjusted margin bottom class
//                         } else {
//                             sizeSelect.style.display = 'none';
//                             if (sizeSelect.closest('.mb-4')) sizeSelect.closest('.mb-4').style.display = 'none'; // Adjusted margin bottom class
//                         }
//                     }
//                     quickViewModal.querySelector('.quick-view-add-to-cart').dataset.productId = productId;
//                 }
//             });

//             quickViewModal.querySelector('.quick-view-add-to-cart').addEventListener('click', (e) => {
//                 const productId = e.target.dataset.productId;
//                 const sizeSelect = quickViewModal.querySelector('.quick-view-size');
//                 const selectedSize = sizeSelect && sizeSelect.style.display !== 'none' ? sizeSelect.value : null;
//                 addToCart(productId, 1, selectedSize);
//                 const modalInstance = bootstrap.Modal.getInstance(quickViewModal);
//                 modalInstance.hide();
//             });
//         }
//     }


//     // Product Detail Page Logic
//     const productDetailSection = document.querySelector('.product-detail-section');
//     if (productDetailSection) {
//         const pathSegments = window.location.pathname.split('/');
//         // Extract slug and remove .html extension
//         let productSlug = pathSegments[pathSegments.length - 1].replace('.html', '');

//         // Default for direct /shop.html access or if slug is missing/invalid
//         if (productSlug === 'shop' || productSlug === '') {
//             productSlug = 'rose-vintage'; // Default to first product
//         }

//         const product = findProductById(productSlug);

//         if (product) {
//             // Update Meta Tags and Title
//             const pageTitle = document.getElementById('pageTitle');
//             if(pageTitle) pageTitle.textContent = `${product.name} – Nawab's Perfumes Perfumes`;
//             document.querySelector('meta[name="description"]').setAttribute('content', product.description);
//             document.querySelector('meta[property="og:title"]').setAttribute('content', `${product.name} – Nawab's Perfumes Perfumes`);
//             document.querySelector('meta[property="og:description"]').setAttribute('content', product.tagline);
//             document.querySelector('meta[property="og:image"]').setAttribute('content', product.image);
//             document.querySelector('meta[property="og:url"]').setAttribute('content', window.location.href);


//             // Update Breadcrumb
//             const breadcrumbProductName = document.getElementById('breadcrumbProductName');
//             if(breadcrumbProductName) breadcrumbProductName.textContent = product.name;

//             // Main Product Info
//             const productDetailPageTitle = document.getElementById('productDetailPageTitle');
//             if(productDetailPageTitle) productDetailPageTitle.textContent = product.name;

//             const productDetailPageDesc = document.getElementById('productDetailPageDesc');
//             if(productDetailPageDesc) productDetailPageDesc.textContent = product.description;

//             const productDetailPagePrice = document.getElementById('productDetailPagePrice');
//             if(productDetailPagePrice) productDetailPagePrice.textContent = `Rs. ${product.price.toLocaleString()}`;

//             // Image Gallery
//             const mainProductImage = document.getElementById('mainProductImage');
//             const thumbnailGallery = document.getElementById('thumbnailGallery');
//             if (mainProductImage && thumbnailGallery) {
//                 mainProductImage.src = product.images[0];
//                 mainProductImage.alt = product.name;
//                 thumbnailGallery.innerHTML = '';
//                 product.images.forEach((imgSrc, index) => {
//                     const img = document.createElement('img');
//                     img.src = imgSrc;
//                     img.alt = `${product.name} - View ${index + 1}`;
//                     img.classList.add('img-fluid', 'me-2', 'mb-2', 'p-1');
//                     if (index === 0) img.classList.add('active');
//                     img.addEventListener('click', () => {
//                         mainProductImage.src = imgSrc;
//                         thumbnailGallery.querySelectorAll('img').forEach(i => i.classList.remove('active'));
//                         img.classList.add('active');
//                     });
//                     thumbnailGallery.appendChild(img);
//                 });
//             }

//             // Size Dropdown
//             const sizeSelect = document.getElementById('productSizeSelect');
//             if (sizeSelect) {
//                 sizeSelect.innerHTML = '';
//                 if (product.sizes && product.sizes.length > 0) {
//                     product.sizes.forEach(size => {
//                         const option = document.createElement('option');
//                         option.value = size;
//                         option.textContent = size;
//                         sizeSelect.appendChild(option);
//                     });
//                     sizeSelect.style.display = 'block';
//                     const sizeFormGroup = sizeSelect.closest('.form-group');
//                     if(sizeFormGroup) sizeFormGroup.style.display = 'block';
//                 } else {
//                     sizeSelect.style.display = 'none';
//                     const sizeFormGroup = sizeSelect.closest('.form-group');
//                     if(sizeFormGroup) sizeFormGroup.style.display = 'none';
//                 }
//             }


//             // Quantity Selector
//             const qtyInput = document.getElementById('productQtyInput');
//             const decreaseQtyBtn = document.getElementById('decreaseQty');
//             const increaseQtyBtn = document.getElementById('increaseQty');
//             if (qtyInput && decreaseQtyBtn && increaseQtyBtn) {
//                 decreaseQtyBtn.addEventListener('click', () => {
//                     let currentQty = parseInt(qtyInput.value);
//                     if (currentQty > 1) qtyInput.value = currentQty - 1;
//                 });
//                 increaseQtyBtn.addEventListener('click', () => {
//                     let currentQty = parseInt(qtyInput.value);
//                     qtyInput.value = currentQty + 1;
//                 });
//             }

//             // Add to Cart Button
//             const addToCartDetailBtn = document.getElementById('addToCartDetailBtn');
//             if (addToCartDetailBtn) {
//                 addToCartDetailBtn.addEventListener('click', () => {
//                     const quantity = parseInt(qtyInput ? qtyInput.value : 1);
//                     const size = sizeSelect && sizeSelect.style.display !== 'none' ? sizeSelect.value : null;
//                     addToCart(product.id, quantity, size);
//                 });
//             }

//             // Tabbed Content
//             const descriptionTabContent = document.getElementById('descriptionTabContent');
//             const ingredientsTabContent = document.getElementById('ingredientsTabContent');
//             const reviewsTabContent = document.getElementById('reviewsTabContent');

//             if (descriptionTabContent) descriptionTabContent.innerHTML = `<p>${product.description}</p>`;
//             if (ingredientsTabContent) {
//                 ingredientsTabContent.innerHTML = '<ul>' + product.ingredients.map(item => `<li>${item}</li>`).join('') + '</ul>';
//             }
//             if (reviewsTabContent) {
//                 reviewsTabContent.innerHTML = '';
//                 if (product.reviews && product.reviews.length > 0) {
//                     product.reviews.forEach(review => {
//                         reviewsTabContent.innerHTML += `
//                             <div class="review mb-4 pb-3 border-bottom border-dark-gray">
//                                 <div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
//                                 <div class="reviewer-name text-white mb-1">${review.user}</div>
//                                 <p class="text-light-gray">${review.text}</p>
//                             </div>
//                         `;
//                     });
//                 } else {
//                     reviewsTabContent.innerHTML += `<p class="text-center text-muted">No reviews yet. Be the first!</p>`;
//                 }
//                 reviewsTabContent.innerHTML += `
//                     <h5 class="mt-4 mb-3 text-white">Write a Review</h5>
//                     <form class="review-form">
//                         <div class="form-group">
//                             <label for="reviewName" class="form-label">Name</label>
//                             <input type="text" class="form-control" id="reviewName" placeholder="Your Name" required>
//                         </div>
//                         <div class="form-group">
//                             <label for="reviewEmail" class="form-label">Email</label>
//                             <input type="email" class="form-control" id="reviewEmail" placeholder="Your Email" required>
//                         </div>
//                         <div class="form-group">
//                             <label for="reviewRating" class="form-label">Rating</label>
//                             <select class="form-select" id="reviewRating" required>
//                                 <option value="">Select a rating</option>
//                                 <option value="5">5 Stars - Excellent</option>
//                                 <option value="4">4 Stars - Very Good</option>
//                                 <option value="3">3 Stars - Good</option>
//                                 <option value="2">2 Stars - Fair</option>
//                                 <option value="1">1 Star - Poor</option>
//                             </select>
//                         </div>
//                         <div class="form-group">
//                             <label for="reviewComments" class="form-label">Comments</label>
//                             <textarea class="form-control" id="reviewComments" rows="5" placeholder="Write your review here..." required></textarea>
//                         </div>
//                         <button type="submit" class="btn btn-gold">Submit Review</button>
//                     </form>
//                 `;
//                 reviewsTabContent.querySelector('.review-form').addEventListener('submit', (e) => {
//                     e.preventDefault();
//                     alert('Thank you for your review! (Prototype: Review submitted)');
//                     e.target.reset();
//                 });
//             }

//             // Recommended Products (Simple Carousel/Grid)
//             const recommendedProductsContainer = document.getElementById('recommendedProductsContainer');
//             if(recommendedProductsContainer) {
//                 recommendedProductsContainer.innerHTML = '';
//                 const otherProducts = products.filter(p => p.id !== product.id);
//                 const shuffled = otherProducts.sort(() => 0.5 - Math.random());
//                 const selected = shuffled.slice(0, 4);

//                 selected.forEach(recProduct => {
//                     recommendedProductsContainer.innerHTML += `
//                         <div class="col">
//                             <div class="product-card">
//                                 <a href="/shop/${recProduct.id}.html"><img src="${recProduct.image}" alt="${recProduct.name}" class="img-fluid mb-3"></a>
//                                 <h3 class="product-name">${recProduct.name}</h3>
//                                 <p class="product-desc">${recProduct.tagline}</p>
//                                 <h4 class="product-price">Rs. ${recProduct.price.toLocaleString()}</h4>
//                                 <a href="/shop/${recProduct.id}.html" class="btn btn-outline-gold mt-3">View Details</a>
//                             </div>
//                         </div>
//                     `;
//                 });
//             }

//         } else {
//             console.error('Product not found for slug:', productSlug);
//             if (productDetailSection) {
//                 productDetailSection.innerHTML = `<div class="container-fluid main-content text-center py-5">
//                     <h1 class="text-gold">Product Not Found</h1>
//                     <p class="text-light-gray">The perfume you are looking for does not exist or has been moved.</p>
//                     <a href="/shop.html" class="btn btn-gold mt-4">Browse All Perfumes</a>
//                 </div>`;
//             }
//         }
//     }

    // // Checkout Page: Populate order summary and handle form submission (No change)
    // const checkoutOrderSummary = document.getElementById('checkoutOrderSummary');
    // const checkoutForm = document.getElementById('checkoutForm');
    // const SHIPPING_COST = 250;

    // function updateCheckoutSummary() {
    //     if (!checkoutOrderSummary) return;

    //     checkoutOrderSummary.innerHTML = `
    //         <h5 class="mb-4">Order Summary</h5>
    //         <div class="item-list"></div>
    //         <div class="totals-row">
    //             <span>Subtotal:</span>
    //             <span id="checkoutSubtotal"></span>
    //         </div>
    //         <div class="totals-row">
    //             <span>Shipping:</span>
    //             <span>Rs. ${SHIPPING_COST.toLocaleString()}</span>
    //         </div>
    //         <div class="totals-row total">
    //             <span>Total:</span>
    //             <span id="checkoutTotal"></span>
    //         </div>
    //     `;

    //     const itemListDiv = checkoutOrderSummary.querySelector('.item-list');
    //     let subtotal = 0;

    //     if (cart.length === 0) {
    //         itemListDiv.innerHTML = '<p class="text-center text-muted">Your cart is empty.</p>';
    //         if (checkoutForm) {
    //             const placeOrderBtn = checkoutForm.querySelector('.btn-gold');
    //             if (placeOrderBtn) placeOrderBtn.disabled = true;
    //         }
    //     } else {
    //         cart.forEach(item => {
    //             const product = findProductById(item.id);
    //             if (!product) return;

    //             const itemTotal = product.price * item.quantity;
    //             subtotal += itemTotal;

    //             itemListDiv.innerHTML += `
    //                 <div class="cart-item d-flex align-items-center">
    //                     <img src="${product.image}" alt="${product.name}" class="img-fluid">
    //                     <div class="cart-item-details flex-grow-1">
    //                         <h6 class="mb-0 text-white">${product.name}</h6>
    //                         <small class="text-muted">${item.size ? item.size + ' / ' : ''}Qty: ${item.quantity} x Rs. ${product.price.toLocaleString()}</small>
    //                     </div>
    //                     <span class="text-gold">Rs. ${itemTotal.toLocaleString()}</span>
    //                 </div>
    //             `;
    //         });
    //         checkoutOrderSummary.querySelector('#checkoutSubtotal').textContent = `Rs. ${subtotal.toLocaleString()}`;
    //         checkoutOrderSummary.querySelector('#checkoutTotal').textContent = `Rs. ${(subtotal + SHIPPING_COST).toLocaleString()}`;
    //         if (checkoutForm) {
    //             const placeOrderBtn = checkoutForm.querySelector('.btn-gold');
    //             if (placeOrderBtn) placeOrderBtn.disabled = false;
    //         }
    //     }
    // }

    // if (window.location.pathname.includes('/checkout.html')) { // Updated path
    //     updateCheckoutSummary();

    //     if (checkoutForm) {
    //         checkoutForm.addEventListener('submit', (e) => {
    //             e.preventDefault();

    //             const requiredFields = checkoutForm.querySelectorAll('[required]');
    //             let allValid = true;
    //             requiredFields.forEach(field => {
    //                 if (!field.value.trim()) {
    //                     field.classList.add('is-invalid');
    //                     allValid = false;
    //                 } else {
    //                     field.classList.remove('is-invalid');
    //                 }
    //             });

    //             if (!allValid) {
    //                 alert('Please fill in all required fields.');
    //                 return;
    //             }

    //             const orderDetails = {
    //                 customer: {
    //                     name: document.getElementById('fullName').value,
    //                     phone: document.getElementById('phoneNumber').value,
    //                     email: document.getElementById('emailAddress') ? document.getElementById('emailAddress').value : 'N/A',
    //                 },
    //                 shippingAddress: {
    //                     street: document.getElementById('streetAddress').value,
    //                     city: document.getElementById('city').value,
    //                     postalCode: document.getElementById('postalCode').value,
    //                     country: document.getElementById('country').value,
    //                     instructions: document.getElementById('specialInstructions').value,
    //                 },
    //                 items: cart.map(item => {
    //                     const product = findProductById(item.id);
    //                     return {
    //                         id: item.id,
    //                         name: product.name,
    //                         quantity: item.quantity,
    //                         price: product.price,
    //                         size: item.size,
    //                         total: product.price * item.quantity
    //                     };
    //                 }),
    //                 subtotal: parseFloat(cartSubtotalSpan.textContent.replace('Rs. ', '').replace(/,/g, '')),
    //                 shippingCost: SHIPPING_COST,
    //                 total: parseFloat(checkoutOrderSummary.querySelector('#checkoutTotal').textContent.replace('Rs. ', '').replace(/,/g, '')),
    //                 paymentMethod: 'Cash on Delivery',
    //                 orderId: 'ABC' + Math.floor(Math.random() * 900000 + 100000)
    //             };

    //             console.log('Order Placed:', orderDetails);

    //             const orderSuccessModalElement = document.getElementById('orderSuccessModal');
    //             if(orderSuccessModalElement) {
    //                 const orderSuccessModal = new bootstrap.Modal(orderSuccessModalElement);
    //                 const orderIdSpan = document.getElementById('orderIdDisplay');
    //                 if(orderIdSpan) orderIdSpan.textContent = orderDetails.orderId;
    //                 orderSuccessModal.show();
    //             }

    //             clearCart();
    //         });
    //     }
    // }


    // // Contact Page: Form Submission (No change)
    // const contactForm = document.getElementById('contactForm');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         alert('Thank you for your message! We will get back to you within 24 hours. (Prototype: Message sent)');
    //         contactForm.reset();
    //     });
    // }

    // // Newsletter Signup (Home Page) (No change)
    // const newsletterForm = document.getElementById('newsletterForm');
    // if (newsletterForm) {
    //     newsletterForm.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         const emailInput = newsletterForm.querySelector('input[type="email"]');
    //         if (emailInput) {
    //             const email = emailInput.value;
    //             alert(`Thank you for subscribing, ${email}! You'll receive updates. (Prototype: Email submitted)`);
    //             newsletterForm.reset();
    //         }
    //     });
    // }

//     updateCartUI();
// });




































document.addEventListener('DOMContentLoaded', () => {
    // --- Global Elements ---
    const cartIcon = document.getElementById('cartIcon');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCartBtn = document.getElementById('closeCart');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartSubtotalSpan = document.getElementById('cartSubtotal');
    const cartCountSpan = document.getElementById('cartCount');

    // --- Product Data ---
    const products = [
        // --- Men's Collection ---
        { id: 'rose-vintage', name: 'Nawab Saheb', tagline: 'Timeless floral elegance', description: 'A classic, sophisticated rose fragrance...', ingredients: ['...'], price: 120, image: 'assets/Nawab-Saheb-Product.png', images: ['...'], reviews: ['...'], sizes: ['30ml', '50ml', '100ml'], category: 'men' },
        { id: 'oud-elixir', name: 'Nawabzada', tagline: 'Mysterious, deep & captivating', description: 'An enchanting blend of rare Oud wood...', ingredients: ['...'], price: 180, image: 'assets/Nawabzada-Product.png', images: ['...'], reviews: ['...'], sizes: ['50ml', '100ml'], category: 'men' },
        { id: 'citrus-bloom', name: 'Kingdom', tagline: 'Fresh, vibrant & invigorating', description: 'A burst of fresh citrus notes...', ingredients: ['...'], price: 95, image: 'assets/kingdom-Product.png', images: ['...'], reviews: ['...'], sizes: ['30ml', '50ml'], category: 'men' },
        { id: 'velvet-night', name: 'Time less', tagline: 'Rich, sensual & alluring', description: 'A deep, mysterious fragrance...', ingredients: ['...'], price: 150, image: 'assets/Timeless-Product.png', images: ['...'], reviews: ['...'], sizes: ['50ml', '100ml'], category: 'men' },
        { id: 'aqua-dream', name: 'Era', tagline: 'Clean, crisp & refreshing', description: 'An invigorating oceanic scent...', ingredients: ['...'], price: 110, image: 'assets/Era-Product.png', images: ['...'], reviews: ['...'], sizes: ['30ml', '50ml'], category: 'men' },
        { id: 'spiced-saffron', name: 'Aura', tagline: 'Warm, exotic & inviting', description: 'A captivating blend of warm spices...', ingredients: ['...'], price: 135, image: 'assets/Aura-Product.png', images: ['...'], reviews: ['...'], sizes: ['50ml', '100ml'], category: 'men' },
        { id: 'golden-dawn', name: 'Crush', tagline: 'Radiant & uplifting citrus', description: 'Awaken your senses with this bright...', ingredients: ['...'], price: 105, image: 'assets/Crush-Product.png', images: ['...'], reviews: [], sizes: ['30ml', '50ml'], category: 'men' },
        { id: 'midnight-bloom', name: 'VIP Gold', tagline: 'Enigmatic & sophisticated floral', description: 'A captivating nocturnal floral...', ingredients: ['...'], price: 140, image: 'assets/VipGold-Product.png', images: ['...'], reviews: [], sizes: ['50ml', '100ml'], category: 'men' },
        { id: 'desert-spice', name: 'Cool', tagline: 'Warm, arid & adventurous', description: 'Experience the dry warmth of desert spices...', ingredients: ['...'], price: 165, image: 'assets/Cool-Product.png', images: ['...'], reviews: [], sizes: ['50ml', '100ml'], category: 'men' },
        { id: 'silver-mist', name: 'White Oud Premium', tagline: 'Cool, ethereal & subtle', description: 'A light, airy scent reminiscent...', ingredients: ['...'], price: 85, image: 'assets/White-Oud-Premium.png', images: ['...'], reviews: [], sizes: ['30ml', '50ml'], category: 'men' },
        { id: 'forest-whisper', name: 'Special Oud', tagline: 'Earthy, green & serene', description: 'Immerse yourself in the tranquility...', ingredients: ['...'], price: 115, image: 'assets/Special-Oud-Product.png', images: ['...'], reviews: [], sizes: ['50ml'], category: 'men' },
        { id: 'ruby-nectar', name: 'Corporate', tagline: 'Sweet, fruity & enchanting', description: 'A luscious blend of ripe berries...', ingredients: ['...'], price: 125, image: 'assets/Corporate-Product.png', images: ['...'], reviews: [], sizes: ['30ml', '50ml', '100ml'], category: 'men' },
        { id: 'amber-glow', name: 'Nawab creed', tagline: 'Warm, resinous & comforting', description: 'Wrap yourself in the golden warmth...', ingredients: ['...'], price: 145, image: 'assets/Nawab-Creed-Product.png', images: ['...'], reviews: [], sizes: ['50ml', '100ml'], category: 'men' },
        { id: 'celestial-powder', name: 'Nawab office', tagline: 'Soft, powdery & elegant', description: 'A delicate and sophisticated powdery scent...', ingredients: ['...'], price: 100, image: 'assets/Nawab-Office-Product.png', images: ['...'], reviews: [], sizes: ['30ml', '50ml'], category: 'men' },
        { id: 'mystic-leather', name: 'Nawab Blue D', tagline: 'Bold, smoky & intriguing', description: 'A daring blend of rich leather...', ingredients: ['...'], price: 175, image: 'assets/Nawab-BlueD-Product.png', images: ['...'], reviews: [], sizes: ['100ml'], category: 'men' },
        { id: 'green-fig', name: 'Nawab T leather', tagline: 'Crisp, leafy & earthy', description: 'Captures the essence of a sun-drenched fig tree...', ingredients: ['...'], price: 90, image: 'assets/Nawab-TLeather-Product.png', images: ['...'], reviews: [], sizes: ['30ml', '50ml'], category: 'men' },
        { id: 'spiced-vanilla', name: 'Nawab H Boss', tagline: 'Warm, sweet & inviting', description: 'A comforting blend of creamy vanilla...', ingredients: ['...'], price: 110, image: 'assets/Nawab-HBoss-Product.png', images: ['...'], reviews: [], sizes: ['50ml', '100ml'], category: 'men' },
        { id: 'white-sandalwood', name: 'Royal Oud', tagline: 'Creamy, soft & woody', description: 'A serene and meditative fragrance...', ingredients: ['...'], price: 130, image: 'assets/Royal-Oud-Product.png', images: ['...'], reviews: [], sizes: ['30ml', '50ml'], category: 'men' },
        { id: 'ocean-breeze', name: 'Chocolate Musk', tagline: 'Crisp, clean & refreshing', description: 'Evokes the invigorating scent...', ingredients: ['...'], price: 98, image: 'assets/Chocolate-Musk-Product.png', images: ['...'], reviews: [], sizes: ['50ml'], category: 'men' },
        
        // --- Women's Collection ---
        { id: 'peony-blush', name: 'Nawab Begum', tagline: 'Delicate, romantic & lush', description: 'A tender and romantic fragrance...', ingredients: ['...'], price: 108, image: 'assets/Nawab-Begum-Female.png', images: ['...'], reviews: [], sizes: ['30ml', '50ml'], category: 'women' },
        { id: 'ebony-wood', name: 'Nawabzadi', tagline: 'Dark, smoky & intense', description: 'A deep and mysterious woody scent...', ingredients: ['...'], price: 155, image: 'assets/Nawabzadi-Female.png', images: ['...'], reviews: [], sizes: ['50ml', '100ml'], category: 'women' },
        { id: 'wild-fig', name: 'H.I.F.', tagline: 'Sweet, green & vibrant', description: 'A Mediterranean escape in a bottle...', ingredients: ['...'], price: 118, image: 'assets/HIF-Female.png', images: ['...'], reviews: [], sizes: ['30ml', '50ml'], category: 'women' },
        { id: 'cashmere-dream', name: 'G Bloom', tagline: 'Soft, comforting & luxurious', description: 'A gentle and inviting fragrance...', ingredients: ['...'], price: 132, image: 'assets/G-Bloom-Female.png', images: ['...'], reviews: [], sizes: ['50ml'], category: 'women' },
        { id: 'saffron-rose', name: 'Tommy G', tagline: 'Spicy, floral & opulent', description: 'A rich and luxurious blend...', ingredients: ['...'], price: 160, image: 'assets/Tommy-G-Female.png', images: ['...'], reviews: [], sizes: ['50ml', '100ml'], category: 'women' },
        { id: 'lemon-verbena', name: 'Bomb S', tagline: 'Crisp, herbal & uplifting', description: 'A refreshingly zesty and green fragrance...', ingredients: ['...'], price: 88, image: 'assets/Bomb-S-Female.png', images: ['...'], reviews: [], sizes: ['30ml'], category: 'women' },
        { id: 'tobacco-leaf', name: 'G Gold', tagline: 'Rich, aromatic & warm', description: 'A comforting and sophisticated scent...', ingredients: ['...'], price: 170, image: 'assets/Ggold-Female.png', images: ['...'], reviews: [], sizes: ['50ml', '100ml'], category: 'women' },
        { id: 'ginger-lily', name: 'Flora Moves', tagline: 'Exotic, spicy & floral', description: 'An enchanting floral fragrance...', ingredients: ['...'], price: 128, image: 'assets/Flora-Moves-Female.png', images: ['...'], reviews: [], sizes: ['30ml', '50ml'], category: 'women' },
        { id: 'smoky-vetiver', name: 'G Flora by Nawab', tagline: 'Earthy, dark & mysterious', description: 'A deep and sophisticated fragrance...', ingredients: ['...'], price: 148, image: 'assets/GFlora-By-Nawab-Female.png', images: ['...'], reviews: [], sizes: ['50ml', '100ml'], category: 'women' }
    ];

    // --- Cart Functions ---
    let cart = JSON.parse(localStorage.getItem('noirOrCart')) || [];

    function saveCart() {
        localStorage.setItem('noirOrCart', JSON.stringify(cart));
        updateCartUI();
    }

    function findProductById(id) {
        return products.find(p => p.id === id);
    }

    function updateCartUI() {
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';
            let subtotal = 0;
            let totalItems = 0;

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p class="text-center text-muted mt-5">Your cart is empty.</p>';
            } else {
                cart.forEach(item => {
                    const product = findProductById(item.id);
                    if (!product) return;
                    const itemTotal = product.price * item.quantity;
                    subtotal += itemTotal;
                    totalItems += item.quantity;
                    const cartItemDiv = document.createElement('div');
                    cartItemDiv.classList.add('cart-item', 'd-flex', 'align-items-center');
                    cartItemDiv.innerHTML = `
                        <img src="${product.image}" alt="${product.name}" class="img-fluid">
                        <div class="cart-item-details flex-grow-1">
                            <h6 class="mb-0 text-white">${product.name}</h6>
                            <small class="text-muted">${item.size ? item.size + ' / ' : ''}Rs. ${product.price.toLocaleString()}</small>
                            <div class="quantity-controls d-flex align-items-center mt-1">
                                <button class="btn btn-sm decrease-qty" data-id="${item.id}" data-size="${item.size || ''}">-</button>
                                <span class="mx-2 text-white">${item.quantity}</span>
                                <button class="btn btn-sm increase-qty" data-id="${item.id}" data-size="${item.size || ''}">+</button>
                                <button class="btn btn-sm btn-link text-danger ms-auto remove-item" data-id="${item.id}" data-size="${item.size || ''}">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>`;
                    cartItemsContainer.appendChild(cartItemDiv);
                });
            }
            if (cartSubtotalSpan) cartSubtotalSpan.textContent = `Rs. ${subtotal.toLocaleString()}`;
            if (cartCountSpan) cartCountSpan.textContent = totalItems;
        }

        if (window.location.pathname.includes('/checkout.html')) {
            updateCheckoutSummary();
        }
    }

    function addToCart(productId, quantity = 1, size = null) {
        const product = findProductById(productId);
        if (!product) return;

        if (product.sizes && product.sizes.length > 0 && size === null) {
            size = product.sizes[0];
        }

        const existingItemIndex = cart.findIndex(item => item.id === productId && item.size === size);
        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            cart.push({ id: productId, quantity, size });
        }
        saveCart();
        if (cartSidebar) cartSidebar.classList.add('show');
    }

    function updateQuantity(productId, size, change) {
        const targetSize = size === 'null' ? null : size;
        const itemIndex = cart.findIndex(item => item.id === productId && item.size === targetSize);
        if (itemIndex > -1) {
            cart[itemIndex].quantity += change;
            if (cart[itemIndex].quantity <= 0) {
                cart.splice(itemIndex, 1);
            }
            saveCart();
        }
    }

    function removeItem(productId, size) {
        const targetSize = size === 'null' ? null : size;
        cart = cart.filter(item => !(item.id === productId && item.size === targetSize));
        saveCart();
    }

    function clearCart() {
        cart = [];
        saveCart();
    }

    // --- Global Event Listeners ---
    if (cartIcon) cartIcon.addEventListener('click', () => cartSidebar.classList.toggle('show'));
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => cartSidebar.classList.remove('show'));

    // --- Cart Item Event Delegation ---
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (e) => {
            const increaseBtn = e.target.closest('.increase-qty');
            const decreaseBtn = e.target.closest('.decrease-qty');
            const removeBtn = e.target.closest('.remove-item');

            if (increaseBtn) {
                updateQuantity(increaseBtn.dataset.id, increaseBtn.dataset.size, 1);
            } else if (decreaseBtn) {
                updateQuantity(decreaseBtn.dataset.id, decreaseBtn.dataset.size, -1);
            } else if (removeBtn) {
                removeItem(removeBtn.dataset.id, removeBtn.dataset.size);
            }
        });
    }

    // --- Checkout Page Logic (UPDATED FOR WEB3FORMS) ---
    const checkoutOrderSummary = document.getElementById('checkoutOrderSummary');
    const checkoutForm = document.getElementById('checkoutForm');
    const SHIPPING_COST = 250;

    function updateCheckoutSummary() {
        if (!checkoutOrderSummary) return;

        checkoutOrderSummary.innerHTML = `
            <h5 class="mb-4">Order Summary</h5>
            <div class="item-list"></div>
            <div class="totals-row">
                <span>Subtotal:</span>
                <span id="checkoutSubtotal"></span>
            </div>
            <div class="totals-row">
                <span>Shipping:</span>
                <span>Rs. ${SHIPPING_COST.toLocaleString()}</span>
            </div>
            <div class="totals-row total">
                <span>Total:</span>
                <span id="checkoutTotal"></span>
            </div>
        `;

        const itemListDiv = checkoutOrderSummary.querySelector('.item-list');
        let subtotal = 0;

        if (cart.length === 0) {
            itemListDiv.innerHTML = '<p class="text-center text-muted">Your cart is empty.</p>';
            const placeOrderBtn = checkoutForm?.querySelector('button[type="submit"]');
            if (placeOrderBtn) placeOrderBtn.disabled = true;
        } else {
            cart.forEach(item => {
                const product = findProductById(item.id);
                if (!product) return;

                const itemTotal = product.price * item.quantity;
                subtotal += itemTotal;

                itemListDiv.innerHTML += `
                    <div class="cart-item d-flex align-items-center">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid">
                        <div class="cart-item-details flex-grow-1">
                            <h6 class="mb-0 text-white">${product.name}</h6>
                            <small class="text-muted">${item.size ? item.size + ' / ' : ''}Qty: ${item.quantity} x Rs. ${product.price.toLocaleString()}</small>
                        </div>
                        <span class="text-gold">Rs. ${itemTotal.toLocaleString()}</span>
                    </div>
                `;
            });
            checkoutOrderSummary.querySelector('#checkoutSubtotal').textContent = `Rs. ${subtotal.toLocaleString()}`;
            checkoutOrderSummary.querySelector('#checkoutTotal').textContent = `Rs. ${(subtotal + SHIPPING_COST).toLocaleString()}`;
            const placeOrderBtn = checkoutForm?.querySelector('button[type="submit"]');
            if (placeOrderBtn) placeOrderBtn.disabled = false;
        }
    }

    if (window.location.pathname.includes('/checkout.html')) {
        updateCheckoutSummary();

        if (checkoutForm) {
            checkoutForm.addEventListener('submit', async (e) => {
                e.preventDefault(); // Stop the form from submitting normally

                // 1. Validate required fields
                let allValid = true;
                checkoutForm.querySelectorAll('[required]').forEach(field => {
                    if (!field.value.trim()) {
                        field.classList.add('is-invalid');
                        allValid = false;
                    } else {
                        field.classList.remove('is-invalid');
                    }
                });

                if (!allValid) {
                    alert('Please fill in all required shipping details.');
                    return;
                }

                const submitButton = checkoutForm.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.textContent = 'Placing Order...';

                // 2. Prepare order details for the email
                const orderId = 'NW' + Math.floor(Math.random() * 900000 + 100000);
                const subtotal = cart.reduce((acc, item) => acc + findProductById(item.id).price * item.quantity, 0);
                const total = subtotal + SHIPPING_COST;

                let orderSummaryText = cart.map(item => {
                    const p = findProductById(item.id);
                    return `${item.quantity} x ${p.name} (${item.size || 'Standard Size'}) @ Rs. ${p.price.toLocaleString()} each`;
                }).join('\n'); // Use newline for a clean list in the email

                orderSummaryText += `\n-----------------------------------`;
                orderSummaryText += `\nSubtotal: Rs. ${subtotal.toLocaleString()}`;
                orderSummaryText += `\nShipping: Rs. ${SHIPPING_COST.toLocaleString()}`;
                orderSummaryText += `\nTOTAL: Rs. ${total.toLocaleString()}`;

                // 3. Populate the hidden form fields
                document.getElementById('formOrderId').value = orderId;
                document.getElementById('formOrderSummary').value = orderSummaryText;
                document.getElementById('formTotalAmount').value = `Rs. ${total.toLocaleString()}`;
                
                // Add a subject line for the email
                const formData = new FormData(checkoutForm);
                formData.append("subject", `New Order From Nawab's Perfumes - #${orderId}`);

                // 4. Submit the form data using Fetch API
                try {
                    const response = await fetch('https://api.web3forms.com/submit', {
                        method: 'POST',
                        body: formData
                    });

                    const result = await response.json();

                    if (result.success) {
                        // 5. If submission is successful, show the modal and clear the cart
                        const orderSuccessModal = new bootstrap.Modal(document.getElementById('orderSuccessModal'));
                        document.getElementById('orderIdDisplay').textContent = `#${orderId}`;
                        orderSuccessModal.show();
                        clearCart();
                        checkoutForm.reset();
                    } else {
                        console.error("Error from Web3Forms:", result);
                        alert("There was an error submitting your order. Please try again.");
                    }
                } catch (error) {
                    console.error("Network Error:", error);
                    alert("A network error occurred. Please check your connection and try again.");
                } finally {
                    // Re-enable the button regardless of success or failure
                    submitButton.disabled = false;
                    submitButton.textContent = 'Place Order';
                }
            });
        }
    }
    
    // --- The rest of your script (shop page logic, etc.) remains the same ---
    // ...
 // --- Shop Page Filtering and Pagination Logic ---
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
        const paginationContainer = document.getElementById('paginationContainer');
        const sortByFilter = document.getElementById('sortByFilter');
        const categoryFilter = document.getElementById('categoryFilter');
        const priceFilter = document.getElementById('priceFilter');

        let currentPage = 1;
        const itemsPerPage = 12;
        let currentProducts = [...products];

        function displayProducts(page) {
            productGrid.innerHTML = '';
            currentPage = page;
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const paginatedItems = currentProducts.slice(startIndex, endIndex);

            if (paginatedItems.length === 0) {
                productGrid.innerHTML = `<div class="col-12 text-center py-5"><p class="text-light-gray fs-4">No products found matching your criteria.</p></div>`;
                return;
            }

            paginatedItems.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('col');
                productCard.innerHTML = `
                    <div class="product-card">
                        <a href="/shop/${product.id}.html"><img src="${product.image}" alt="${product.name}" class="img-fluid mb-3"></a>
                        <h3 class="mb-1 text-white">${product.name}</h3>
                        <p class="tagline text-muted">${product.tagline}</p>
                        <div class="price text-gold mb-3">Rs. ${product.price.toLocaleString()}</div>
                        <div class="d-flex flex-column gap-2">
                            <button class="btn btn-outline-gold btn-sm quick-view-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal" data-product-id="${product.id}">Quick View</button>
                            <button class="btn btn-gold btn-sm add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
                        </div>
                    </div>
                `;
                productGrid.appendChild(productCard);
            });
        }

        function setupPagination() {
            if (!paginationContainer) return;
            paginationContainer.innerHTML = '';
            const pageCount = Math.ceil(currentProducts.length / itemsPerPage);
            if (pageCount <= 1) return;

            const createPageLink = (text, pageNum, isDisabled = false, isActive = false) => {
                const li = document.createElement('li');
                li.className = `page-item ${isDisabled ? 'disabled' : ''} ${isActive ? 'active' : ''}`;
                const a = document.createElement('a');
                a.className = 'page-link';
                a.href = '#';
                a.innerHTML = text;
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (!isDisabled) {
                        renderShopPage(pageNum);
                    }
                });
                li.appendChild(a);
                return li;
            };

            paginationContainer.appendChild(createPageLink('← Prev', currentPage - 1, currentPage === 1));
            for (let i = 1; i <= pageCount; i++) {
                paginationContainer.appendChild(createPageLink(i, i, false, i === currentPage));
            }
            paginationContainer.appendChild(createPageLink('Next →', currentPage + 1, currentPage === pageCount));
        }
        
        function applyFiltersAndSort() {
            let filteredProducts = [...products];
            
            const category = categoryFilter.value;
            if (category !== 'all') {
                filteredProducts = filteredProducts.filter(p => p.category === category);
            }

            const price = priceFilter.value;
            if (price === 'under100') {
                filteredProducts = filteredProducts.filter(p => p.price < 100);
            } else if (price === '100-150') {
                filteredProducts = filteredProducts.filter(p => p.price >= 100 && p.price <= 150);
            } else if (price === '150plus') {
                filteredProducts = filteredProducts.filter(p => p.price > 150);
            }

            const sortBy = sortByFilter.value;
            if (sortBy === 'price-asc') {
                filteredProducts.sort((a, b) => a.price - b.price);
            } else if (sortBy === 'price-desc') {
                filteredProducts.sort((a, b) => b.price - a.price);
            }

            currentProducts = filteredProducts;
            renderShopPage(1);
        }

        function renderShopPage(page = 1) {
            displayProducts(page);
            setupPagination();
        }

        renderShopPage(currentPage);

        sortByFilter.addEventListener('change', applyFiltersAndSort);
        categoryFilter.addEventListener('change', applyFiltersAndSort);
        priceFilter.addEventListener('change', applyFiltersAndSort);

        productGrid.addEventListener('click', e => {
            const addToCartBtn = e.target.closest('.add-to-cart-btn');
            if (addToCartBtn) {
                e.preventDefault();
                const productId = addToCartBtn.dataset.productId;
                addToCart(productId); // No size is passed here intentionally
            }
        });

        const quickViewModal = document.getElementById('quickViewModal');
        if (quickViewModal) {
            quickViewModal.addEventListener('show.bs.modal', (event) => {
                const button = event.relatedTarget;
                if (!button) return;
                const productId = button.dataset.productId;
                const product = findProductById(productId);
                if (product) {
                    quickViewModal.querySelector('.modal-title').textContent = product.name;
                    quickViewModal.querySelector('.quick-view-image').src = product.image;
                    quickViewModal.querySelector('.quick-view-description').textContent = product.tagline;
                    quickViewModal.querySelector('.quick-view-price').textContent = `Rs. ${product.price.toLocaleString()}`;
                    const sizeSelect = quickViewModal.querySelector('.quick-view-size');
                    const sizeContainer = sizeSelect.closest('div');
                    sizeSelect.innerHTML = '';
                    if (product.sizes && product.sizes.length > 0) {
                        product.sizes.forEach(size => {
                            const option = document.createElement('option');
                            option.value = size;
                            option.textContent = size;
                            sizeSelect.appendChild(option);
                        });
                        sizeContainer.style.display = 'block';
                    } else {
                        sizeContainer.style.display = 'none';
                    }
                    quickViewModal.querySelector('.quick-view-add-to-cart').dataset.productId = productId;
                }
            });

            quickViewModal.querySelector('.quick-view-add-to-cart').addEventListener('click', (e) => {
                const productId = e.target.dataset.productId;
                const sizeSelect = quickViewModal.querySelector('.quick-view-size');
                const sizeContainer = sizeSelect.closest('div');
                const selectedSize = sizeContainer.style.display !== 'none' ? sizeSelect.value : null;
                addToCart(productId, 1, selectedSize);
                const modalInstance = bootstrap.Modal.getInstance(quickViewModal);
                if(modalInstance) modalInstance.hide();
            });
        }
    }



    // Final call to update cart on every page load
    updateCartUI();
});