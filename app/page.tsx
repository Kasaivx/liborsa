"use client"


import style from "./page.module.css";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Coffee,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Phone,
  ShoppingBag,
  Sparkles,
  Star,
  Utensils,
  Users,
  X,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";
export default function cafePage() {
    return (
        <div>
            <div className={style.top}>
                <span>El Biar · Alger</span>
                <span>Déguster, bouquiner et rêver.</span>
                <span>Open daily · hours to confirm</span>
                </div>

                <header className={style.heder}>
                  
                    
                    
                   <span>LOGO</span>
                   
                  <nav> 
                    <a href="">MENU</a>
                    <a href="">THE EXPERIENCE </a>
                    <a href="">BOOKS</a>
                    <a href="">EVENTS</a>
                    <a href="">VISIT US</a>
                  </nav>

                  <div className={style.rvs}> 

<div className={style.insta}>
<FaInstagram className={style.insticn}/> 

<a href="https://www.instagram.com/librosiacafe">@librosiacafe
</a>                    
</div>
                    <button>Reserve a place</button>
                    
                    </div>
                
                      

                </header>
            </div>
        
    );
}
