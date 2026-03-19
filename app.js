const menuItems = [
    {
        name: "Seloviç Sandviç Menü",
        description: "Karışık Etli Sandviç + Patates Kızartması",
        price: "320,00 ₺",
        oldPrice: "350,00 ₺",
        image: "Photos/selovic-sandvic-menu.webp",
        category: "Holaviç Menüler"
    },
    {
        name: "Seloviç Tost Menü",
        description: "Ayvalık tostu, patates kızartması, içecek",
        price: "360,00 ₺",
        oldPrice: "395,00 ₺",
        image: "Photos/selovic-tost-menu.webp",
        category: "Holaviç Menüler"
    },
    {
        name: "Ayvalık Tostu",
        description: "Ayvalık tost ekmeği, sucuk, salam, kaşar...",
        price: "255,00 ₺",
        oldPrice: "270,00 ₺",
        image: "Photos/tost.webp",
        category: "Tostlar"
    },
    {
        name: "Kavurmalı Kaşarlı Tost",
        description: "Ayvalık tost ekmeği, kavurma, kaşar peyniri...",
        price: "260,00 ₺",
        oldPrice: "280,00 ₺",
        image: "Photos/tost.webp",
        category: "Tostlar"
    },
    {
        name: "Kavurmalı Tost",
        description: "Ayvalık tost ekmeği, kavurma, baharatlar...",
        price: "275,00 ₺",
        oldPrice: "290,00 ₺",
        image: "Photos/tost.webp",
        category: "Tostlar"
    },
    {
        name: "Karışık Etli Sandviç",
        description: "Jambon, Salam, Yumurta, Cheddar Peyniri...",
        price: "200,00 ₺",
        oldPrice: "215,00 ₺",
        image: "Photos/karisik-etli-sandvic.webp",
        category: "Etli Sandviçler"
    },
    {
        name: "Klasik Sandviç",
        description: "Salam, Kaşar Peyniri, Amerikan Salatası...",
        price: "180,00 ₺",
        oldPrice: "200,00 ₺",
        image: "Photos/klasik-sandvic.webp",
        category: "Etli Sandviçler"
    },
    {
        name: "Peynirli Jambonlu Sandviç",
        description: "Jambon, Cheddar Peyniri, Amerikan Salatası...",
        price: "200,00 ₺",
        oldPrice: "215,00 ₺",
        image: "Photos/peynirli-jambonlu-sandvic.webp",
        category: "Etli Sandviçler"
    },
    {
        name: "Sosisli Sandviç",
        description: "Özel Soslu Dilimlenmiş Sosis, Amerikan Salatası...",
        price: "170,00 ₺",
        oldPrice: "180,00 ₺",
        image: "Photos/sosisli-sandvic.webp",
        category: "Sıcak Sandviçler"
    },
    {
        name: "Cheddarlı Sosisli Sandviç",
        description: "Özel Soslu Dilimlenmiş Sosis, Cheddar Peyniri...",
        price: "180,00 ₺",
        oldPrice: "190,00 ₺",
        image: "Photos/cheddarli-sosisli-sandvic.webp",
        category: "Sıcak Sandviçler"
    },
    {
        name: "Patso",
        description: "Patates Kızartması, Ketçap, Mayonez...",
        price: "130,00 ₺",
        oldPrice: "140,00 ₺",
        image: "Photos/patso.webp",
        category: "Sıcak Sandviçler"
    },
    {
        name: "Peynirli Sandviç",
        description: "Ezine Peyniri, Kaşar Peyniri, Krem Peynir...",
        price: "185,00 ₺",
        oldPrice: "200,00 ₺",
        image: "Photos/peynirli-etsiz-sandvic.webp",
        category: "Etsiz Sandviçler"
    },
    {
        name: "Vegan Sandviç",
        description: "Yeşil Zeytin, Siyah Zeytin, Domates...",
        price: "160,00 ₺",
        oldPrice: "180,00 ₺",
        image: "Photos/vegan-sandvic.webp",
        category: "Etsiz Sandviçler"
    },
    {
        name: "Waffle Sandviç",
        description: "Çikolata, Muz, Çilek, Fındık",
        price: "145,00 ₺",
        oldPrice: "160,00 ₺",
        image: "Photos/waffle-sandvic.webp",
        category: "Tatlı Sandviçler"
    },
    {
        name: "Tatlı Atom Sandviç",
        description: "Çikolata, Kaymak, Bal, Muz, Çilek...",
        price: "170,00 ₺",
        oldPrice: "180,00 ₺",
        image: "Photos/waffle-sandvic.webp",
        category: "Tatlı Sandviçler"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu-container');

    if (menuContainer) {
        menuItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card reveal';

            card.innerHTML = `
                <div class="menu-card-img">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600'">
                    <div class="menu-overlay">
                        <span>İncele</span>
                    </div>
                </div>
                <div class="menu-info">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <h3 style="flex:1;">${item.name}</h3>
                        <span style="background:var(--primary); color:white; padding: 2px 8px; border-radius: 10px; font-size: 0.8rem; margin-left:10px; white-space:nowrap;">${item.category}</span>
                    </div>
                    <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 0.5rem; min-height: 45px;">${item.description}</p>
                    <div class="card-footer">
                        <div>
                            <span style="text-decoration: line-through; color: #999; font-size: 0.9rem; margin-right: 5px;">${item.oldPrice}</span>
                            <span style="font-size: 1.25rem; font-weight: 700; color: var(--secondary);">${item.price}</span>
                        </div>
                        <button class="btn-sm" onclick="window.open('https://wa.me/c/905374229898', '_blank')">+</button>
                    </div>
                </div>
            `;

            menuContainer.appendChild(card);
        });
    }

    // Hamburger menü işlevselliği
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Sroll yapıldığında navbar arka planını değiştir
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Sayfa yüklendiğinde kontrol et
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        }
    }
});
