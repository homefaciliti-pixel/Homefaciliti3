import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import MainLayout from "../../layouts/MainLayout";
import useReveal from "../../hooks/useReveal";

// Import Assets
import plumberImg from "../../assets/images/plumbing.jpg";
import electricianImg from "../../assets/images/electrician.png";
import cleaningImg from "../../assets/images/deep-cleaning.png";
import acServiceImg from "../../assets/images/ac.png";
import tapRepairImg from "../../assets/images/tap-repair.png";
import pipeRepairImg from "../../assets/images/smallpipe.jpg";
import salonImg from "../../assets/images/Salon.jpg";
import spaImg from "../../assets/images/spa-service.png";
import architectureImg from "../../assets/images/architecture.jpg";
import carpenterImg from "../../assets/images/carpenter.jpg";
import panditImg from "../../assets/images/Pandit ji.jpg";
import driverImg from "../../assets/images/Driver services.png";
import photographerImg from "../../assets/images/Photographer.jpg";
import doctorImg from "../../assets/images/Doctor.jpg";
import compounderImg from "../../assets/images/Compounder.jpg";
import halwaiImg from "../../assets/images/Halwai services.jpg";
import carWashImg from "../../assets/images/Car Washing.jpg";
import mechanicImg from "../../assets/images/mechanic.jpg";
import taxImg from "../../assets/images/tax.jpg";
import painterImg from "../../assets/images/Painter.jpg";
import repairingImg from "../../assets/images/Repairing.jpg";
import pestControlImg from "../../assets/images/pest-control.jpg";

