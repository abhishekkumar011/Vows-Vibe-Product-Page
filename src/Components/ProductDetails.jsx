import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUser,
  Star,
} from "lucide-react";
import { useState } from "react";

const breadcrumbItems = [
  "Home",
  "Jewellery",
  "Gifts",
  "Necklace",
  "Chains",
  "Shining Diva...",
];

const productOptions = [
  {
    svg: (
      <>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.9132 37.3153C47.9549 38.8778 47.5382 40.357 46.7882 41.6278C46.3715 42.3778 45.809 43.0653 45.184 43.6278C43.7465 44.9612 41.8507 45.7737 39.7465 45.8362C36.7048 45.8987 34.0174 44.3362 32.5382 41.9404C31.7465 40.7112 31.2674 39.232 31.2465 37.6695C31.184 35.0445 32.3507 32.6695 34.2257 31.107C35.6423 29.9403 37.434 29.2112 39.3924 29.1695C43.9965 29.0653 47.809 32.7111 47.9132 37.3153Z"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.60938 15.5035L25.0052 26.1493L43.276 15.566"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.0098 45.0209V26.1251"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M45.0221 19.1086V30.9003C45.0221 31.0045 45.0221 31.0877 45.0013 31.1919C43.543 29.9211 41.6679 29.1711 39.5846 29.1711C37.6263 29.1711 35.8138 29.8586 34.3763 31.0045C32.4596 32.5253 31.2513 34.8794 31.2513 37.5044C31.2513 39.0669 31.6887 40.5461 32.4596 41.7961C32.6471 42.1294 32.8763 42.442 33.1263 42.7336L29.3138 44.8378C26.9388 46.1712 23.0638 46.1712 20.6888 44.8378L9.56376 38.6711C7.04293 37.2753 4.98047 33.7753 4.98047 30.9003V19.1086C4.98047 16.2336 7.04293 12.7336 9.56376 11.3378L20.6888 5.17108C23.0638 3.83775 26.9388 3.83775 29.3138 5.17108L40.4388 11.3378C42.9596 12.7336 45.0221 16.2336 45.0221 19.1086Z"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    ),
    name: "Easy 30 Day Return",
  },

  {
    svg: (
      <>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.17188 18.7533V13.5449C4.17188 8.35742 8.35938 4.16992 13.5469 4.16992H18.7552"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.25 4.16992H36.4583C41.6458 4.16992 45.8333 8.35742 45.8333 13.5449V18.7533"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M45.8281 33.3301V36.4551C45.8281 41.6426 41.6406 45.8301 36.4531 45.8301H33.3281"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.7552 45.8333H13.5469C8.35938 45.8333 4.17188 41.6458 4.17188 36.4583V31.25"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.3 21.004C18.06 21.004 18.7 21.168 19.22 21.496C19.748 21.824 20.148 22.3 20.42 22.924C20.692 23.54 20.828 24.296 20.828 25.192C20.828 26.144 20.66 26.948 20.324 27.604C19.988 28.26 19.524 28.756 18.932 29.092C18.34 29.428 17.648 29.596 16.856 29.596C16.464 29.596 16.084 29.556 15.716 29.476C15.356 29.396 15.04 29.272 14.768 29.104L15.224 28.168C15.448 28.312 15.696 28.416 15.968 28.48C16.248 28.536 16.54 28.564 16.844 28.564C17.692 28.564 18.368 28.3 18.872 27.772C19.376 27.236 19.628 26.444 19.628 25.396C19.628 25.228 19.62 25.028 19.604 24.796C19.588 24.564 19.552 24.336 19.496 24.112L19.892 24.52C19.78 24.888 19.592 25.2 19.328 25.456C19.072 25.704 18.76 25.892 18.392 26.02C18.032 26.14 17.636 26.2 17.204 26.2C16.652 26.2 16.16 26.096 15.728 25.888C15.296 25.68 14.956 25.388 14.708 25.012C14.46 24.628 14.336 24.176 14.336 23.656C14.336 23.112 14.464 22.644 14.72 22.252C14.984 21.852 15.34 21.544 15.788 21.328C16.244 21.112 16.748 21.004 17.3 21.004ZM17.348 21.976C16.988 21.976 16.668 22.044 16.388 22.18C16.108 22.316 15.888 22.504 15.728 22.744C15.576 22.984 15.5 23.272 15.5 23.608C15.5 24.104 15.672 24.5 16.016 24.796C16.36 25.084 16.824 25.228 17.408 25.228C17.792 25.228 18.128 25.156 18.416 25.012C18.712 24.868 18.94 24.672 19.1 24.424C19.268 24.176 19.352 23.9 19.352 23.596C19.352 23.3 19.276 23.032 19.124 22.792C18.972 22.552 18.748 22.356 18.452 22.204C18.156 22.052 17.788 21.976 17.348 21.976ZM21.8503 29.5V28.684L25.2703 25.384C25.5743 25.096 25.7983 24.844 25.9423 24.628C26.0943 24.404 26.1943 24.2 26.2423 24.016C26.2983 23.824 26.3263 23.64 26.3263 23.464C26.3263 23.032 26.1743 22.692 25.8703 22.444C25.5663 22.196 25.1223 22.072 24.5383 22.072C24.0903 22.072 23.6863 22.148 23.3263 22.3C22.9663 22.444 22.6543 22.672 22.3903 22.984L21.5743 22.276C21.8943 21.868 22.3223 21.556 22.8583 21.34C23.4023 21.116 23.9983 21.004 24.6463 21.004C25.2303 21.004 25.7383 21.1 26.1703 21.292C26.6023 21.476 26.9343 21.744 27.1663 22.096C27.4063 22.448 27.5263 22.864 27.5263 23.344C27.5263 23.616 27.4903 23.884 27.4183 24.148C27.3463 24.412 27.2103 24.692 27.0103 24.988C26.8103 25.284 26.5223 25.616 26.1463 25.984L23.0983 28.924L22.8103 28.456H27.8863V29.5H21.8503ZM31.5849 29.596C30.9929 29.596 30.4169 29.504 29.8569 29.32C29.3049 29.136 28.8529 28.888 28.5009 28.576L29.0529 27.628C29.3329 27.892 29.6969 28.108 30.1449 28.276C30.5929 28.444 31.0689 28.528 31.5729 28.528C32.2129 28.528 32.7049 28.392 33.0489 28.12C33.3929 27.848 33.5649 27.484 33.5649 27.028C33.5649 26.716 33.4889 26.444 33.3369 26.212C33.1849 25.98 32.9209 25.804 32.5449 25.684C32.1769 25.556 31.6689 25.492 31.0209 25.492H29.1129L29.5569 21.1H34.2969V22.144H30.0009L30.6249 21.556L30.2769 25.024L29.6529 24.448H31.2729C32.1129 24.448 32.7889 24.556 33.3009 24.772C33.8129 24.988 34.1849 25.288 34.4169 25.672C34.6489 26.048 34.7649 26.484 34.7649 26.98C34.7649 27.46 34.6489 27.9 34.4169 28.3C34.1849 28.692 33.8329 29.008 33.3609 29.248C32.8969 29.48 32.3049 29.596 31.5849 29.596Z"
            fill="#2D2D2D"
          />
        </svg>
      </>
    ),
    name: "925 Silver Plating",
  },

  {
    svg: (
      <>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.8555 4.64844L11.4596 8.5651C9.0638 9.46094 7.10547 12.2943 7.10547 14.8359V30.3151C7.10547 32.7734 8.73047 36.0026 10.7096 37.4818L19.668 44.1693C22.6055 46.3776 27.4388 46.3776 30.3763 44.1693L39.3346 37.4818C41.3138 36.0026 42.9388 32.7734 42.9388 30.3151V14.8359C42.9388 12.2734 40.9805 9.4401 38.5846 8.54427L28.1888 4.64844C26.418 4.0026 23.5846 4.0026 21.8555 4.64844Z"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 25C35 30.52 30.52 35 25 35C19.48 35 15 30.52 15 25C15 19.48 19.48 15 25 15C30.52 15 35 19.48 35 25Z"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.104 29.596C24.36 29.596 23.724 29.432 23.196 29.104C22.668 28.776 22.264 28.304 21.984 27.688C21.712 27.064 21.576 26.304 21.576 25.408C21.576 24.456 21.744 23.652 22.08 22.996C22.416 22.34 22.884 21.844 23.484 21.508C24.084 21.172 24.772 21.004 25.548 21.004C25.948 21.004 26.328 21.044 26.688 21.124C27.056 21.204 27.372 21.328 27.636 21.496L27.18 22.432C26.964 22.28 26.716 22.176 26.436 22.12C26.164 22.064 25.876 22.036 25.572 22.036C24.716 22.036 24.036 22.304 23.532 22.84C23.028 23.368 22.776 24.156 22.776 25.204C22.776 25.372 22.784 25.572 22.8 25.804C22.816 26.036 22.856 26.264 22.92 26.488L22.512 26.08C22.632 25.712 22.82 25.404 23.076 25.156C23.34 24.9 23.652 24.712 24.012 24.592C24.38 24.464 24.776 24.4 25.2 24.4C25.76 24.4 26.256 24.504 26.688 24.712C27.12 24.92 27.46 25.216 27.708 25.6C27.956 25.976 28.08 26.424 28.08 26.944C28.08 27.48 27.948 27.948 27.684 28.348C27.42 28.748 27.064 29.056 26.616 29.272C26.168 29.488 25.664 29.596 25.104 29.596ZM25.056 28.624C25.424 28.624 25.744 28.556 26.016 28.42C26.296 28.284 26.516 28.096 26.676 27.856C26.836 27.608 26.916 27.32 26.916 26.992C26.916 26.496 26.744 26.104 26.4 25.816C26.056 25.52 25.588 25.372 24.996 25.372C24.612 25.372 24.276 25.444 23.988 25.588C23.7 25.732 23.472 25.928 23.304 26.176C23.144 26.416 23.064 26.692 23.064 27.004C23.064 27.292 23.14 27.56 23.292 27.808C23.444 28.048 23.668 28.244 23.964 28.396C24.26 28.548 24.624 28.624 25.056 28.624Z"
            fill="#2D2D2D"
          />
        </svg>
      </>
    ),
    name: "6- Month Warranty",
  },

  {
    svg: (
      <>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.5866 18.7526C39.5866 21.7735 38.6908 24.5443 37.1491 26.8568C34.8991 30.1902 31.3366 32.5443 27.1908 33.1485C26.4824 33.2735 25.7533 33.336 25.0033 33.336C24.2533 33.336 23.5241 33.2735 22.8158 33.1485C18.6699 32.5443 15.1074 30.1902 12.8574 26.8568C11.3158 24.5443 10.4199 21.7735 10.4199 18.7526C10.4199 10.6901 16.9408 4.16931 25.0033 4.16931C33.0658 4.16931 39.5866 10.6901 39.5866 18.7526Z"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44.2681 38.4796L40.8306 39.2921C40.0598 39.4796 39.4556 40.063 39.289 40.8338L38.5598 43.8963C38.164 45.563 36.039 46.063 34.9348 44.7505L24.9973 33.3338L15.0598 44.7713C13.9556 46.0838 11.8306 45.5837 11.4348 43.9171L10.7056 40.8546C10.5181 40.0837 9.91398 39.4796 9.16398 39.3129L5.72648 38.5005C4.14315 38.1255 3.58065 36.1462 4.72648 35.0004L12.8515 26.8754C15.1015 30.2088 18.664 32.563 22.8098 33.1671C23.5181 33.2921 24.2473 33.3546 24.9973 33.3546C25.7473 33.3546 26.4765 33.2921 27.1848 33.1671C31.3306 32.563 34.8931 30.2088 37.1431 26.8754L45.2681 35.0004C46.414 36.1254 45.8515 38.1046 44.2681 38.4796Z"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.2052 12.4557L27.4344 14.914C27.601 15.2473 28.0385 15.5807 28.4344 15.6432L30.6635 16.0182C32.0802 16.2473 32.4135 17.289 31.3927 18.3098L29.6635 20.039C29.3719 20.3307 29.2052 20.8932 29.3094 21.3099L29.8094 23.4557C30.2052 25.1432 29.3094 25.8098 27.8094 24.914L25.726 23.6848C25.351 23.4557 24.726 23.4557 24.351 23.6848L22.2677 24.914C20.7677 25.789 19.8719 25.1432 20.2677 23.4557L20.7677 21.3099C20.851 20.914 20.7052 20.3307 20.4135 20.039L18.6844 18.3098C17.6635 17.289 17.9969 16.2682 19.4135 16.0182L21.6427 15.6432C22.0177 15.5807 22.4552 15.2473 22.6219 14.914L23.851 12.4557C24.4552 11.1224 25.5385 11.1224 26.2052 12.4557Z"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    ),
    name: "Premium Gold",
  },
];

const productDescription = [
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
            d="M15.8333 14.5834L4.16664 2.91669"
            stroke="#388E3C"
            strokeWidth="1.7676"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 6.02502V14.5834H7.27498"
            stroke="#388E3C"
            strokeWidth="1.7676"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0833 18.3334H2.91664"
            stroke="#388E3C"
            strokeWidth="1.7676"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    ),
    name: "Material:",
    desc: "925 Sterling Silver",
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
            d="M15.8333 14.5834L4.16664 2.91669"
            stroke="#388E3C"
            strokeWidth="1.7676"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 6.02502V14.5834H7.27498"
            stroke="#388E3C"
            strokeWidth="1.7676"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0833 18.3334H2.91664"
            stroke="#388E3C"
            strokeWidth="1.7676"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    ),
    name: "Plating:",
    desc: "18K Gold",
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
            d="M15.8333 14.5834L4.16664 2.91669"
            stroke="#388E3C"
            strokeWidth="1.7676"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 6.02502V14.5834H7.27498"
            stroke="#388E3C"
            strokeWidth="1.7676"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0833 18.3334H2.91664"
            stroke="#388E3C"
            strokeWidth="1.7676"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    ),
    name: "Weight:",
    desc: "10grams",
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
            d="M15.8333 14.5834L4.16664 2.91669"
            stroke="#388E3C"
            strokeWidth="1.7676"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 6.02502V14.5834H7.27498"
            stroke="#388E3C"
            strokeWidth="1.7676"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0833 18.3334H2.91664"
            stroke="#388E3C"
            strokeWidth="1.7676"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    ),
    name: "Stone Type:",
    desc: "Premium Jerkin",
  },
];

