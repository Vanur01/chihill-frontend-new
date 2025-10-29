"use client";
import BestSellingCarousel from "@/components/home/Bestselling";
import Carousel from "@/components/home/Carousel";
import FashionCategories from "@/components/home/Categories";
import NewsletterFooter from "@/components/Footer";
import DraggableCarousel from "@/components/home/Frestival";
import NewCollectionGrid from "@/components/home/NewCollectionGrid";
import Poster from "@/components/home/Poster";
import RecentlyViewed from "@/components/home/RecentlyViewed";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { auth } from "@/lib/FirebaseClient";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import { useWishlistStore } from "@/store/wishlistStore";

export default function Home() {

  return (
    <div className="">
      <Carousel />
      <FashionCategories />
      <RecentlyViewed />
      <NewCollectionGrid />
      <BestSellingCarousel />
      <DraggableCarousel />
      {/* <Poster /> */}
    </div>
  );
}