function CategoryServices() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  useReveal();

  const servicesData = {
    Plumbing: [
      {
        name: "Professional Plumber",
        image: tapRepairImg,
        desc: "Reliable plumbing services for repairs, fittings, and maintenance.",
        price: 499.00,
        time: "30-45 mins",
      },
      {
        name: "Tap Repair",
        image: pipeRepairImg,
        desc: "Fast and reliable tap repair services for leakage, replacement, and maintenance.",
        price: 299.00,
        time: "60-90 mins",
      },
      {
        name: "Tap/Faucet Repair & Replacement",
        image: plumberImg,
        desc: "Professional tap and faucet repair & replacement services for smooth and leak-free performance.",
        price: 399.00,
        time: "1-2 hours",
      },
      {
        name: "Sink/Wash-basin Installation",
        image: plumberImg,
        desc: "Expert sink and wash-basin installation services for homes and offices.",
        price: 689.00,
        time: "1-2 hours",
      },
      {
        name: "Pipe Leakage Repair/Small Pipe Replacement",
        image: plumberImg,
        desc: "Quick pipe leakage repair and small pipe replacement services for safe water flow.",
        price: 799.00,
        time: "60-90 mins",
      },
      {
        name: "Water Tank/Motor/Geyser Plumbing",
        image: plumberImg,
        desc: "Expert installation and repair services for water tanks, motors, and geysers.",
        price: 799.00,
        time: "1-2 hours"
      },
      {
        name: "Bathroom Plumbing/Full Bathroom Setup",
        image: plumberImg,
        desc: "Comprehensive bathroom plumbing services including full bathroom setup and repairs.",
        price: 2199.00,
        time: "3-4 hours"
      },
    ],
    Electrician: [
      {
        name: "House Wiring Electrician",
        image: electricianImg,
        desc: "Professional house wiring and electrical services for safe installation, repair, and maintenance.",
        price: 699.00,
        time: "30 mins",
      },
      {
        name: "Fridge Service",
        image: electricianImg,
        desc: "Professional fridge service and repair services for efficient cooling and performance.",
        price: 499.00,
        time: "1-2 hours"
      },
      {
        name: "Full House Wiring",
        image: electricianImg,
        desc: "Comprehensive full house wiring services for new constructions and renovations.",
        price: 14999.00,
        time: "1-2 days",
      },
      {
        name: "Wiring(per point)",
        image: electricianImg,
        desc: "Professional wiring services for individual points including installation and repair.",
        price: 159.00,
        time: "30-45 mins",
      },
      {
        name: "Switch/Socket/Holder Repair",
        image: electricianImg,
        desc: "Reliable repair services for switches, sockets, and holders to ensure safe electrical connections.",
        price: 199.00,
        time: "30-45 mins",
      },
      {
        name: "MCB/Inverter/Fuse Repair",
        image: electricianImg,
        desc: "Expert repair services for MCBs, inverters, and fuses to restore electrical safety and functionality.",
        price: 429.00,
        time: "1-2 hours",
      },
      {
        name: "Fan Repair/Tube Light Installation",
        image: electricianImg,
        desc: "Professional fan repair and tube light installation services for efficient lighting and cooling solutions.",
        price: 299.00,
        time: "30-45 mins",
      },
    ],
    Cleaning: [
      {
        name: "1BHK Deep Cleaning",
        image: cleaningImg,
        desc: "Full home sanitization including kitchen, bathrooms, and balcony areas.",
        price: 3919.00,
        time: "4-5 hours",
      },
      {
        name: "2BHK Deep Cleaning",
        image: cleaningImg,
        desc: "Full home sanitization including kitchen, bathrooms, and balcony areas.",
        price: 5299.00,
        time: "6-7 hours",
      },
      {
        name: "3BHk Deep Cleaning",
        image: cleaningImg,
        desc: "Full home sanitization including kitchen, bathrooms, and balcony areas.",
        price: 7099.00,
        time: "8-9 hours",
      },
      {
        name: "4BHk Deep Cleaning",
        image: cleaningImg,
        desc: "Full home sanitization including kitchen, bathrooms, and balcony areas.",
        price: 8499.00,
        time: "10-11 hours",
      },
      {
        name: "Penthouse (up to 3000 sq.ft)",
        image: cleaningImg,
        desc: "Premium penthouse cleaning and maintenance services for spaces up to 3000 sq.ft.",
        price: 1999.00,
        time: "7-8 hours",
      },
      {
        name: "Premium Bungalow(7000+sq.ft)",
        image: cleaningImg,
        desc: "Comprehensive cleaning and maintenance services for large bungalows over 7000 sq.ft.",
        price: 4999.00,
        time: "1-2 days",
      },
      {
        name: "Large House/Farmhouse",
        image: cleaningImg,
        desc: "Specialized cleaning services for large houses and farmhouses with extensive areas.",
        price: 6999.00,
        time: "1-2 days",
      },
      {
        name: "1BHK Essential Cleaning",
        image: cleaningImg,
        desc: "Basic cleaning services for 1BHK homes including dusting, mopping, and bathroom sanitization.",
        price: 1799.00,
        time: "2-3 hours",
      },
      {
        name: "2BHK Essential Cleaning",
        image: cleaningImg,
        desc: "Basic cleaning services for 2BHK homes including dusting, mopping, and bathroom sanitization.",
        price: 2499.00,
        time: "3-4 hours",
      },
      {
        name: "3BHK Essential Cleaning",
        image: cleaningImg,
        desc: "Basic cleaning services for 3BHK homes including dusting, mopping, and bathroom sanitization.",
        price: 3199.00,
        time: "4-5 hours",
      },
      {
        name: "4BHK Essential Cleaning",
        image: cleaningImg,
        desc: "Basic cleaning services for 4BHK homes including dusting, mopping, and bathroom sanitization.",
        price: 4199.00,
        time: "5-6 hours",
      },
      {
        name: "Standard Move-In Cleaning(1BHK)",
        image: cleaningImg,
        desc: "Thorough move-in cleaning for 1BHK homes to ensure a fresh start in your new space.",
        price: 2999.00,
        time: "3-4 hours",
      },
      {
        name: "Standard Move-In Cleaning(2BHK)",
        image: cleaningImg,
        desc: "Thorough move-in cleaning for 2BHK homes to ensure a fresh start in your new space.",
        price: 4399.00,
        time: "4-5 hours",
      },
      {
        name: "Standard Move-In Cleaning(3BHK)",
        image: cleaningImg,
        desc: "Thorough move-in cleaning for 3BHK homes to ensure a fresh start in your new space.",
        price: 5899.00,
        time: "5-6 hours",
      },
      {
        name: "Small Villa(2000-3000 sq.ft)",
        image: cleaningImg,
        desc: "Comprehensive cleaning services for small villas with areas between 2000-3000 sq.ft.",
        price: 6899.00,
        time: "1 day",
      },
      {
        name: "Medium Villa(3000-4000 sq.ft)",
        image: cleaningImg,
        desc: "Comprehensive cleaning services for medium villas with areas between 3000-4000 sq.ft.",
        price: 9599.00,
        time: "1-2 days"
      },
      {
        name: "Large Villa(4000-6000 sq.ft)",
        image: cleaningImg,
        desc: "Comprehensive cleaning services for large villas with areas between 4000-6000 sq.ft.",
        price: 11999.00,
        time: "1-2 days"
      },
      {
        name: "Small Villa 2000-3000 sq.ft (Deep Cleaning)",
        image: cleaningImg,
        desc: "Premium deep cleaning services for small villas with areas between 2000-3000 sq.ft.",
        price: 18999.00,
        time: "3-5 days",
      }, 
      { 
        name: "Medium Villa 3000-4000 sq.ft (Deep Cleaning)",
        image: cleaningImg,
        desc: "Premium deep cleaning services for medium villas with areas between 3000-4000 sq.ft.",
        price: 23999.00,
        time: "3-5 days",
      },
      {
        name: "Large Villa 4000-5000 sq.ft (Deep Cleaning)", 
        image: cleaningImg,
        desc: "Premium deep cleaning services for large villas with areas between 4000-5000 sq.ft.",
        price: 28999.00,
        time: "5-7 days",
      },
      {
        name: "Small Villa (Premium villa Cleaning)",
        image: cleaningImg,
        desc: "Exclusive premium cleaning services for small villas with areas between 2000-3000 sq.ft.",
        price: 28999.00,
        time: "5-7 days",
      },
      {
        name: "Medium Villa(Premium villa Cleaning)",
        image: cleaningImg,
        desc: "Exclusive premium cleaning services for medium villas with areas between 3000-4000 sq.ft.",
        price: 33999.00,
        time: "6-7 days",
      },
      {
        name: "Large Villa(Premium villa Cleaning)",
        image: cleaningImg,
        desc: "Exclusive premium cleaning services for large villas with areas between 4000-5000 sq.ft.",
        price: 40999.00,
        time: "7-10 days",
      },
      {
        name: "Basic Kitchen Cleaning",
        image: cleaningImg,
        desc: "Thorough cleaning of kitchen surfaces, appliances, and fixtures for a spotless cooking space.",
        price: 499.00,
        time: "2-3 hours",
      },
      {
        name: "Standard Kitchen Cleaning",
        image: cleaningImg,
        desc: "Comprehensive kitchen cleaning including deep cleaning of appliances and cabinets.",
        price: 799.00,
        time: "4-5 hours",
      },
      {
        name: "Regular Chimney Cleaning",
        image: cleaningImg,
        desc: "Professional chimney cleaning services to remove soot and ensure safe ventilation.",
        price: 599.00,
        time: "2-3 hours",
      },
      {
        name: "Deep Chimney Cleaning",
        image: cleaningImg,
        desc: "Thorough chimney cleaning services to remove stubborn soot and improve air quality.",
        price: 1199.00,
        time: "4-5 hours",
      },
      {
        name: "Chimney+Kitchen Deep Cleaning Plan",
        image: cleaningImg,
        desc: "Comprehensive deep cleaning plan for both chimney and kitchen areas for a spotless home.",
        price: 1799.00,
        time: "5-6 hours",
      },
      {
        name: "Plastic Water Tank cleaning (500L)Basic",
        image: cleaningImg,
        desc: "Basic cleaning services for plastic water tanks up to 500 liters to ensure clean water storage.",
        price: 399.00,
        time: "1-2 hours",
      },
      {
        name: "Plastic Water Tank cleaning (1000L)",
        image: cleaningImg,
        desc: "Basic cleaning services for plastic water tanks up to 1000 liters to ensure clean water storage.",
        price: 649.00,
        time: "2-3 hours",
      },
      {
        name: "Plastic Water Tank cleaning (1000L)Standard",
        image: cleaningImg,
        desc: "Standard cleaning services for plastic water tanks up to 1000 liters with deep cleaning and sanitization.",
        price: 999.00,
        time: "3-4 hours",
      },
      {
        name: "Plastic Water Tank cleaning (2000L)Standard",
        image: cleaningImg,
        desc: "Standard cleaning services for plastic water tanks up to 2000 liters with deep cleaning and sanitization.",
        price: 1599.00,
        time: "4-5 hours",
      },
      {
        name: "Plastic Water Tank cleaning (500L)",
        image: cleaningImg,
        desc: "Standard cleaning services for plastic water tanks up to 500 liters with deep cleaning and sanitization.",
        price: 649.00,
        time: "2-3 hours",
      },
      {
        name: "Plastic Water Tank cleaning (2000L)Basic",
        image: cleaningImg,
        desc: "Basic cleaning services for plastic water tanks up to 2000 liters to ensure clean water storage.",
        price: 1099.00,
        time: "2-3 hours",
      },
      {
        name: "Terrace Water Tank(RCC/Cement)Up to 2000L",
        image: cleaningImg,
        desc: "Professional cleaning services for terrace tanks made of RCC or cement up to 2000 liters.",
        price: 1199.00,
        time: "3-4 hours",
      },
      {
        name: "Terrace Water Tank(RCC/Cement)2000L-5000L",
        image: cleaningImg,
        desc: "Professional cleaning services for terrace tanks made of RCC or cement between 2000-5000 liters.",
        price: 2499.00,
        time: "4-5 hours",
      },
      {
        name: "Terrace Water Tank(RCC/Cement)5000L-10000L",
        image: cleaningImg,
        desc: "Professional cleaning services for terrace tanks made of RCC or cement between 5000-10000 liters.",
        price: 4499.00,
        time: "5-6 hours",
      },
      {
        name: "Terrace Water Tank Cleaning (RCC/Cement) Extra Large10000L+",
        image: cleaningImg,
        desc: "Professional cleaning services for terrace tanks made of RCC or cement over 10000 liters.",
        price: 7999.00,
        time: "6-8 hours",
      },
      {
        name: "Underground Water Tank Cleaning (UGT)Up to 3000L",
        image: cleaningImg,
        desc: "Professional cleaning services for underground water tanks up to 3000 liters.",
        price: 2199.00,
        time: "2-3 hours",
      },
      {
        name: "Underground Water Tank Cleaning (UGT)3000L-8000L",
        image: cleaningImg,
        desc: "Professional cleaning services for underground water tanks between 3000-8000 liters.",
        price: 4199.00,
        time: "3-4 hours",
      },
      {
        name: "Underground Water Tank Cleaning (UGT)8000L-15000L",
        image: cleaningImg,
        desc: "Professional cleaning services for underground water tanks between 8000-15000 liters.",
        price: 7599.00,
        time: "4-5 hours",
      },
      {
        name: "Underground Water Tank Cleaning (UGT)15000L+",
        image: cleaningImg,
        desc: "Professional cleaning services for underground water tanks over 15000 liters.",
        price: 13999.00,
        time: "5-7 hours",
      },
      {
        name: "Septic Tank Cleaning (Small - up to 3000L)",
        image: cleaningImg,
        desc: "Professional cleaning services for small septic tanks up to 3000 liters.",
        price: 3199.00,
        time: "3-4 hours",
      },
      {
        name: "Septic Tank Cleaning (Medium - 3000L-8000L)",
        image: cleaningImg,
        desc: "Professional cleaning services for medium septic tanks between 3000-8000 liters.",
        price: 6999.00,
        time: "4-5 hours",
      },
      {
        name: "Septic Tank Cleaning (Large - 8000-20000L)",
        image: cleaningImg,
        desc: "Professional cleaning services for large septic tanks between 8000-20000 liters.",
        price: 12999.00,
        time: "5-7 hours",
      },
      {
        name: "Septic Tank Cleaning (Commercial/Villa Estate)",
        image: cleaningImg,
        desc: "Professional cleaning services for commercial septic tanks and villa estates with large capacities.",
        price: 25999.00,
        time: "7-10 hours",
      },
      {
        name: "Septic Tank Cleaning services",
        image: cleaningImg,
        desc: "General septic tank cleaning services with base price. Final price may vary based on tank size and condition.",
        price: 699.00,
        time: "3-4 hours",
      },
      {
        name: "Water Tank Cleaning",
        image: cleaningImg,
        desc: "Professional cleaning services for water tanks to remove dirt and maintain hygiene.",
        price: 699.00,
        time: "2-3 hours"
      },
      {
        name: "1 Seater Sofa Cleaning",
        image: cleaningImg,
        desc: "Professional cleaning services for 1 seater sofas to remove stains and refresh upholstery.",
        price: 299.00,
        time: "1-2 hours",
      },
      {
        name: "3 Seater Sofa Cleaning",
        image: cleaningImg,
        desc: "Professional cleaning services for 3 seater sofas to remove stains and refresh upholstery.",
        price: 599.00,
        time: "2-3 hours",
      },
      {
        name: "Premium Material(Leather/Recliner)",
        image: cleaningImg,
        desc: "Specialized cleaning services for premium materials like leather and recliner sofas to maintain quality and appearance.",
        price: 1499.00,
        time: "4-5 hours",
      },
      {
        name: "Professional Laundry & Iron Service",
        image: cleaningImg,
        desc: "Convenient laundry and ironing services for your clothes with pickup and delivery options.",
        price: 20.00,
        time: "1-2 days",
      },
      {
        name: "4-6 Seats Sofa Cleaning",
        image: cleaningImg,
        desc: "Professional cleaning services for 4-6 seater sofas to remove stains and refresh upholstery.",
        price: 899.00,
        time: "3-4 hours",
      },
      {
        name: "Pest Control(1BHK)",
        image: cleaningImg,
        desc: "Effective pest control services for 1BHK homes to eliminate common pests and ensure a safe living environment.",
        price: 599.00,
        time: "2-3 hours",
      },
      {
        name: "Pest Control(2BHK)",
        image: cleaningImg,
        desc: "Effective pest control services for 2BHK homes to eliminate common pests and ensure a safe living environment.",
        price: 849.00,
        time: "3-4 hours",
      },
      {
        name: "Pest Control(3BHK)",
        image: cleaningImg,
        desc: "Effective pest control services for 3BHK homes to eliminate common pests and ensure a safe living environment.",
        price: 1199.00,
        time: "4-5 hours",
      },
      {
        name: "Pest Control(4BHK)",
        image: cleaningImg,
        desc: "Effective pest control services for 4BHK homes to eliminate common pests and ensure a safe living environment.",
        price: 1499.00,
        time: "5-6 hours",
      },
      {
        name: "Geyser Deep Cleaning(Hard Water/Scale Removal)",
        image: cleaningImg,
        desc: "Professional deep cleaning services for geysers to remove hard water scale and improve efficiency.",
        price: 399.00,
        time: "2-3 hours",
      },
      {
        name: "Bathroom cleaning(Deep Cleaning)",
        image: cleaningImg,
        desc: "Thorough deep cleaning services for bathrooms to remove grime, mold, and ensure a hygienic space.",
        price: 799.00,
        time: "3-4 hours",
      },
      {
        name: "Foam+Jet Deep Cleaning(AC)",
        image: cleaningImg,
        desc: "Advanced cleaning method for AC units to remove dirt and improve performance.",
        price: 599.00,
        time: "2-3 hours",
      },
      {
        name: "Standard Jet wash Services",
        image: cleaningImg,
        desc: "Regular jet wash services for AC units to maintain cleanliness and performance.",
        price: 450.00,
        time: "1-2 hours"
      },
      {
        name: "Anti-Rust/Monsoon",
        image: cleaningImg,
        desc: "Protection against rust and damage during monsoon season.",
        price: 999.00,
        time: "1-2 hours"
      },
      {
        name: "Bathroom cleaning",
        image: cleaningImg,
        desc: "Professional cleaning services for bathrooms to maintain hygiene and freshness.",
        price: 599.00,
        time: "2-3 hours",
      },
      {
        name: "Move-In/Move-Out Tank Cleaning Only tanks",
        image: cleaningImg,
        desc: "Specialized cleaning services for water tanks during move-in or move-out to ensure clean water storage.",
        price: 2199.00,
        time: "3-4 hours",
      },
      {
        name: "Move-In/Move-Out Tank+Pipelines",
        image: cleaningImg,
        desc: "Comprehensive cleaning services for water tanks and pipelines during move-in or move-out to ensure clean water flow.",
        price: 5999.00,
        time: "4-5 hours",
      },
      {
        name: "Move-In/Move-Out Tank Cleaning Full Villa water system",
        image: cleaningImg,
        desc: "Complete cleaning services for water tanks, pipelines, and plumbing systems in villas during move-in or move-out.",
        price: 11999.00,
        time: "1-2 days",
      },
    ],
    "AC Repair": [
      {
        name: "AC Repair",
        image: acServiceImg,
        desc: "Expert AC repair services for all major brands to restore cooling performance.",
        price: 499.00,
        time: "1-2 hours",
      },
      {
        name: "AC Installation",
        image: acServiceImg,
        desc: "Professional AC installation services for efficient cooling and optimal performance.",
        price: 1399.00,
        time: "2-3 hours",
      },
    ],
    Salon: [
      {
        name: "Men Hair Cut",
        image: salonImg,
        desc: "Professional hair cutting services for men with experienced stylists.",
        price: 249.00,
        time: "30 mins",
      },
      {
        name: "Women Hair Cut",
        image: salonImg,
        desc: "Professional hair cutting services for women with experienced stylists.",
        price: 249.00,
        time: "45 mins",
      },
      {
        name: "Bridal Hd Airbrush",
        image: salonImg,
        desc: "Specialized bridal HD airbrush makeup services for a flawless wedding look.",
        price: 11000.00,
        time: "3-4 hours",
      },
      {
        name: "Engagement Makeup",
        image: salonImg,
        desc: "Professional engagement makeup services to enhance your natural beauty for the special occasion.",
        price: 4999.00,
        time: "2-3 hours",
      },
      {
        name: "Reception Makeup",
        image: salonImg,
        desc: "Expert reception makeup services to create a stunning look for your big day.",
        price: 4999.00,
        time: "3-4 hours",
      },
      {
        name: "Men Bridal Makeup",
        image: salonImg,
        desc: "Specialized bridal makeup services for men to look their best on their special day.",
        price: 5100.00,
        time: "2-3 hours",
      },
      {
        name: "Women Hair Straightening",
        image: salonImg,
        desc: "Professional hair straightening services for women to achieve sleek and smooth hair.",
        price: 299.00,
        time: "2-3 hours",
      },
      {
        name: "Hair style Woman/Girls",
        image: salonImg,
        desc: "Professional hairstyling services for women and girls to enhance their natural beauty.",
        price: 299.00,
        time: "45 mins",
      },
      {
        name: "children Hair Cut",
        image: salonImg,
        desc: "Professional hair cutting services for children with experienced stylists.",
        price: 199.00,
        time: "30 mins",
      },
      {
        name: "Hair Mehndi Woman",
        image: salonImg,
        desc: "Traditional hair mehndi services for women to create beautiful henna designs on hair for special occasions.",
        price: 249.00,
        time: "1-2 hours",
      },
      {
        name: "Mehndi(Shahnaz)",
        image: salonImg,
        desc: "Professional mehndi services by Shahnaz for intricate and beautiful henna designs for weddings and special occasions.",
        price: 299.00,
        time: "2-3 hours",
      },
      {
        name: "Hair color Woman",
        image: salonImg,
        desc: "Professional hair coloring services for women to achieve vibrant and long-lasting color results.",
        price: 149.00,
        time: "3-4 hours",
      },
      {
        name: "Professional Ladies Tailor/Gents Tailor",
        image: salonImg,
        desc: "Expert tailoring services for ladies and gents to ensure perfect fit and style for your garments.",
        price: 699.00,
        time: "1-2 days",
      },
      {
        name: "Luxury Grooming Pack",
        image: salonImg,
        desc: "Indulge in our Luxury Grooming Pack for a complete makeover and pampering experience.",
        price: 1799.00,
        time: "3-4 hours",
      },
      {
        name: "Eyebrow Shaping",
        image: salonImg,
        desc: "Professional eyebrow shaping services to enhance your natural beauty and frame your face.",
        price: 89.00,
        time: "30 mins",
      },
      {
        name: "Nose Wax",
        image: salonImg,
        desc: "Gentle and effective nose waxing services to remove unwanted hair and maintain a clean look.",
        price: 99.00,
        time: "30 mins",  
      },
      {
        name: "Body Scrub(Men)",
        image: salonImg,
        desc: "Invigorating body scrub services for men to exfoliate and rejuvenate the skin for a refreshed appearance.",
        price: 899.00,
        time: "45 mins",
      },
      {
        name: "Body scrub(Female)",
        image: salonImg,
        desc: "Revitalizing body scrub services for women to exfoliate and nourish the skin for a radiant glow.",
        price: 999.00,
        time: "45 mins",
      },
      {
        name: "Beard Color",
        image: salonImg,
        desc: "Professional beard coloring services to achieve a stylish and well-groomed look for men.",
        price: 399.00,
        time: "30 mins",
      },
      {
        name: "Bridal Mini",
        image: salonImg,
        desc: "Specialized bridal mini makeup services for a quick and flawless look on your special day.",
        price: 5999.00,
        time: "1 hour",
      },
      {
        name: "Charcoal Facial(Men)",
        image: salonImg,
        desc: "Deep cleansing charcoal facial services for men to detoxify and refresh the skin for a healthy complexion.",
        price: 899.00,
        time: "45 mins",
      },
      {
        name: "Back Wax(Men)",
        image: salonImg,
        desc: "Professional back wax(men) services. Book experienced professionals for guaranteed satisfaction.",
        price: 399.00,
        time: "30 mins",
      },
      {
        name: "Full Arms wax(Men)",
        image: salonImg,
        desc: "Professional full arms wax(men) services. Book experienced professionals for guaranteed satisfaction.",
        price: 349.00,
        time: "2 hours",
      },
      {
        name: "Full Legs Wax",
        image: salonImg,
        desc: "Professional full legs wax services. Book experienced professionals for guaranteed satisfaction.",
        price: 499.00,
        time: "2 hours",
      },
      {
        name: "Full Body wax",
        image: salonImg,
        desc: "Professional full body wax services. Book experienced professionals for guaranteed satisfaction.",
        price: 1999.00,
        time: "2 hours",
      },
      {
        name: "Underarms Wax(Men)",
        image: salonImg,
        desc: "Professional underarms wax(men) services. Book experienced professionals for guaranteed satisfaction.",
        price: 239.00,
        time: "1 hours",
      },
      {
        name: "Chest wax(Men)",
        image: salonImg,
        desc: "Professional chest wax(men) services. Book experienced professionals for guaranteed satisfaction.",
        price: 399.00,
        time: "1 hours",
      },
      {
        name: "Men Grooming Basic(Package)",
        image: salonImg,
        desc: "Professional men grooming basic(package) services. Book experienced professionals for guaranteed satisfaction.",
        price: 399.00,
        time: "3 hours",
      },
      {
        name: "Men Premium",
        image: salonImg,
        desc: "Professional men premium services. Book experienced professionals for guaranteed satisfaction.",
        price: 799.00,
        time: "2 hours",
      },
      {
        name: "Women Beauty Basic(package)",
        image: salonImg,
        desc: "Professional women beauty basic(package) services. Book experienced professionals for guaranteed satisfaction.",
        price: 699.00,
        time: "3 hours",
      },
     {
        name: "Women Premium",
        image: salonImg,
        desc: "Professional women premium services. Book experienced professionals for guaranteed satisfaction.",
        price: 1699.00,
        time: "2 hours",
      },
      {
        name: "Full Body Wax(Women)",
        image: salonImg,
        desc: "Professional full body wax(women) services. Book experienced professionals for guaranteed satisfaction.",
        price: 2399.00,
        time: "2 hours",
      },
      {
        name: "Manicure(Basic)",
        image: salonImg,
        desc: "Professional manicure(basic) services. Book experienced professionals for guaranteed satisfaction.",
        price: 399.00,
        time: "2 hours",
      },
      {
        name: "Padicure(Basic)",
        image: salonImg,
        desc: "Professional padicure(basic) services. Book experienced professionals for guaranteed satisfaction.",
        price: 499.00,
        time: "2 hours",
      },
      {
        name: "Nail Extension",
        image: salonImg,
        desc: "Professional nail extension services. Book experienced professionals for guaranteed satisfaction.",
        price: 1999.00,
        time: "1 hours",
      },
      {
        name: "Detain(Women)",
        image: salonImg,
        desc: "Professional detain(women) services. Book experienced professionals for guaranteed satisfaction.",
        price: 399.00,
        time: "2 hours",
      },
      {
        name: "Women Bleach",
        image: salonImg,
        desc: "Professional women bleach services. Book experienced professionals for guaranteed satisfaction.",
        price: 349.00,
        time: "3 hours",
      },
      {
        name: "Full Arms Waxing(Women)",
        image: salonImg,
        desc: "Professional full arms waxing(women) services. Book experienced professionals for guaranteed satisfaction.",
        price: 349.00,
        time: "2 hours",
      },
      {
        name: "Full Leg Waxing(Women)",
        image: salonImg,
        desc: "Professional full leg waxing(women) services. Book experienced professionals for guaranteed satisfaction.",
        price: 499.00,
        time: "1 hours",
      },
      {
        name: "Hair Coloring(Women)",
        image: salonImg,
        desc: "Professional hair coloring(women) services. Book experienced professionals for guaranteed satisfaction.",
        price: 1999.00,
        time: "2 hours",
      },
      {
        name: "Face Cleanup(Women)",
        image: salonImg,
        desc: "Professional face cleanup(women) services. Book experienced professionals for guaranteed satisfaction.",
        price: 499.00,
        time: "2 hours",
      },
      {
        name: "Women Facial",
        image: salonImg,
        desc: "Professional women facial services. Book experienced professionals for guaranteed satisfaction.",
        price: 1199.00,
        time: "4 hours",
      },
      {
        name: "Men Hair Colour",
        image: salonImg,
        desc: "Professional men hair colour services. Book experienced professionals for guaranteed satisfaction.",
        price: 999.00,
        time: "2 hours",
      },
      {
        name: "Keratin(Men)",
        image: salonImg,
        desc: "Professional keratin(men) services. Book experienced professionals for guaranteed satisfaction.",
        price: 3999.00,
        time: "5 hours",
      },
      {
        name: "Women Hair Cut(Styling)",
        image: salonImg,
        desc: "Professional women hair cut(styling) services. Book experienced professionals for guaranteed satisfaction.",
        price: 449.00,
        time: "2 hours",
      },
      {
        name: "Hair Wash+Blow Dry(Women)",
        image: salonImg,
        desc: "Professional hair wash+blow dry(women) services. Book experienced professionals for guaranteed satisfaction.",
        price: 519.00,
        time: "3 hours",
      },
      {
        name: "Men Face&Skin(Cleanup)",
        image: salonImg,
        desc: "Professional men face&skin(cleanup) services. Book experienced professionals for guaranteed satisfaction.",
        price: 319.00,
        time: "2 hours",
      },
      {
        name: "Men Facial",
        image: salonImg,
        desc: "Professional men facial services. Book experienced professionals for guaranteed satisfaction.",
        price: 599.00,
        time: "2 hours",
      },
      {
        name: "Detain",
        image: salonImg,
        desc: "Professional detain services. Book experienced professionals for guaranteed satisfaction.",
        price: 299.00,
        time: "2 hours",
      },
      {
        name: "Hair Cut+Wash(Men)",
        image: salonImg,
        desc: "Professional hair cut+wash(men) services. Book experienced professionals for guaranteed satisfaction.",
        price: 349.00,
        time: "2 hours",
      },
      {
        name: "Beard Trim(Men)",
        image: salonImg,
        desc: "Professional beard trim(men) services. Book experienced professionals for guaranteed satisfaction.",
        price: 199.00,
        time: "2 hours",
      },
      {
        name: "Shaving(Men)",
        image: salonImg,
        desc: "Professional shaving(men) services. Book experienced professionals for guaranteed satisfaction.",
        price: 199.00,
        time: "2 hours",
      },
      {
        name: "HairCut+Beard(Men)",
        image: salonImg,
        desc: "Professional haircut+beard(men) services. Book experienced professionals for guaranteed satisfaction.",
        price: 449.00,
        time: "3 hours",
      },
      {
        name: "HairCut(Men Salon)",
        image: salonImg,
        desc: "Professional haircut(men salon) services. Book experienced professionals for guaranteed satisfaction.",
        price: 199.00,
        time: "1 hours",
      },
    ],
    SPA: [
        {
          name: "Men Spa(1 Hours)",
          image: spaImg,
          desc: "Relieve stress and muscle tension with our certified therapists.",
          price: 1199,
          time: "60 mins",
        },
        {
          name: "Women Spa(1 Hours)",
          image: spaImg,
          desc: "Gentle, rhythmic strokes for complete mind and body relaxation.",
          price: 1399.00,
          time: "90 mins",
        },
        {
          name: "Premium Home Spa(90 minutes Men)",
          image: spaImg,
          desc: "Professional premium home spa(90 minutes men) services. Book experienced professionals for guaranteed satisfaction.",
          price: 1799.00,
          time: "90 mins",
        },
        {
          name: "Premium Home Spa(90 minutes Women)",
          image: spaImg,
          desc: "Professional premium home spa(90 minutes women) services. Book experienced professionals for guaranteed satisfaction.",
          price: 1999.00,
          time: "90 mins",
        },
        {
          name: "Delux Home Spa(Men 120 minutes+ Add ons)",
          image: spaImg,
          desc: "Professional delux home spa(men 120 minutes+ add ons) services. Book experienced professionals for guaranteed satisfaction.",
          price: 2399.00,
          time: "90 mins",
        },
        {
          name: "Delux Home Spa(Women 120 minutes+ Add ons",
          image: spaImg,
          desc: "Professional delux home spa(women 120 minutes+ add ons services. Book experienced professionals for guaranteed satisfaction.",
          price: 2599.00,
          time: "90 mins",
        },
        {
          name: "Couples Spa(60 minutes)",
          image: spaImg,
          desc: "Professional couples spa(60 minutes) services. Book experienced professionals for guaranteed satisfaction.",
          price: 2399.00,
          time: "90 mins",
        },
        {
          name: "Premium Couple Spa(90 minutes)",
          image: spaImg,
          desc: "Professional premium couple spa(90 minutes) services. Book experienced professionals for guaranteed satisfaction.",
          price: 3159.00,
          time: "90 mins",
        },
        {
          name: "Hair Spa(Men)",
          image: spaImg,
          desc: "Professional hair spa(men) services. Book experienced professionals for guaranteed satisfaction.",
          price: 699.00,
          time: "90 mins",
        },
        {
          name: "Head Massage",
          image: spaImg,
          desc: "Professional head massage services. Book experienced professionals for guaranteed satisfaction.",
          price: 249.00,
          time: "90 mins",
        },
        {
          name: "Manicure+Pedicure Combo(Women)",
          image: spaImg,
          desc: "Professional manicure+pedicure combo(women) services. Book experienced professionals for guaranteed satisfaction.",
          price: 1099.00,
          time: "90 mins",
        },
        {
          name: "Manicure(spa)",
          image: spaImg,
          desc: "Professional manicure(spa) services. Book experienced professionals for guaranteed satisfaction.",
          price: 699.00,
          time: "90 mins",
        },
        {
          name: "Pedicure (spa Women)",
          image: spaImg,
          desc: "Professional pedicure (spa women) services. Book experienced professionals for guaranteed satisfaction.",
          price: 799.00,
          time: "120 mins",
        },
        {
          name: "Women Hair Spa",
          image: spaImg,
          desc: "Professional women hair spa services. Book experienced professionals for guaranteed satisfaction.",
          price: 999.00,
          time: "90 mins",
        },
        {
          name: "Men Hair Spa",
          image: spaImg,
          desc: "Professional men hair spa services. Book experienced professionals for guaranteed satisfaction.",
          price: 699.00,
          time: "140 mins",
        },
      ],
      Repairing: [
        {
          name: "Laptop Repair & Service",
          image: repairingImg,
          desc: "Professional laptop repair & service services. Book experienced professionals for guaranteed satisfaction.",
          price: 499.00,
          time: "90 mins",
        },
        {
          name: "Electrician Motor Repair",
          image: repairingImg,
          desc: "Professional electrician motor repair services. Book experienced professionals for guaranteed satisfaction.",
          price: 699.00,
          time: "90 mins",
        },
        {
          name: "Tv Installation & Repair",
          image: repairingImg,
          desc: "Professional tv installation & repair services. Book experienced professionals for guaranteed satisfaction.",
          price: 699.00,
          time: "90 mins",
        }, 
        {
          name: "AC Repair(Major)",
          image: repairingImg,
          desc: "Professional ac repair(major) services. Book experienced professionals for guaranteed satisfaction.",
          price: 1499.00,
          time: "120 mins",
        },     
        {
          name: "Fan Repair",
          image: repairingImg,
          desc: "Professional fan repair services. Book experienced professionals for guaranteed satisfaction.",
          price: 249.00,
          time: "90 mins",
        }, 
        {
          name: "AC Electrical Work",
          image: repairingImg,
          desc: "Professional ac electrical work services. Book experienced professionals for guaranteed satisfaction.",
          price: 819.00,
          time: "120 mins",
        },  
        {
          name: "Basin Repair",
          image: repairingImg,
          desc: "Professional basin repair services. Book experienced professionals for guaranteed satisfaction.",
          price: 289.00,
          time: "90 mins",
        },  
        {
          name: "Flush Repair",
          image: repairingImg,
          desc: "Professional flush repair services. Book experienced professionals for guaranteed satisfaction.",
          price: 379.00,
          time: "90 mins",
        },  
        {
          name: "Basic Repair",
          image: repairingImg,
          desc: "Professional basic repair services. Book experienced professionals for guaranteed satisfaction.",
          price: 299.00,
          time: "90 mins",
        },  
        {
          name: "Inverter Repair",
          image: repairingImg,
          desc: "Professional inverter repair services. Book experienced professionals for guaranteed satisfaction.",
          price: 899.00,
          time: "90 mins",
        },  
        {
          name: "Major Repairing(Washing Machine)",
          image: repairingImg,
          desc: "Professional major repairing(washing machine) services. Book experienced professionals for guaranteed satisfaction.",
          price: 799.00,
          time: "90 mins",
        },  
        {
          name: "Gas Refill",
          image: repairingImg,
          desc: "Professional gas refill services. Book experienced professionals for guaranteed satisfaction.",
          price: 509.00,
          time: "30 mins",
        },  
        {
          name: "Minor Repair(Fridge)",
          image: repairingImg,
          desc: "Professional minor repair(fridge) services. Book experienced professionals for guaranteed satisfaction.",
          price: 519.00,
          time: "90 mins",
        },  
        {
          name: "Major Repair(Fridge)",
          image: repairingImg,
          desc: "Professional major repair(fridge) services. Book experienced professionals for guaranteed satisfaction.",
          price: 999.00,
          time: "90 mins",
        },  
        {
          name: "Filter Replacement",
          image: repairingImg,
          desc: "Professional filter replacement services. Book experienced professionals for guaranteed satisfaction.",
          price: 389.00,
          time: "90 mins",
        },  
        {
          name: "RO Repair",
          image: repairingImg,
          desc: "Professional ro repair services. Book experienced professionals for guaranteed satisfaction.",
          price: 419.00,
          time: "90 mins",
        },  
        {
          name: "Top Load Service(Washing Machine)",
          image: repairingImg,
          desc: "Professional top load service(washing machine) services. Book experienced professionals for guaranteed satisfaction.",
          price: 389.00,
          time: "90 mins",
        },  
        {
          name: "Minor Repair(Washing Machine)",
          image: repairingImg,
          desc: "Professional minor repair(washing machine) services. Book experienced professionals for guaranteed satisfaction.",
          price: 449.00,
          time: "90 mins",
        },  
        {
          name: "Filter Replacement(RO)",
          image: repairingImg,
          desc: "Professional filter replacement(ro) services. Book experienced professionals for guaranteed satisfaction.",
          price: 489.00,
          time: "90 mins",
        },  
        {
          name: "RO Inspection",
          image: repairingImg,
          desc: "Professional ro inspection services. Book experienced professionals for guaranteed satisfaction.",
          price: 199.00,
          time: "90 mins",
        },  
        {
          name: "RO Service",
          image: repairingImg,
          desc: "Professional ro service services. Book experienced professionals for guaranteed satisfaction.",
          price: 389.00,
          time: "90 mins",
        },  
        {
          name: "Laptop Cleaning",
          image: repairingImg,
          desc: "Professional laptop cleaning services. Book experienced professionals for guaranteed satisfaction.",
          price: 289.00,
          time: "90 mins",
        },  
        {
          name: "Battery Replacement",
          image: repairingImg,
          desc: "Professional battery replacement services. Book experienced professionals for guaranteed satisfaction.",
          price: 999.00,
          time: "90 mins",
        },  
        {
          name: "Screen Repair",
          image: repairingImg,
          desc: "Professional screen repair services. Book experienced professionals for guaranteed satisfaction.",
          price: 599.00,
          time: "90 mins",
        },  
         {
          name: "AC Gas Refill",
          image: repairingImg,
          desc: "Professional ac gas refill services. Book experienced professionals for guaranteed satisfaction.",
          price: 899.00,
          time: "90 mins",
        },
        {
          name: "AC Repair(Minor)",
          image: repairingImg,
          desc: "Professional ac repair(minor) services. Book experienced professionals for guaranteed satisfaction.",
          price: 519.00,
          time: "90 mins",
        },
        {
          name: "Laptop Inspection",
          image: repairingImg,
          desc: "Professional laptop inspection services. Book experienced professionals for guaranteed satisfaction.",
          price: 199.00,
          time: "90 mins",
        },
        {
          name: "Geyser Repair",
          image: repairingImg,
          desc: "Professional geyser repair services. Book experienced professionals for guaranteed satisfaction.",
          price: 449.00,
          time: "1 Hours"
        },
        {
          name: "Chimney Repair",
          image: repairingImg,
          desc: "Professional chimney repair services. Book experienced professionals for guaranteed satisfaction.",
          price: 699.00,
          time: "1 Hours"
        },
      ],
      Architecture: [
        {
          name: "House Architecture",
          image: architectureImg,
          desc: "Professional house architecture services. Book experienced professionals for guaranteed satisfaction.",
          price: 5000.00,
          time: "4 Hours"
        },
        {
          name: "Professional Raj Mistri",
          image: architectureImg,
          desc: "Professional professional raj mistri services. Book experienced professionals for guaranteed satisfaction.",
          price: 999.00,
          time: "2 Hours"
        },
        {
          name: "Tiles,Marbles,Italian,Work",
          image: architectureImg,
          desc: "Professional tiles,marbles,italian,work services. Book experienced professionals for guaranteed satisfaction.",
          price: 2499.00,
          time: "6 Hours"
        },
        {
          name: "Architect Consulation(Per Visit)",
          image: architectureImg,
          desc: "Professional architect consulation(per visit) services. Book experienced professionals for guaranteed satisfaction.",
          price: 599.00,
          time: "1 Hours"
        },
        {
          name: "Wall-Mounted Shelf/Curtain Rod Installation",
          image: architectureImg,
          desc: "Professional wall-mounted shelf/curtain rod installation services. Book experienced professionals for guaranteed satisfaction.",
          price: 199.00,
          time: "1 Hours"
        },
      ],
      Mechanic: [
        {
          name: "Inverter Installation",
          image: mechanicImg,
          desc: "Professional inverter installation services. Book experienced professionals for guaranteed satisfaction.",
          price: 379.00,
          time: "1 Hours"
        },
        {
          name: "Battery Installation",
          image: mechanicImg,
          desc: "Professional battery installation services. Book experienced professionals for guaranteed satisfaction.",
          price: 319.00,
          time: "1 Hours"
        },
        {
          name: "Fan Installation",
          image: mechanicImg,
          desc: "Professional fan installation services. Book experienced professionals for guaranteed satisfaction.",
          price: 349.00,
          time: "1 Hours"
        },
        {
          name: "RO Installation",
          image: mechanicImg,
          desc: "Professional ro installation services. Book experienced professionals for guaranteed satisfaction.",
          price: 649.00,
          time: "1 Hours"
        },
        {
          name: "Washing Machine Installation",
          image: mechanicImg,
          desc: "Professional washing machine installation services. Book experienced professionals for guaranteed satisfaction.",
          price: 499.00,
          time: "1 Hours"
        },
        {
          name: "Inverter Installation & Repair Service",
          image: mechanicImg,
          desc: "Professional inverter installation & repair service services. Book experienced professionals for guaranteed satisfaction.",
          price: 599.00,
          time: "1 Hours"
        },
        {
          name: "Professional Car Mechanic",
          image: mechanicImg,
          desc: "Professional professional car mechanic services. Book experienced professionals for guaranteed satisfaction.",
          price: 699.00,
          time: "1 Hours"
        },
        {
          name: "Professional Bike Mechanic",
          image: mechanicImg,
          desc: "Professional professional bike mechanic services. Book experienced professionals for guaranteed satisfaction.",
          price: 699.00,
          time: "1 Hours"
        },
        {
          name: "Single Camera Installation",
          image: mechanicImg,
          desc: "Professional single camera installation services. Book experienced professionals for guaranteed satisfaction.",
          price: 599.00,
          time: "1 Hours"
        },
        {
          name: "2-4 Camera Setup",
          image: mechanicImg,
          desc: "Professional 2-4 camera setup services. Book experienced professionals for guaranteed satisfaction.",
          price: 1099.00,
          time: "1 Hours"
        },
        {
          name: "Full System Setup(5-10 Cameras)",
          image: mechanicImg,
          desc: "Professional full system setup(5-10 cameras) services. Book experienced professionals for guaranteed satisfaction.",
          price: 2199.00,
          time: "4 Hours"
        },
        {
          name: "Maintenance/Service Visit(Per Month)",
          image: mechanicImg,
          desc: "Professional maintenance/service visit(per month) services. Book experienced professionals for guaranteed satisfaction.",
          price: 499.00,
          time: "1 Hours"
        },
        {
          name: "Basic Geyser Service(General Cleaning+Checkup)",
          image: mechanicImg,
          desc: "Professional basic geyser service(general cleaning+checkup) services. Book experienced professionals for guaranteed satisfaction.",
          price: 249.00,
          time: "1 Hours"
        },
        {
          name: "Geyser Installation",
          image: mechanicImg,
          desc: "Professional geyser installation services. Book experienced professionals for guaranteed satisfaction.",
          price: 599.00,
          time: "1 Hours"
        },
        {
          name: "Geyser Uninstallation",
          image: mechanicImg,
          desc: "Professional geyser uninstallation services. Book experienced professionals for guaranteed satisfaction.",
          price: 399.00,
          time: "1 Hours"
        },
      ],
      Carpenter: [
        {
          name: "Carpenter Furniture Work",
          image: carpenterImg,
          desc: "Professional carpenter furniture work services. Book experienced professionals for guaranteed satisfaction.",
          price: 699.00,
          time: "1 Hours"
        },
        {
          name: "Carpenter Visit(Inspection/Minor Repair)",
          image: carpenterImg,
          desc: "Professional carpenter visit(inspection/minor repair) services. Book experienced professionals for guaranteed satisfaction.",
          price: 199.00,
          time: "1 Hours"
        },
        {
          name: "Door/Window Repair Of Fitting",
          image: carpenterImg,
          desc: "Professional door/window repair of fitting services. Book experienced professionals for guaranteed satisfaction.",
          price: 349.00,
          time: "1 Hours"
        },
        {
          name: "Wood Polishing/Varnish(Per sq.Ft)",
          image: carpenterImg,
          desc: "Professional wood polishing/varnish(per sq.ft) services. Book experienced professionals for guaranteed satisfaction.",
          price: 40.00,
          time: "1 Hours"
        },
        {
          name: "Custom Furniture Work-Per Day",
          image: carpenterImg,
          desc: "Professional custom furniture work-per day services. Book experienced professionals for guaranteed satisfaction.",
          price: 899.00,
          time: "1 Hours"
        },
      ],
     Doctor: [
        {
          name: "Professional Doctors",
          image: doctorImg,
          desc: "Professional professional doctors services. Book experienced professionals for guaranteed satisfaction.",
          price: 699.00,
          time: "1 Hours"
        },
     ],
     Painter: [
      {
          name: "Professional Painter",
          image: painterImg,
          desc: "Professional professional painter services. Book experienced professionals for guaranteed satisfaction.",
          price: 699.00,
          time: "1 Hours"
      },
     ],
     PanditJI: [
      {
          name: "Professional PanditJI",
          image: panditImg,
          desc: "Professional professional panditji services. Book experienced professionals for guaranteed satisfaction.",
          price: 1100.00,
          time: "1 Hours"
      },
     ],
     Halwai: [
      {
          name: "Professional Halwai",
          image: halwaiImg,
          desc: "Professional professional halwai services. Book experienced professionals for guaranteed satisfaction.",
          price: 999.00,
          time: "5 Hours"
      },
     ],
     Compounder: [
      {
          name: "Professional Compounder",
          image: compounderImg,
          desc: "Professional professional compounder services. Book experienced professionals for guaranteed satisfaction.",
          price: 699.00,
          time: "1 Hours"
      },
     ],
     TaxConsultancy: [
      {
          name: "Tax Consultancy Services",
          image: taxImg,
          desc: "Professional tax consultancy services services. Book experienced professionals for guaranteed satisfaction.",
          price: 1999.00,
          time: "1 Hours"
      },
     ],
     Driver: [
      {
          name: "Hourly Driver Service",
          image: driverImg,
          desc: "Professional hourly driver service services. Book experienced professionals for guaranteed satisfaction.",
          price: 199.00,
          time: "1 Hours"
      },
      {
          name: "Full Day Driver Service(Vechile Provide By Customer) 10-Hours",
          image: driverImg,
          desc: "Professional full day driver service(vechile provide by customer) 10-hours services. Book experienced professionals for guaranteed satisfaction.",
          price: 1499.00,
          time: "1 Hours"
      },
     ],
     Photographer: [
      {
          name: "Professional Photographer",
          image: photographerImg,
          desc: "Professional professional photographer services. Book experienced professionals for guaranteed satisfaction.",
          price: 999.00,
          time: "1 Hours"
      },
      {
          name: "POrtrait/Profile Shoot(1 hr)",
          image: photographerImg,
          desc: "Professional portrait/profile shoot(1 hr) services. Book experienced professionals for guaranteed satisfaction.",
          price: 799.00,
          time: "1 Hours"
      },
      {
          name: "Event PhotoGraphy 2-4 hrs",
          image: photographerImg,
          desc: "Professional event photography 2-4 hrs services. Book experienced professionals for guaranteed satisfaction.",
          price: 999.00,
          time: "1 Hours"
      },
      {
          name: "Pre-Wedding/Couple Shoot(3-6 hrs)",
          image: photographerImg,
          desc: "Professional pre-wedding/couple shoot(3-6 hrs) services. Book experienced professionals for guaranteed satisfaction.",
          price: 4499.00,
          time: "1 Hours"
      },
      {
          name: "Corporate/Product Photography 2-5 hrs",
          image: photographerImg,
          desc: "Professional corporate/product photography 2-5 hrs services. Book experienced professionals for guaranteed satisfaction.",
          price: 3599.00,
          time: "1 Hours"
      },
     ],
     CarWashing: [
      {
          name: "Basic Car Wash(Exterior Only)",
          image: carWashImg,
          desc: "Professional basic car wash(exterior only) services. Book experienced professionals for guaranteed satisfaction.",
          price: 249.00,
          time: "1 Hours"
      },
      {
          name: "Standard Car Wash(Exterior+INterior)",
          image: carWashImg,
          desc: "Professional standard car wash(exterior+interior) services. Book experienced professionals for guaranteed satisfaction.",
          price: 449.00,
          time: "1 Hours"
      },
      {
          name: "Premium Car Spa(Deep Cleaning)",
          image: carWashImg,
          desc: "Professional premium car spa(deep cleaning) services. Book experienced professionals for guaranteed satisfaction.",
          price: 1249.00,
          time: "1 Hours"
      },
      {
          name: "Luxury Car Detailing(Professional)",
          image: carWashImg,
          desc: "Professional luxury car detailing(professional) services. Book experienced professionals for guaranteed satisfaction.",
          price: 3499.00,
          time: "1 Hours"
      },
      {
          name: "Basic Wash-Hatchback",
          image: carWashImg,
          desc: "Professional basic wash-hatchback services. Book experienced professionals for guaranteed satisfaction.",
          price: 249.00,
          time: "1 Hours"
      },
      {
          name: "Standard Wash-Hatchback",
          image: carWashImg,
          desc: "Professional standard wash-hatchback services. Book experienced professionals for guaranteed satisfaction.",
          price: 349.00,
          time: "1 Hours"
      },
      {
          name: "Premium Cleaning-Hatchback",
          image: carWashImg,
          desc: "Professional premium cleaning-hatchback services. Book experienced professionals for guaranteed satisfaction.",
          price: 799.00,
          time: "1 Hours"
      },
      {
          name: "Luxury Detailing-Hatchback",
          image: carWashImg,
          desc: "Professional luxury detailing-hatchback services. Book experienced professionals for guaranteed satisfaction.",
          price: 1949.00,
          time: "1 Hours"
      },
      {
          name: "Basic Wash-Sedan",
          image: carWashImg,
          desc: "Professional basic wash-sedan services. Book experienced professionals for guaranteed satisfaction.",
          price: 299.00,
          time: "1 Hours"
      },
      {
          name: "Standard Wash-Sedan",
          image: carWashImg,
          desc: "Professional standard wash-sedan services. Book experienced professionals for guaranteed satisfaction.",
          price: 499.00,
          time: "1 Hours"
      },
      {
          name: "Premium Spa-Sedan",
          image: carWashImg,
          desc: "Professional premium spa-sedan services. Book experienced professionals for guaranteed satisfaction.",
          price: 949.00,
          time: "1 Hours"
      },
      {
          name: "Basic Wash-Compact SUV",
          image: carWashImg,
          desc: "Professional basic wash-compact suv services. Book experienced professionals for guaranteed satisfaction.",
          price: 319.00,
          time: "1 Hours"
      },
      {
          name: "Standard Wash-Compact SUV",
          image: carWashImg,
          desc: "Professional standard wash-compact suv services. Book experienced professionals for guaranteed satisfaction.",
          price: 589.00,
          time: "1 Hours"
      },
      {
          name: "Premium Cleaning-Compact SUV",
          image: carWashImg,
          desc: "Professional premium cleaning-compact suv services. Book experienced professionals for guaranteed satisfaction.",
          price: 1119.00,
          time: "1 Hours"
      },
      ],
      "Pest Control": [
        {
          name: "General Pest Control",
          image: pestControlImg,
          desc: "Complete eradication of cockroaches, ants, and other common household pests.",
          price: 999.00,
          time: "1-2 hours"
        },
        {
          name: "Termite Treatment",
          image: pestControlImg,
          desc: "Professional termite control and wood preservation treatment with warranty.",
          price: 2499.00,
          time: "2-3 hours"
        }
      ]
    };

  const categoryKey = categoryName === "Pandit Ji" ? "PanditJI" :
                      categoryName === "Car Washing" ? "CarWashing" :
                      categoryName === "Tax Consultancy" ? "TaxConsultancy" :
                      categoryName;

  const services = servicesData[categoryKey] || [];

  const handleBookNow = (service) => {
    if (!user) {
      alert("Please login first to book service");
      navigate("/login");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(service);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <MainLayout>
      <section className="service-explorer section">
        <div className="container">
          {/* Header */}
          <div className="service-header animate-fade-in">
            <span className="section-tag">{categoryName}</span>
            <h1 className="section-title">Professional {categoryName} Solutions</h1>
            <p className="text-secondary">Book verified experts for {categoryName} tasks in minutes.</p>
          </div>

          {/* Grid */}
          <div className="services-list-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="premium-card service-list-card reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="service-img-box">
                  <img src={service.image} alt={service.name} />
                  <div className="service-price-floating">₹{service.price}</div>
                </div>
                <div className="service-list-content">
                  <div className="service-info-top">
                    <h3>{service.name}</h3>
                    <span className="duration-tag">⏱ {service.time}</span>
                  </div>
                  <p className="service-desc">{service.desc}</p>
                  
                  <div className="service-list-footer">
                    <div className="benefits">
                      <span>✓ 4.8 Rating</span>
                      <span>✓ Moneyback Guarantee</span>
                    </div>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.homefacility"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-premium btn-full"
                      style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                    >
                      Book This Service
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {services.length === 0 && (
              <div className="no-services">
                <div className="glass empty-state">
                  <p>We are currently updating our {categoryName} services. Please check back soon!</p>
                  <button className="btn-outline-premium" onClick={() => navigate("/categories")}>View Other Categories</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .text-secondary {
          color: var(--text-muted);
          font-size: 18px;
        }

        .services-list-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 32px;
        }
        .service-list-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .service-img-box {
          height: 240px;
          position: relative;
          overflow: hidden;
        }
        .service-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .service-list-card:hover .service-img-box img { transform: scale(1.1); }
        
        .service-price-floating {
          position: absolute;
          bottom: 16px;
          right: 16px;
          background: white;
          padding: 8px 16px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 20px;
          color: var(--primary);
          box-shadow: var(--shadow-lg);
        }

        .service-list-content {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .service-info-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        .service-info-top h3 {
          font-size: 20px;
          margin: 0;
          color: var(--text-main);
        }
        .duration-tag {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted);
          background: #f1f5f9;
          padding: 4px 8px;
          border-radius: 6px;
          white-space: nowrap;
        }
        .service-desc {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 24px;
          flex: 1;
        }

        .service-list-footer {
          margin-top: auto;
          border-top: 1px solid #f1f5f9;
          padding-top: 20px;
        }
        .benefits {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
          font-size: 12px;
          font-weight: 700;
          color: #10b981;
        }
        .btn-full {
          width: 100%;
        }

        .no-services {
          grid-column: 1 / -1;
          display: flex;
          justify-content: center;
          padding: 60px 0;
        }
        .empty-state {
          text-align: center;
          padding: 40px;
          border-radius: 20px;
          max-width: 400px;
        }
        .empty-state p {
          margin-bottom: 24px;
          color: var(--text-muted);
        }

        @media (max-width: 640px) {
          .services-list-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </MainLayout>
  );
}

export default CategoryServices;