function ProductDetails() {
  const [mobileView, setMobileView] = useState(false);
  return (
    <div className="px-5 lg:px-20 flex flex-col md:flex-row">
      {/* Left  */}
      <div className="md:w-1/2">
        <div className="hidden md:flex gap-3">
          {breadcrumbItems.map((item, index) => (
            <div key={index} className="flex items-center gap-1 text-gray-400">
              {item}
              <ChevronDown />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ChevronLeft />
          <h3 className="text-lg font-semibold">Product Details</h3>
        </div>

        <div className="w-full md:w-[90%]">
          {/* Image div */}
          <div className="rounded-2xl overflow-hidden mt-8">
            <img
              src="https://images.unsplash.com/photo-1707222609355-74a0e5d9272d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Unsplash example"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <ChevronLeft
              size={50}
              className="cursor-pointer hover:text-primary"
            />
            <ChevronRight
              size={50}
              className="cursor-pointer hover:text-primary"
            />
          </div>
        </div>
      </div>

      {/* Right  */}
      <div className="md:w-1/2 mt-15">
        <div className="space-y-2">
          <h3 className="text-3xl font-medium">Gold-Plated Pearls Necklace </h3>
          <h3 className="text-3xl text-gray-400 font-semibold">
            Made with 925 Silver
          </h3>

          <div className="flex gap-2">
            <div className="flex items-center rounded bg-green-700 w-fit gap-2 text-white px-2">
              <h6 className="text-sm">4.1 </h6>
              <Star size={12} fill="white" />
            </div>
            <h5 className="font-medium">(23)</h5>
          </div>

          <div className="flex gap-4 mt-2 items-center">
            <h4 className="text-3xl font-semibold">₹ 1,600</h4>
            <h6 className="text-gray-400 text-sm line-through font-medium">
              ₹ 2,000
            </h6>
            <h4 className="text-green-700 font-medium">(20% off)</h4>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-6">
          {productOptions.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              {item.svg}
              <h4 className="font-medium">{item.name}</h4>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-6">
          <button className="border-2 border-primary text-primary w-full  py-2 font-semibold cursor-pointer">
            ADD TO CART
          </button>
          <button className="bg-primary text-white py-2 w-full font-semibold border-2 border-primary cursor-pointer">
            BUY NOW
          </button>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Estimated Delivery Time</h3>
          <div className="border-2 p-4 border-gray-500 flex items-center justify-between">
            <h4 className="text-gray-500 text-lg">Enter Pincode</h4>
            <h4 className="text-primary font-medium">Check</h4>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center pr-5 mb-1">
            <div className="flex gap-4 items-center">
              <h3 className="font-semibold text-lg">Offers</h3>
              <h6 className="text-gray-500">2 available</h6>
            </div>
            <h4 className="text-primary font-medium">Check</h4>
          </div>
          <h3 className="font-medium">Coupon can be applied at checkout</h3>
        </div>

        <div className="border border-primary my-6"></div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Product Decsription</h3>

          <div className="space-y-1">
            {productDescription.map((item, index) => (
              <div className="flex" key={index}>
                {item.svg}
                <div className="flex">
                  <h4 className="font-semibold pr-2 text-lg">{item.name}</h4>
                  <h4 className="text-gray-500 font-medium">{item.desc}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <h3 className="text-lg font-semibold">Shipping</h3>
          <h5 className="text-gray-600 font-medium">
            Get it by <span className="text-primary">25 Sept</span>
          </h5>
        </div>

        <div>
          <div className="border border-primary my-6"></div>
          <h3 className="text-lg font-semibold">Customer Ratings</h3>
          <div className="border border-primary my-6"></div>

          <div>
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <CircleUser size={30} strokeWidth={1} />
                <h4 className="font-medium text-lg">Anu</h4>
              </div>
              <h5 className="text-gray-500">15/08/24</h5>
            </div>

            <h4 className="text-lg mt-10 text-gray-500">
              Such a gorgeous necklace. Got many compliments as well.
              <br />
              Absolutely loved it
            </h4>

            <div className="flex gap-4 mt-4">
              <div className="w-36 h-36 rounded overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1601121141418-c1caa10a2a0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-full w-full object-cover"
                  alt="necklace"
                />
              </div>
              <div className="w-36 h-36 rounded overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1723563578891-e0972abf64e0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-full w-full object-cover"
                  alt="necklace"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
