# fliptribeus-lander
todo: -->
<!-- First, complete the "Before you start" section
 Structure your project:
1. Create three HTML files: index.html, waitlist.html, and thank-you.html //done
2. Set up your CSS and JavaScript files // done
3. Initialize DaisyUI in your project //done

Build your pages incrementally:

1. Index page:

 <!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flip Tribe Us - Local Inventory Management</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@3.9.0/dist/full.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Navigation
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="#categories">Categories</a></li>
                    <li><a href="#map">Map</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </div>
            <a class="btn btn-ghost normal-case text-xl">Flip Tribe Us</a>
        </div>
        <div class="navbar-end">
            <a href="waitlist.html" class="btn btn-primary">Join FlipTribe Free</a>
        </div>
    </div>

    <!-- Hero Section -->
    <!-- <div class="hero min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Empowering Small Businesses through Seamless Inventory Management</h1>
                <p class="mb-5">Discover Local Deals, List Surplus Quickly, and Explore Events Near You</p>
                <div class="flex gap-4 justify-center">
                    <a href="#map" class="btn btn-primary">Find Local Deals Now</a>
                    <a href="waitlist.html" class="btn btn-secondary">Start Selling Today</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Features Section -->
    <div class="py-20 bg-base-200" id="features">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-12">Key Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">Interactive Map</h3>
                        <p>Find nearby pickup locations, events, and sellers with our smart filtering system.</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">Quick Listing</h3>
                        <p>List your surplus inventory in minutes with our streamlined process.</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">Community Events</h3>
                        <p>Connect with local businesses and participate in community events.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Categories Section -->
    <div class="py-20" id="categories">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-12">Featured Categories</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h3 class="card-title">Apparel</h3>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h3 class="card-title">Home Goods</h3>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h3 class="card-title">Electronics</h3>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h3 class="card-title">More</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Blog Preview Section -->
    <div class="py-20 bg-base-200" id="blog">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-12">Latest from Our Blog</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">Inventory Management Tips</h3>
                        <p>Learn how to optimize your inventory for maximum profit.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">Local Business Spotlight</h3>
                        <p>Meet successful sellers in your community.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">Upcoming Events</h3>
                        <p>Don't miss our next community meetup!</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-primary text-primary-content py-20">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-6">Ready to Join the Tribe?</h2>
            <p class="mb-8 text-xl">List your inventory in minutes and connect with local buyers.</p>
            <a href="waitlist.html" class="btn btn-secondary btn-lg">List Inventory in Minutes</a>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer p-10 bg-neutral text-neutral-content">
        <div>
            <span class="footer-title">Services</span> 
            <a class="link link-hover">Selling</a>
            <a class="link link-hover">Buying</a>
            <a class="link link-hover">Events</a>
        </div> 
        <div>
            <span class="footer-title">Company</span> 
            <a class="link link-hover">About us</a>
            <a class="link link-hover">Contact</a>
            <a class="link link-hover">Blog</a>
        </div> 
        <div>
            <span class="footer-title">Legal</span> 
            <a class="link link-hover">Terms of use</a>
            <a class="link link-hover">Privacy policy</a>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>

a. Hero section with your value proposition:

2. Features section highlighting key benefits
3. Social proof section (potential testimonials)
4. Call-to-action button leading to waitlist

Waitlist page (you will you YouForm for this):
1. Simple form collecting email and basic user information
2. Clear value proposition for joining

Thank you page:
1. Confirmation message
2. Share buttons for social media

Use Claude to generate compelling copy for your landing page:
1. Value proposition
2. Feature descriptions
3. Call-to-action text
4. Make your site responsive using DaisyUI classes
4. Deploy your project to render
5. Connect your custom domain --> -->
