"use client";
import React, { useState, useRef, useEffect } from "react";
import { useHomeStore } from "@/store/homeStore";
import { useRouter } from "next/navigation";
import { RecentlyViewedProduct } from "@/api/home.api";

// Utility function to format price
const formatPrice = (price: number): string => {
  return `₹${price.toLocaleString('en-IN')}`;
};

// Simulated react-slick Slider component
const Slider = ({
  children,
  ...settings
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(settings.slidesToShow || 1);
  const sliderRef = useRef<HTMLDivElement>(null);

  const totalSlides = React.Children.count(children);

  interface ResponsiveSettings {
    breakpoint: number;
    settings: {
      slidesToShow: number;
    };
  }

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (settings.responsive) {
        const breakpoint = settings.responsive.find(
          (bp: ResponsiveSettings) => window.innerWidth <= bp.breakpoint
        );
        if (breakpoint) {
          setSlidesToShow(breakpoint.settings.slidesToShow);
        } else {
          setSlidesToShow(settings.slidesToShow || 1);
        }
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [settings]);

  const maxSlide = Math.max(0, totalSlides - slidesToShow);

  const goToSlide = (slide: number) => {
    if (settings.infinite) {
      setCurrentSlide(slide);
    } else {
      const newSlide = Math.max(0, Math.min(slide, maxSlide));
      setCurrentSlide(newSlide);
    }
    setTranslateX(0);
  };

  const handleStart = (clientX: number) => {
    if (!settings.swipeToSlide) return;
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || !settings.swipeToSlide) return;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleEnd = () => {
    if (!isDragging || !settings.swipeToSlide) return;
    setIsDragging(false);

    const threshold = 50;
    const slideChange = settings.slidesToScroll || 1;

    if (translateX > threshold && currentSlide > 0) {
      goToSlide(currentSlide - slideChange);
    } else if (translateX < -threshold && currentSlide < maxSlide) {
      goToSlide(currentSlide + slideChange);
    }

    setTranslateX(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) =>
    handleStart(e.clientX);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) =>
    handleMove(e.clientX);
  const handleMouseUp = () => handleEnd();

  // Touch events
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) =>
    handleStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    handleMove(e.touches[0].clientX);
  const handleTouchEnd = () => handleEnd();

  const slideWidth = 100 / slidesToShow;
  const totalTranslateX =
    -currentSlide * slideWidth +
    (translateX / (sliderRef.current?.offsetWidth || 1)) * 100;

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={sliderRef}
        className={`flex transition-transform ${
          isDragging ? "duration-0" : `duration-${settings.speed || 500}`
        } ease-out`}
        style={{
          transform: `translateX(${totalTranslateX}%)`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="flex-none"
            style={{ width: `${slideWidth}%` }}
          >
            {child}
          </div>
        ))}
      </div>

      {settings.dots && maxSlide > 0 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? "bg-gray-800" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function RecentlyViewed() {
  const router = useRouter();
  const { recentlyViewed, loadingRecentlyViewed, fetchRecentlyViewed } = useHomeStore();
  const [isLoading, setIsLoading] = useState(true);

  // Static data for when no recently viewed products are available
  const staticProducts: any[] = [
    {
      "_id": "68c06404c99551d886e434bf",
      "vendorId": "68b9542401358b1e6a6b179b",
      "name": "POWDER BLUE MODAL DRAPED SKIRT SET WITH HALTER BLOUSE",
      "slug": "powder-blue-modal-draped-skirt-set-with-halter-blouse-2566",
      "shortDescription": "Elevate your festive style with our 'Powder Blue Modal Draped Skirt Set with Halter Blouse', a fusion silhouette that blends comfort with modern elegance",
      "categories": [
        {
          "_id": "68b9a61c01358b1e6a6b1b92",
          "name": "CO-ORD SET",
          "slug": "co-ord-set-6b6c"
        }
      ],
      "status": "active",
      "images": [
        "https://chihill.s3.ap-south-1.amazonaws.com/prod/products/product-26.webp"
      ],
      "variants": [
        {
          "attributes": {
            "size": "M",
            "color": "powder blue "
          },
          "sku": "B179B-POW-M-468",
          "title": "size variant",
          "price": 6299,
          "mrp": 6999,
          "images": [
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757438989247-66.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757438990227-67.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757438990905-68.webp"
          ],
          "stock": 2
        }
      ],
      "avgRating": 0,
      "ratingsCount": 0,
      "totalReviews": 0
    },
    {
      "_id": "68c069f1c99551d886e43534",
      "vendorId": "68b9542401358b1e6a6b179b",
      "name": "BLACK & MAROON IKAT CO-ORD SET",
      "slug": "black-and-maroon-ikat-co-ord-set-cb5d",
      "shortDescription": "Elevate your festive look with our 'Black & Maroon Ikat Co-ord Set', a seamless blend of traditional ikat craftsmanship and contemporary elegance",
      "categories": [
        {
          "_id": "68b9a61c01358b1e6a6b1b92",
          "name": "CO-ORD SET",
          "slug": "co-ord-set-6b6c"
        }
      ],
      "status": "active",
      "images": [
        "https://chihill.s3.ap-south-1.amazonaws.com/prod/products/product-29.webp"
      ],
      "variants": [
        {
          "attributes": {
            "size": "M",
            "color": "maroon,black"
          },
          "sku": "B179B-MAR-M-134",
          "title": "size variant",
          "price": 4299,
          "mrp": 4999,
          "images": [
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757440505602-89.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757440506812-90.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757440507437-91.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757440508092-92.webp"
          ],
          "stock": 1
        }
      ],
      "avgRating": 0,
      "ratingsCount": 0,
      "totalReviews": 0
    },
    {
      "_id": "68be9df9c8c09cf86e428cc9",
      "vendorId": "68b9542401358b1e6a6b179b",
      "name": "IKKAT CO-ORD DRESS",
      "slug": "ikkat-co-ord-dress-9bae",
      "shortDescription": "Embrace contemporary elegance with our Ikkat Co-Ord Dress, a perfect blend of modern style and traditional fabric",
      "categories": [
        {
          "_id": "68b9a61c01358b1e6a6b1b92",
          "name": "CO-ORD SET",
          "slug": "co-ord-set-6b6c"
        }
      ],
      "status": "active",
      "images": [
        "https://chihill.s3.ap-south-1.amazonaws.com/prod/products/product-2.webp"
      ],
      "variants": [
        {
          "attributes": {
            "size": "M",
            "color": "BLUE"
          },
          "sku": "B179B-BLU-M-523",
          "title": "SIZE VARIANT",
          "price": 5499,
          "mrp": 5999,
          "images": [
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757322752746-83.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757322754059-84.webp"
          ],
          "stock": 12
        }
      ],
      "avgRating": 0,
      "ratingsCount": 0,
      "totalReviews": 0
    },
    {
      "_id": "68bea3efc8c09cf86e428ec3",
      "vendorId": "68b9542401358b1e6a6b179b",
      "name": "KOTPAD GOWN WITH MODAL JACKET",
      "slug": "kotpad-gown-with-modal-jacket-e76c",
      "shortDescription": "Step into artisanal elegance with our Kotpad Gown with Modal Jacket, a fusion of traditional handloom craft and contemporary styling. Designed for women who love understated luxury, this ensemble is perfect for festive gatherings, cultural events, or sophisticated evenings",
      "categories": [
        {
          "_id": "68b9a60301358b1e6a6b1b8a",
          "name": "GOWN",
          "slug": "gown-212c"
        }
      ],
      "status": "active",
      "images": [
        "https://chihill.s3.ap-south-1.amazonaws.com/prod/products/product-7.webp"
      ],
      "variants": [
        {
          "attributes": {
            "size": "M",
            "color": "beige , multi printed"
          },
          "sku": "B179B-BEI-M-487",
          "title": "size variant",
          "price": 4999,
          "mrp": 5500,
          "images": [
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757324276859-11.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757324277388-12.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757324277915-13.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757324278443-14.webp"
          ],
          "stock": 12
        }
      ],
      "avgRating": 0,
      "ratingsCount": 0,
      "totalReviews": 0
    },
    {
      "_id": "68beaad5c8c09cf86e42906c",
      "vendorId": "68b9542401358b1e6a6b179b",
      "name": "IKKAT LONG GOWN WITH ELEGANT FULL SLEEVE JACKET",
      "slug": "ikkat-long-gown-with-elegant-full-sleeve-jacket-2dd4",
      "shortDescription": "Embrace the fusion of tradition and modernity with our 'Ikkat Long Gown with Elegant Full Sleeve Jacket', a garment that exudes sophistication and elegance.",
      "categories": [
        {
          "_id": "68b9a60301358b1e6a6b1b8a",
          "name": "GOWN",
          "slug": "gown-212c"
        }
      ],
      "status": "active",
      "images": [
        "https://chihill.s3.ap-south-1.amazonaws.com/prod/products/product-8.webp"
      ],
      "variants": [
        {
          "attributes": {
            "size": "L",
            "color": "denim blue"
          },
          "sku": "B179B-DEN-L-250",
          "title": "Size variant",
          "price": 10299,
          "mrp": 10499,
          "images": [
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757326046124-72.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757326047666-73.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757326049240-74.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757326050794-75.webp"
          ],
          "stock": 2
        }
      ],
      "avgRating": 0,
      "ratingsCount": 0,
      "totalReviews": 0
    },
    {
      "_id": "68beabdec8c09cf86e429089",
      "vendorId": "68b9542401358b1e6a6b179b",
      "name": "KOTPAD FAIRY SHORT DRESS",
      "slug": "kotpad-fairy-short-dress-c152",
      "shortDescription": "Step into a whimsical world with our Kotpad Fairy Short Dress, where traditional meets playful",
      "categories": [
        {
          "_id": "68b9a60301358b1e6a6b1b8a",
          "name": "GOWN",
          "slug": "gown-212c"
        }
      ],
      "status": "active",
      "images": [
        "https://chihill.s3.ap-south-1.amazonaws.com/prod/products/product-9.webp"
      ],
      "variants": [
        {
          "attributes": {
            "size": "M",
            "color": "off-white and mustard color "
          },
          "sku": "B179B-OFF-M-845",
          "title": "Size variant",
          "price": 5299,
          "mrp": 5999,
          "images": [
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757326309354-63.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757326310895-64.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757326312466-65.webp"
          ],
          "stock": 12
        }
      ],
      "avgRating": 0,
      "ratingsCount": 0,
      "totalReviews": 0
    },
    {
      "_id": "68bead50c8c09cf86e4290cd",
      "vendorId": "68b9542401358b1e6a6b179b",
      "name": "GEORGETTE SAREE WITH EMBELLISHED BLOUSE",
      "slug": "georgette-saree-with-embellished-blouse-9261",
      "shortDescription": "Grace meets glamour in this Georgette Saree with Embellished Blouse, designed for the modern woman who loves effortless elegance with a touch of sparkle. Perfect for festive occasions, weddings, and evening parties, this ensemble brings together flowing charm and refined detailing.",
      "categories": [
        {
          "_id": "68a56aa85059b18acb440479",
          "name": "SAREE",
          "slug": "saree-2db1"
        }
      ],
      "status": "active",
      "images": [
        "https://chihill.s3.ap-south-1.amazonaws.com/prod/products/product-10.webp"
      ],
      "variants": [
        {
          "attributes": {
            "color": "pink, blue"
          },
          "sku": "B179B-PIN-00-179",
          "title": "color variant",
          "price": 8999,
          "mrp": 9500,
          "images": [
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757326679498-100.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757326680055-101.webp"
          ],
          "stock": 12
        }
      ],
      "avgRating": 0,
      "ratingsCount": 0,
      "totalReviews": 0
    },
    {
      "_id": "68beae2cc8c09cf86e4290ea",
      "vendorId": "68b9542401358b1e6a6b179b",
      "name": "TUSSER SAREE IN MADHUBAI PAINTING",
      "slug": "tusser-saree-in-madhubai-painting-a8dc",
      "shortDescription": "Timeless tradition meets artistic elegance in this Tusser Silk Saree with Madhubani Painting, crafted for the woman who cherishes heritage with a touch of contemporary grace. Ideal for festive gatherings, cultural celebrations, or elegant daytime events, this saree is a wearable piece of art that celebrates Indian craftsmanship.",
      "categories": [
        {
          "_id": "68a56aa85059b18acb440479",
          "name": "SAREE",
          "slug": "saree-2db1"
        }
      ],
      "status": "active",
      "images": [
        "https://chihill.s3.ap-south-1.amazonaws.com/prod/products/product-11.webp"
      ],
      "variants": [
        {
          "attributes": {
            "size": "L",
            "color": "natural beige , multocolor print"
          },
          "sku": "B179B-NAT-L-837",
          "title": "color variant",
          "price": 9999,
          "mrp": 10500,
          "images": [
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757326900548-95.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757326902066-96.webp",
            "https://chihili-bucket.s3.ap-south-1.amazonaws.com/dev/product-variants/1757326902678-97.webp"
          ],
          "stock": 1
        }
      ],
      "avgRating": 0,
      "ratingsCount": 0,
      "totalReviews": 0
    }
  ];

  useEffect(() => {
    const loadRecentlyViewed = async () => {
      setIsLoading(true);
      await fetchRecentlyViewed(8); // Get 8 recently viewed products
      setIsLoading(false);
    };
    
    loadRecentlyViewed();
  }, [fetchRecentlyViewed]);

  const handleProductClick = (productId: string, productSlug: string) => {
    router.push(`/product-details/${productSlug}?id=${productId}`);
  };

  const displayItems = recentlyViewed.length > 0 ? recentlyViewed : staticProducts;

  // React-slick settings
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    swipeToSlide: true,
    arrows: false, // No navigation buttons
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
    ],
  };

  // Helper function to get first product image or fallback
  const getProductImage = (product: any): string => {
    if (product.images && product.images.length > 0) {
      return product.images[0];
    }
    return '/best1.jpg'; // Fallback image
  };

  // Helper function to get product price
  const getProductPrice = (product: any): string => {
    if (product.variants && product.variants.length > 0) {
      return formatPrice(product.variants[0].price);
    }
    return 'Price not available';
  };

  return (
    <div className="w-full py-20">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-xl sm:text-3xl font-light tracking-[0.3rem] sm:tracking-[0.4rem] text-secondary2  mb-10 font-crimson-pro">
            RECENTLY VIEWED
          </h1>
        </div>

      {/* Full width slider container */}
      <div className="w-full px-6 md:px-12">
        <Slider {...sliderSettings}>
          {displayItems.map((item) => (
            <div key={item._id} className="px-3">
              <div 
                className="text-center select-none cursor-pointer" 
                onClick={() => handleProductClick(item._id, item.slug)}
              >
                <div className="aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                  <img
                    src={getProductImage(item)}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    draggable={false}
                  />
                </div>
                <h3 className="text-lg text-gray-800 mb-2 font-medium font-crimson-pro">
                  {item.name.toUpperCase()}
                </h3>
                <p className="text-lg text-gray-900 font-lato">{getProductPrice(item)}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
