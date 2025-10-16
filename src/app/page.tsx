"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "heroImage", "url": "https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Colorful pink crust pizza with vegetables and herbs on a wooden platter. Perfect for food lovers." },
  { "id": "aboutImage", "url": "https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A young couple having milkshakes and pizza at a cozy cafe. Relaxed and joyful atmosphere." },
  { "id": "product01", "url": "https://images.pexels.com/photos/6605191/pexels-photo-6605191.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of hands adding basil to freshly baked pizza with mozzarella and tomato sauce." },
  { "id": "product02", "url": "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A mouthwatering slice of pepperoni pizza with cheese and spices, ideal for any meal." },
  { "id": "product03", "url": "https://images.pexels.com/photos/7315010/pexels-photo-7315010.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Top view of friends sharing a large pizza at home, capturing a casual dining moment." }
];

const Navbar = () => (
  <div id="nav" data-section="nav">
    <NavbarStyleApple navItems={[
      { name: "Home", id: "home" },
      { name: "Menu", id: "menu" },
      { name: "Contact", id: "contact" },
      { name: "About", id: "about" }
    ]} brandName="Pizzeria" />
  </div>
);

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <Navbar />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Enjoy Authentic Italian Pizza"
            description="Experience the true taste of Italy with our handcrafted pizzas."
            imageSrc={assetMap.find(a => a.id === 'heroImage')?.url}
            buttons={[
              { text: "View Menu", href: "menu" },
              { text: "Order Now", href: "order" }
            ]}
            imagePosition="left"
            className="bg-peach-100"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Our Pizzeria"
            description={[
              "Our pizzeria brings you the finest pizzas with a focus on quality ingredients and traditional recipes.",
              "Join us to taste the passion in every slice!"
            ]}
            buttons={[{ text: "Learn More", href: "about" }]}
            imageSrc={assetMap.find(a => a.id === 'aboutImage')?.url}
            imageAlt="Pizzeria Interior"
            className="bg-peach-100"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: "1", name: "Margherita", price: "$12", imageSrc: assetMap.find(a => a.id === 'product01')?.url },
              { id: "2", name: "Pepperoni", price: "$15", imageSrc: assetMap.find(a => a.id === 'product02')?.url },
              { id: "3", name: "Veggie", price: "$14", imageSrc: assetMap.find(a => a.id === 'product03')?.url }
            ]}
            className="bg-peach-100"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Get in Touch"
            title="Contact Us Today"
            description="We'd love to hear from you! Reach out for reservations or inquiries."
            buttonText="Send"
            className="bg-peach-100"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Discover", items: [{ label: "Menu", href: "menu" }, { label: "About", href: "about" }] },
              { title: "Contact", items: [{ label: "Contact Us", href: "contact" }, { label: "Directions", href: "directions" }] }
            ]}
            copyrightText="© 2025 Pizzeria"
            className="bg-peach-100"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}