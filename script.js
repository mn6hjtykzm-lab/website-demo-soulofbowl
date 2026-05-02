/* Soul of Bowl | Interaktionen */

const bowls = [
    { name: "Soul of Bowl (Vegan)", price: "11,90 €", ingredients: "Reis Natur, Dressing, Tofu, Tomaten, Gurke, Avocado, Edamame, Soße, Röstzwiebeln, Granatapfelkerne" },
    { name: "Lachsliebe", price: "13,90 €", ingredients: "Reis Natur, Dressing, Lachs, Avocado, Jungzwiebel, Tomaten, Baby Spinat, Soße, Erdnüsse, Sesam" },
    { name: "Beef Dream", price: "13,90 €", ingredients: "Reis Natur, Dressing, Roastbeef, Mais, Gurke, Jungzwiebel, Käferbohnen, Soße, Sesam, Röstzwiebeln" },
    { name: "Protein Chicken", price: "12,90 €", ingredients: "Reis Natur, Huhn, Edamame, Mais, Kichererbsen, Tomaten, Sojasprossen, Soße, Erdnüsse" },
    { name: "Surf and Turf", price: "13,90 €", ingredients: "Reis Natur, Dressing, Garnelen, Roastbeef, Karotten, Jungzwiebel, Tomaten, Mais, Soße, Sesam, Röstzwiebeln" },
    { name: "Gambaretti", price: "13,90 €", ingredients: "Reis Natur, Dressing, Garnelen, Tomaten, Blattspinat, Jungzwiebel, Wakame, Soße, Erdnüsse, Sesam" },
    { name: "Sea Food Bowl", price: "13,90 €", ingredients: "Reis Natur, Dressing, Lachs, Garnelen, Edamame, Gurke, Wakame, Kichererbsen, Soße, Sesam" }
];

document.addEventListener("DOMContentLoaded", () => {
    // Menu laden
    const menuList = document.getElementById("menu-list");
    if (menuList) {
        menuList.innerHTML = bowls.map((b, i) => `
            <article class="menu-item reveal" style="transition-delay: ${i * 0.1}s">
                <div class="menu-item-top">
                    <h3>${b.name}</h3>
                    <span class="menu-price">${b.price}</span>
                </div>
                <p class="menu-ingredients">${b.ingredients}</p>
            </article>
        `).join("");
    }

    // Mobile Nav
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav");
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", isOpen);
        });
        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", false);
            });
        });
    }

    // Scroll Animations (Intersection Observer)
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
