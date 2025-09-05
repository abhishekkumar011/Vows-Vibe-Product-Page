import {
  ChevronDown,
  Heart,
  Menu,
  Plus,
  ShoppingBag,
  UserCheck,
  UserCheck2,
  UserRoundCheck,
  Verified,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Collections", hasArrow: true },
  { label: "Categories ", hasArrow: true },
  { label: "Hot Picks", hasArrow: false },
  { label: "Gifts", hasArrow: false },
  { label: "Shop All", hasArrow: false },
];

const mobileNavItems = [
  {
    svg: (
      <>
        <Plus color="white" />
      </>
    ),
    name: "Add Account",
  },

  {
    svg: (
      <>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8333 14.5833L4.16664 2.91667"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 6.025V14.5833H7.27498"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0833 18.3333H2.91664"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    ),
    name: "Gold jewellery",
  },

  {
    svg: (
      <>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8333 14.5833L4.16664 2.91667"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 6.025V14.5833H7.27498"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0833 18.3333H2.91664"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    ),
    name: "Silver Jewellery",
  },

  {
    svg: (
      <>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8333 14.5833L4.16664 2.91667"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 6.025V14.5833H7.27498"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0833 18.3333H2.91664"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    ),
    name: "Trending Collection",
  },

  {
    svg: (
      <>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8333 14.5833L4.16664 2.91667"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 6.025V14.5833H7.27498"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0833 18.3333H2.91664"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    ),
    name: "Gifts",
  },

  {
    svg: (
      <>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8333 14.5833L4.16664 2.91667"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 6.025V14.5833H7.27498"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0833 18.3333H2.91664"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    ),
    name: "Shop by Occasion",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-secondary flex justify-center py-3">
        <h3 className="text-white text-sm hidden md:flex">
          50% off on all items Only Limited Time Deal Offer ending in 03:34:15
        </h3>
        <h3 className="text-white text-sm md:hidden">
          50% off on all items till 23 Jan
        </h3>
      </div>

      {isOpen && (
        <div className="absolute px-4 bg-primary w-80 h-screen md:hidden">
          <div className="mt-10 space-y-5">
            {mobileNavItems.map((item, index) => (
              <div className="flex gap-2 border-b border-white" key={index}>
                {item.svg}
                <h4 className="text-white">{item.name}</h4>
              </div>
            ))}
          </div>
          <div className="flex gap-2 items-center mt-4 px-4 py-2 rounded bg-white">
            <UserRoundCheck />
            <h3>Login / Sign Up</h3>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center px-5 lg:px-20 bg-[#FAF9F6] py-4">
        <div className="flex gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden z-10 ${isOpen ? "text-white" : ""}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl md:text-3xl font-semibold">LOGO</h1>
        </div>

        <div className="flex gap-2 justify-between md:hidden">
          <Heart strokeWidth={1} />
          <ShoppingBag strokeWidth={1} />
        </div>

        <div className="hidden md:flex">
          <ul className="flex items-center gap-5 justify-center">
            {navItems.map((item, index) => (
              <li
                key={index}
                href={item.href}
                className="flex items-center gap-1 text-gray-800 hover:text-secondary cursor-pointer"
              >
                {item.label}
                {item.hasArrow && <ChevronDown size={16} />}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-x-2 hidden md:flex">
          <button className="bg-primary text-white px-4 lg:px-8 py-2 font-semibold">
            LOGIN
          </button>
          <button className="border-2 border-primary text-primary px-4 lg:px-8 py-2 font-semibold">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
