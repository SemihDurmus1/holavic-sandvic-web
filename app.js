const menuItems = [
    {
        name: "Seloviç Sandviç Menü",
        description: "Karışık Etli Sandviç + Patates Kızartması + İçecek (33 cl.)",
        price: "",
        oldPrice: "",
        image: "Photos/selovic-sandvic-menu.webp",
        category: "Holaviç Menüler"
    },
    {
        name: "Seloviç Tost Menü",
        description: "Ayvalık Tostu + Patates Kızartması + İçecek (33 cl.)",
        price: "360,00 ₺",
        oldPrice: "395,00 ₺",
        image: "Photos/Selovic_Tost.webp",
        category: "Holaviç Menüler"
    },
    {
        name: "Ayvalık Tostu",
        description: "Ayvalık tost ekmeğine;Sucuk, Salam, Sosis, Amerikan Salatası, Kaşar Peyniri, Kornişon Turşusu, Domates, Ketçap, Mayonez",
        price: "255,00 ₺",
        oldPrice: "270,00 ₺",
        image: "Photos/tost.webp",
        category: "Tostlar"
    },
    {
        name: "Kavurmalı Kaşarlı Tost",
        description: "Ayvalık Tost Ekmeğine; Kavurma, Çift Kaşar, Pul Biber, Tereyağ",
        price: "260,00 ₺",
        oldPrice: "280,00 ₺",
        image: "Photos/tost.webp",
        category: "Tostlar"
    },
    {
        name: "Kavurmalı Tost",
        description: "Ayvalık Tost Ekmeğine; Kavurma, Kaşar Peyniri, Domates, Yeşil Biber, Kekik, Pul Biber, Tereyağ",
        price: "275,00 ₺",
        oldPrice: "290,00 ₺",
        image: "Photos/tost.webp",
        category: "Tostlar"
    },
    {
        name: "Karışık Etli Sandviç",
        description: "Jambon, Salam, Cheddar Peyniri, Krem Peyniri, Yumurta, Domates, Kıvırcık",
        price: "200,00 ₺",
        oldPrice: "215,00 ₺",
        image: "Photos/karisik-etli-sandvic.webp",
        category: "Etli Sandviçler"
    },
    {
        name: "Klasik Sandviç",
        description: "Salam, Kaşar Peyniri, Amerikan Salatası, Domates, Sandviç Sosu, Roka",
        price: "180,00 ₺",
        oldPrice: "200,00 ₺",
        image: "Photos/klasik-sandvic.webp",
        category: "Etli Sandviçler"
    },
    {
        name: "Peynirli Jambonlu Sandviç",
        description: "Jambon, Cheddar Peyniri, Amerikan Salatası, Patates, Acuka, Roka",
        price: "200,00 ₺",
        oldPrice: "215,00 ₺",
        image: "Photos/peynirli-jambonlu-sandvic.webp",
        category: "Etli Sandviçler"
    },
    {
        name: "Sosisli Sandviç",
        description: "Özel Soslu Dilimlenmiş Sosis, Amerikan Salatası, Patates Kızartması, Kornişon Turşusu",
        price: "170,00 ₺",
        oldPrice: "180,00 ₺",
        image: "Photos/sosisli-sandvic.webp",
        category: "Sıcak Sandviçler"
    },
    {
        name: "Cheddarlı Sosisli Sandviç",
        description: "Özel Soslu Dilimlenmiş Sosis, Cheddar Peyniri, Patates Kızartması, Krem Peyniri, Kıvırcık",
        price: "180,00 ₺",
        oldPrice: "190,00 ₺",
        image: "Photos/cheddarli-sosisli-sandvic.webp",
        category: "Sıcak Sandviçler"
    },
    {
        name: "Patso",
        description: "Patates Kızartması, Ketçap, Mayonez",
        price: "130,00 ₺",
        oldPrice: "140,00 ₺",
        image: "Photos/patso.webp",
        category: "Sıcak Sandviçler"
    },
    {
        name: "Peynirli Sandviç",
        description: "Ezine Peyniri, Kaşar Peyniri, Krem Peyniri, Domates, Salatalık, Biber, Kıvırcık",
        price: "185,00 ₺",
        oldPrice: "200,00 ₺",
        image: "Photos/peynirli-etsiz-sandvic.webp",
        category: "Etsiz Sandviçler"
    },
    {
        name: "Vegan Sandviç",
        description: "Siyah Zeytin, Yeşil Zeytin, Domates, Salatalık, Roka, Mısır",
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
        description: "Çikolata, Kaymak, Bal, Muz, Çilek, Fındık",
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
                    <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 0.5rem;">${item.description}</p>
                    <div class="card-footer" style="justify-content: flex-end;">
                        <button class="btn-sm" onclick="window.open('https://wa.me/c/905374229898', '_blank')">Sipariş Ver</button>
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