<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oasis Organics - Pure, Natural, Fresh</title>
    <!-- Import Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        // --- Custom Tailwind Config ---
        // We define a custom theme to get that "organic" feel.
        // Colors are earthy, natural, and warm.
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'brand-light': '#F8F5F0', // A warm, creamy background
                        'brand-dark': '#3A4D39',   // Deep forest green for text, footers
                        'brand-green': '#6A8D73', // A softer, natural green for accents
                        'brand-accent': '#D4A373', // Earthy tan/terracotta for buttons (CTA)
                        'brand-text': '#2C2F24',  // Dark, earthy text color
                    },
                    fontFamily: {
                        // Use the clean, modern Inter font
                        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                    },
                },
            },
        };
    </script>
    <style>
        /* A subtle style for the hero section text */
        .hero-text-shadow {
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }
    </style>
</head>
<body class="font-sans bg-brand-light text-brand-text antialiased">

    <!-- 
      HEADER / NAVIGATION 
      Clean, simple, and responsive.
    -->
    <header class="bg-brand-light border-b border-gray-200 sticky top-0 z-50">
        <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <!-- Logo -->
            <a href="#" class="text-3xl font-bold text-brand-dark">
                Oasis
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex space-x-6">
                <a href="#" class="text-brand-text hover:text-brand-green transition duration-200">Shop</a>
                <a href="#" class="text-brand-text hover:text-brand-green transition duration-200">Our Story</a>
                <a href="#" class="text-brand-text hover:text-brand-green transition duration-200">Blog</a>
                <a href="#" class="text-brand-text hover:text-brand-green transition duration-200">Contact</a>
            </div>

            <!-- Icons & Mobile Menu Button -->
            <div class="flex items-center space-x-4">
                <button class="text-brand-text hover:text-brand-green transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <a href="#" class="text-brand-text hover:text-brand-green transition duration-200 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <!-- Cart count indicator -->
                    <span class="absolute -top-2 -right-2 bg-brand-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </a>
                
                <!-- Mobile Menu Button (Hamburger) -->
                <button id="mobile-menu-button" class="md:hidden text-brand-text hover:text-brand-green transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>

        <!-- Mobile Menu (Hidden by default) -->
        <div id="mobile-menu" class="hidden md:hidden bg-brand-light border-t border-gray-200">
            <a href="#" class="block px-4 py-3 text-brand-text hover:bg-gray-100">Shop</a>
            <a href="#" class="block px-4 py-3 text-brand-text hover:bg-gray-100">Our Story</a>
            <a href="#" class="block px-4 py-3 text-brand-text hover:bg-gray-100">Blog</a>
            <a href="#" class="block px-4 py-3 text-brand-text hover:bg-gray-100">Contact</a>
        </div>
    </header>

    <main>
        <!-- 
          HERO SECTION 
          High-quality image with a clear value proposition and Call to Action (CTA).
        -->
        <section class="relative h-[70vh] min-h-[400px] bg-gray-400 flex items-center justify-center text-center text-white" 
                 style="background-image: url('https://placehold.co/1600x900/3A4D39/F8F5F0?text=Imagine+a+lush+organic+farm+here'); background-size: cover; background-position: center;">
            <div class="absolute inset-0" style="background-color: rgba(26, 58, 26, 0.4);"></div> <!-- Overlay for text readability -->
            <div class="relative z-10 p-6">
                <h1 class="text-4xl md:text-6xl font-bold hero-text-shadow mb-4">Pure. Natural. Delivered.</h1>
                <p class="text-lg md:text-xl max-w-2xl mx-auto hero-text-shadow mb-8">
                    Discover the best of nature's bounty, sourced from trusted local farms and delivered fresh to your door.
                </p>
                <a href="#" class="bg-brand-accent text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
                    Shop All Products
                </a>
            </div>
        </section>

        <!-- 
          TRUST BADGES 
          Crucial for an organic brand. This builds immediate trust.
        -->
        <section class="bg-white py-12">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-brand-green mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <h3 class="font-semibold text-brand-dark">100% Certified Organic</h3>
                        <p class="text-sm text-gray-600">No pesticides or GMOs.</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-brand-green mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <h3 class="font-semibold text-brand-dark">Sustainably Sourced</h3>
                        <p class="text-sm text-gray-600">From local farms we trust.</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-brand-green mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1zM3 11h10M16 16V6a1 1 0 011-1h4a1 1 0 011 1v10l-2 2h-8a1 1 0 01-1-1zM16 11h5" /></svg>
                        <h3 class="font-semibold text-brand-dark">Freshness Guaranteed</h3>
                        <p class="text-sm text-gray-600">Farm-to-table quality.</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-brand-green mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        <h3 class="font-semibold text-brand-dark">Ethically Produced</h3>
                        <p class="text-sm text-gray-600">Fair trade, always.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 
          FEATURED PRODUCTS 
          Clean grid layout. Product cards are simple, with clear price and CTA.
        -->
        <section class="py-16">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center text-brand-dark mb-10">This Week's Harvest</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Product Card 1 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                        <a href="#">
                            <img src="https://placehold.co/400x400/6A8D73/FFFFFF?text=Organic+Avocados" alt="Organic Avocados" class="w-full h-56 object-cover">
                        </a>
                        <div class="p-5">
                            <span class="text-brand-green text-sm font-semibold">Fruit</span>
                            <h3 class="text-lg font-bold text-brand-dark mt-1 mb-2 truncate">
                                <a href="#">Organic Hass Avocados (3 Pack)</a>
                            </h3>
                            <p class="text-gray-600 text-sm mb-4">Rich, creamy, and full of nutrients.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-bold text-brand-dark">$6.99</span>
                                <button class="bg-brand-accent text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-200">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product Card 2 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                        <a href="#">
                            <img src="https://placehold.co/400x400/D4A373/FFFFFF?text=Artisan+Bread" alt="Sourdough Bread" class="w-full h-56 object-cover">
                        </a>
                        <div class="p-5">
                            <span class="text-brand-green text-sm font-semibold">Bakery</span>
                            <h3 class="text-lg font-bold text-brand-dark mt-1 mb-2 truncate">
                                <a href="#">Artisan Sourdough Loaf</a>
                            </h3>
                            <p class="text-gray-600 text-sm mb-4">Naturally leavened, crusty, and delicious.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-bold text-brand-dark">$8.50</span>
                                <button class="bg-brand-accent text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-200">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product Card 3 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                        <a href="#">
                            <img src="https://placehold.co/400x400/3A4D39/FFFFFF?text=Organic+Eggs" alt="Organic Eggs" class="w-full h-56 object-cover">
                        </a>
                        <div class="p-5">
                            <span class="text-brand-green text-sm font-semibold">Dairy & Eggs</span>
                            <h3 class="text-lg font-bold text-brand-dark mt-1 mb-2 truncate">
                                <a href="#">Free-Range Organic Eggs (Dozen)</a>
                            </h3>
                            <p class="text-gray-600 text-sm mb-4">From happy hens roaming on open pastures.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-bold text-brand-dark">$7.99</span>
                                <button class="bg-brand-accent text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-200">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Product Card 4 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                        <a href="#">
                            <img src="https://placehold.co/400x400/8B4513/FFFFFF?text=Organic+Coffee" alt="Organic Coffee" class="w-full h-56 object-cover">
                        </a>
                        <div class="p-5">
                            <span class="text-brand-green text-sm font-semibold">Pantry</span>
                            <h3 class="text-lg font-bold text-brand-dark mt-1 mb-2 truncate">
                                <a href="#">Fair Trade Morning Blend Coffee</a>
                            </h3>
                            <p class="text-gray-600 text-sm mb-4">Whole bean, medium roast, smooth finish.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-bold text-brand-dark">$14.99</span>
                                <button class="bg-brand-accent text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-200">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 
          SHOP BY CATEGORY 
          Visually guides users to main product areas.
        -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center text-brand-dark mb-10">Shop by Category</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Category 1 -->
                    <a href="#" class="relative rounded-lg overflow-hidden h-64 group">
                        <img src="https://placehold.co/600x400/6A8D73/FFFFFF?text=Fresh+Produce" alt="Fresh Produce" class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0 flex items-center justify-center" style="background-color: rgba(44, 62, 31, 0.4);">
                            <h3 class="text-white text-2xl font-bold hero-text-shadow">Fresh Produce</h3>
                        </div>
                    </a>
                    <!-- Category 2 -->
                    <a href="#" class="relative rounded-lg overflow-hidden h-64 group">
                        <img src="https://placehold.co/600x400/3A4D39/FFFFFF?text=Pantry+Staples" alt="Pantry Staples" class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0 flex items-center justify-center" style="background-color: rgba(26, 58, 26, 0.4);">
                            <h3 class="text-white text-2xl font-bold hero-text-shadow">Pantry Staples</h3>
                        </div>
                    </a>
                    <!-- Category 3 -->
                    <a href="#" class="relative rounded-lg overflow-hidden h-64 group">
                        <img src="https://placehold.co/600x400/D4A373/FFFFFF?text=Health+&+Wellness" alt="Health & Wellness" class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0 flex items-center justify-center" style="background-color: rgba(15, 36, 16, 0.4);">
                            <h3 class="text-white text-2xl font-bold hero-text-shadow">Health & Wellness</h3>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        
        <!-- 
          BRAND STORY / VALUES 
          Another trust-building section. Connects with the customer emotionally.
        -->
        <section class="py-20">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row items-center gap-12">
                    <div class="md:w-1/2">
                        <img src="https://placehold.co/600x500/F8F5F0/3A4D39?text=Our+Farm+Story" alt="Farmer holding fresh vegetables" class="rounded-lg shadow-xl w-full">
                    </div>
                    <div class="md:w-1/2 text-center md:text-left">
                        <span class="text-brand-accent font-semibold text-sm uppercase">Our Commitment</span>
                        <h2 class="text-3xl md:text-4xl font-bold text-brand-dark my-4">From Farm to Table, With Care.</h2>
                        <p class="text-lg text-gray-700 leading-relaxed mb-6">
                            At Oasis, we believe real food tastes better. That's why we partner with local, regenerative farms that prioritize soil health, animal welfare, and biodiversity. We're not just selling groceries; we're building a healthier food system for everyone.
                        </p>
                        <a href="#" class="bg-brand-dark text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-brand-green transition duration-300">
                            Learn Our Story
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- 
          TESTIMONIALS
          Social proof is essential for e-commerce.
        -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center text-brand-dark mb-10">What Our Customers Say</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Testimonial 1 -->
                    <div class="bg-brand-light p-6 rounded-lg shadow-md border-l-4 border-brand-green">
                        <p class="text-gray-700 italic text-lg mb-4">"The produce is always so fresh! You can taste the difference. I'll never go back to a regular grocery store."</p>
                        <span class="font-bold text-brand-dark">- Sarah K.</span>
                    </div>
                    <!-- Testimonial 2 -->
                    <div class="bg-brand-light p-6 rounded-lg shadow-md border-l-4 border-brand-green">
                        <p class="text-gray-700 italic text-lg mb-4">"I love knowing exactly where my food comes from. The transparency and quality from Oasis are unmatched."</p>
                        <span class="font-bold text-brand-dark">- Michael B.</span>
                    </div>
                    <!-- Testimonial 3 -->
                    <div class="bg-brand-light p-6 rounded-lg shadow-md border-l-4 border-brand-green">
                        <p class="text-gray-700 italic text-lg mb-4">"My family's health is my top priority. Shopping here gives me peace of mind. The kids love the organic strawberries!"</p>
                        <span class="font-bold text-brand-dark">- Emily T.</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- 
          NEWSLETTER SIGNUP 
          A simple CTA to capture leads.
        -->
        <section class="py-16 bg-brand-green text-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl font-bold mb-4">Stay Fresh</h2>
                <p class="text-lg mb-8 max-w-xl mx-auto">Join our newsletter for 10% off your first order, plus weekly recipes and farm updates.</p>
                <form class="flex flex-col sm:flex-row max-w-md mx-auto">
                    <input type="email" placeholder="Enter your email" class="flex-grow w-full sm:w-auto px-5 py-3 rounded-full sm:rounded-r-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-accent mb-2 sm:mb-0" required>
                    <button type="submit" class="bg-brand-dark text-white font-bold px-8 py-3 rounded-full sm:rounded-l-none hover:bg-brand-text transition duration-200">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    </main>

    <!-- 
      FOOTER
      Clean, organized, and provides all necessary secondary links.
    -->
    <footer class="bg-brand-dark text-brand-light">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Column 1: Brand -->
                <div>
                    <a href="#" class="text-3xl font-bold text-white mb-4 block">
                        Oasis
                    </a>
                    <p class="text-gray-300">Good for you, good for the planet.</p>
                    <!-- Social Icons -->
                    <div class="flex space-x-4 mt-4">
                        <a href="#" class="text-gray-300 hover:text-white transition duration-200" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                        </a>
                        <a href="#" class="text-gray-300 hover:text-white transition duration-200" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.669 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.669-4.771 4.919-4.919 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.197-4.354-2.619-6.78-6.98-6.98-1.28-.059-1.688-.073-4.947-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>
                        </a>
                        <a href="#" class="text-gray-300 hover:text-white transition duration-200" aria-label="Pinterest">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-0.09 19.17c-.752 0-1.425-.213-2.023-.627l-.606 2.301c-.112.43.34.614.588.46l2.174-1.34c.396.066.804.1 1.22.1 4.075 0 7.399-3.324 7.399-7.399s-3.324-7.399-7.399-7.399-7.399 3.324-7.399 7.399c0 2.35 1.121 4.453 2.923 5.816.03.02.04.05.04.09 0 .1-.04.19-.11.23-.08.04-.17.03-.23-.03l-1.53-1.02c-.52-.35-.85-.92-.85-1.54 0-1.47 1.19-2.66 2.66-2.66h.31c.21 0 .39-.17.39-.39s-.18-.39-.39-.39h-.31c-2.27 0-4.12 1.85-4.12 4.12 0 1.14.47 2.18 1.23 2.96.02.02.03.04.03.07 0 .09-.04.18-.1.22-.07.05-.16.06-.23.03l-2.01-1.34c-1.34-.89-2.2-2.31-2.2-3.88 0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6c-.46 0-.91-.05-1.34-.15l-2.77 1.72c-.22.14-.49.07-.63-.15-.14-.22-.07-.49.15-.63l1.86-1.16c-.63-.44-1.17-1-1.59-1.65-.18-.28-.53-.38-.81-.2-.28.18-.38.53-.2.81.56 1.01 1.34 1.87 2.29 2.53.84.58 1.8 1.17 2.1 1.21.09.02.18.02.27 0 .1-.01.19-.06.27-.12.1-.08.18-.18.23-.3.07-.12.1-.25.1-.38v-1.12c.7-.27 1.32-.67 1.84-1.19 2.31-2.3 2.31-6.05 0-8.34s-6.05-2.3-8.34 0c-1.75 1.75-2.12 4.2.14 6.45.06.06.1.13.1.21 0 .09-.03.18-.09.24-.05.06-1.2.78-1.2.78-.11.07-.26.07-.37-.01z"/></svg>
                        </a>
                    </div>
                </div>

                <!-- Column 2: Shop -->
                <div>
                    <h4 class="text-lg font-bold text-white mb-4">Shop</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white transition duration-200">Fresh Produce</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition duration-200">Dairy & Eggs</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition duration-200">Bakery</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition duration-200">Pantry</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition duration-200">Wellness</a></li>
                    </ul>
                </div>

                <!-- Column 3: About -->
                <div>
                    <h4 class="text-lg font-bold text-white mb-4">About Us</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white transition duration-200">Our Story</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition duration-200">Our Farms</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition duration-200">Careers</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition duration-200">Blog</a></li>
                    </ul>
                </div>

                <!-- Column 4: Help -->
                <div>
                    <h4 class="text-lg font-bold text-white mb-4">Help</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white transition duration-200">FAQ</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition duration-200">Contact Us</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition duration-200">Shipping & Returns</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition duration-200">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Oasis Organics. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <!-- 
      JavaScript for Mobile Menu Toggle
    -->
    <script>
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            var menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
    </script>

</body>
</html>