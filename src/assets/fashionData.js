import imageId1 from './images/fashion/men/black-tshirt.jpg'
import imageId2 from './images/fashion/men/blueshirt.jpg'
import imageId3 from './images/fashion/men/CasualShirt1.jpg'
import imageId4 from './images/fashion/men/Hoodie2.jpeg'
import imageId5 from './images/fashion/men/men-v-neck.jpg'
import imageId6 from './images/fashion/men/Tshirt1.jpg'
import imageId7 from './images/fashion/men/CasualShirt2.jpg'
import imageId8 from './images/fashion/men/shirt-double-colour.jpg'
import imageId9 from './images/fashion/men/chineese-collar-grey.jpg'
import imageId10 from './images/fashion/men/low-neck-tshirt.jpg'
import imageId11 from './images/fashion/men/Tshirt3.jpg'
import imageId13 from './images/fashion/men/pink-v-neck.jpg'
import imageId14 from './images/fashion/men/Hoodie1.jpg'
import men_baggy_jean from './images/fashion/men/men-baggy-grey-jean.jpg'
import men_vest_maroon from './images/fashion/men/men-maroon-vest.jpg'
import men_shirt_half_sleeve from './images/fashion/men/shirt-half-sleeve.jpg'
import men_denim_jacket from './images/fashion/men/men-denim-jacket.jpeg'
import men_vest_navy from './images/fashion/men/gym-vest-navy-blue.jpg'
import men_jean_black from './images/fashion/men/men-black-jean-slim2.jpg'
import men_tshirt_yellow from './images/fashion/men/Tshirt2.jpg'
import men_gym_vest1 from './images/fashion/men/gym-vest3.jpg'
import men_jean_blue from './images/fashion/men/men-blue-jean-slim.jpg'
import men_tshirts_plain from './images/fashion/men/plain-tshirt.jpg'
import men_full_sleeve from './images/fashion/men/FullSleeve1.jpg'
import men_jean_black2 from './images/fashion/men/men-black-jean-slim.jpg'
import men_vest_black from './images/fashion/men/men-black-vest.jpg'
import men_grey_tshirt from './images/fashion/men/grey-tshirt.jpg'
import men_jean_grey from './images/fashion/men/men-grey-jean-slim.jpg'
import men_vest_white from './images/fashion/men/vest-white.jpg'
import men_tshirt_beige from './images/fashion/men/tshirt-beige.jpg'
import men_jean_blue2 from './images/fashion/men/men-jeans-blue.png'
import tshirt_white from './images/fashion/men/tshirt-half.jpg'
import men_gym_vest2 from './images/fashion/men/gym-vest2.jpg'
import full_frock from "./images/fashion/women/women-dress1.jpg"
import women_printed_tshirt from "./images/fashion/women/ladies-half-sleeve-printed-t-shirt.jpg"
import women_florely_dress from "./images/fashion/women/florely-dress.jpg"
import women_modern_dress from "./images/fashion/women/women-dress5.jpg"
import women_jeans1 from "./images/fashion/women/women-jeans6.jpeg"
import women_stripe_shirt from "./images/fashion/women/stripe.jpg"
import green_maxi from "./images/fashion/women/green-MODEL.jpg"
import fancy_frock from "./images/fashion/women/women-dress3.jpg"
import women_tshirt_blue from "./images/fashion/women/navy-blue-tshirt.jpeg"
import model_frock from "./images/fashion/women/women-dress6.jpg"
import women_jeans2 from "./images/fashion/women/women-jeans4.jpg"
import women_tshirt_pink from "./images/fashion/women/printed-pink-tshirt.jpeg"
import women_anarkali from "./images/fashion/women/anarkali.jpeg"
import women_tshirts from "./images/fashion/women/women-tshirt.jpeg"
import women_coat_maxi from "./images/fashion/women/ladies-dresses.jpg"
import grand_frock from "./images/fashion/women/women-dress4.jpg"
import boy_combo1 from "./images/fashion/kids/boy-kid-outfit.jpg"
import girl_kid_frock from "./images/fashion/kids/girl-full-frock.jpeg"
import boy_full_set from "./images/fashion/kids/boy-kid-full-set.jpg"
import boy_combo2 from "./images/fashion/kids/boy-dress1.jpg"
import girl_frock_orange from "./images/fashion/kids/girl-frock-orange.jpg"
import boy_kid_tshirt from "./images/fashion/kids/boy-kid-tshirt1.jpeg"
import girl_half_frock from "./images/fashion/kids/girl-half-frock-peach.jpg"
import boy_full_set_blue from "./images/fashion/kids/boy-kid-white-blue.jpg"
import boy_kid_jeans1 from "./images/fashion/kids/boy-kid-jeans1.jpeg"
import girl_kid_mixed_frock from "./images/fashion/kids/girl-baby1.jpeg"
import girl_kid_fancy_frock1 from "./images/fashion/kids/fancy-frock1.jpg"
import boy_kid_full_suit from "./images/fashion/kids/suit-children.png"
import girl_white_red from "./images/fashion/kids/girl-white-red.jpg"
import boy_kid_shirt1 from "./images/fashion/kids/boy-kid-shirt1.jpeg"




const fashionData = [
        {
            id : 1,
            name : "T-shirt",
            image : imageId1,
            desc : "Half-Hand Black T-Shirt",
            price : 699,
            offer : "(20% off)",
            category : "men"
        },
        {
            id : 2,
            name : "SleeveLess Frock",
            image : full_frock,
            desc : "Feel Model And Confident",
            price : 4999,
            offer : null,
            category : "women"
        },
        {
            id : 3,
            name : "Tshirt and Jean",
            image : boy_combo1,
            desc : "Black T-shirt With Blue Jean",
            price : 999,
            offer : null,
            category : "kids"
        },
        {
            id : 4,
            name : "Baggy Jeans",
            image : men_baggy_jean,
            desc : "Ash Baggy Jeans For Men",
            price : 1466,
            offer : null,
            category : "men"
        },
        {
            id : 5,
            name : "Formal Shirt",
            image : imageId2,
            desc : "For formal and look Handsome",
            price : 899,
            offer : "(12% off)",
            category : "men"
        },
        {
            id : 6,
            name : "Full Frock(Kids)",
            image : girl_kid_frock,
            desc : "Peach Full Frock For Girl Kids",
            price : 2199,
            offer : null,
            category : "kids"
        },
        {
            id : 7,
            name : "Casual Shirt",
            image : imageId3,
            desc : "Stripes | Trendy",
            price : 1099,
            offer : "(10% off)",
            category : "men"
        },
        {
            id : 8,
            name : "Women T-shirt",
            image : women_printed_tshirt,
            desc : "Printed White T-Shirt For Women",
            price : 499,
            offer : null,
            category : "women"
        },
        {
            id : 9,
            name : "Men Vest",
            image : men_vest_white,
            desc : "White Vest For Feel Soft",
            price : 370,
            offer : null,
            category : "men"
        },
        {
            id : 10,
            name : "Top And Skirt",
            image : girl_white_red,
            desc : "White Top With Red Skirt",
            price : 1751,
            offer : null,
            category : "kids"
        },
        {
            id : 11,
            name : "Hoodie",
            image : imageId4,
            desc : "More Styled and Fit",
            price : 1299,
            offer : "(16% off)",
            category : "men"
        },
        {
            id : 12,
            name : "Florely Dress",
            image : women_florely_dress,
            desc : "Florely Dress For Women",
            price : 1200,
            offer : null,
            category : "women"
        },
        {
            id : 13,
            name : "V-neck T-shirt",
            image : imageId5,
            desc : "Expose your Fitness",
            price : 460,
            offer : null,
            category : "men"
        },
        {
            id : 14,
            name : "Boy Kid Combo",
            image : boy_full_set,
            desc : "Shirt, Trouser, Tshirt, Shoe And Glass",
            price : 1999,
            offer : null,
            category : "kids"
        },
        {
            id : 15,
            name : "Men Vest",
            image : men_vest_black,
            desc : "Black Vest For Men",
            price : 400,
            offer : null,
            category : "men"
        },
        {
            id : 16,
            name : "Modern Short Frock",
            image : women_modern_dress,
            desc : "White-Short Trendy Frock",
            price : 2432,
            offer : "(12% off)",
            category : "women"
        },
        {
            id : 17,
            name : "Printed T-shirt",
            image : imageId6,
            desc : "Blue Printed T-Shirt For Men",
            price : 499,
            offer : null,
            category : "men"
        },
        {
            id : 18,
            name : "Women Grey Jeans",
            image : women_jeans1,
            desc : "Grey Jeans For Women",
            price : 899,
            offer : null,
            category : "women"
        },
        {
            id : 19,
            name : "Men T-Shirt",
            image : men_tshirt_beige,
            desc : "Beige T-Shirt For Men",
            price : 499,
            offer : null,
            category : "men"
        },
        {
            id : 20,
            name : "Casual Shirt",
            image : imageId7,
            desc : "Fashionable and Impressive",
            price : 1459,
            offer : "(14% off)",
            category : "men"
        },
        {
            id : 21,
            name : "Boy Full Combo",
            image : boy_combo2,
            desc : "Shirt, Jean, Denim-Court, Shoe",
            price : 2499,
            offer : null,
            category : "kids"
        },
        {
            id : 22,
            name : "Casual Shirt",
            image : imageId8,
            desc : "Blue And White Casual Shirt",
            price : 799,
            offer : "(11% off)",
            category : "men"
        },
        {
            id : 23,
            name : "T-shirt",
            image : imageId9,
            desc : "Grey Half-Hand T-Shirt",
            price : 599,
            offer : "(50% off)",
            category : "men"
        },
        {
            id : 24,
            name : "Women Stripe Shirt",
            image : women_stripe_shirt,
            desc : "Black Shirt With White Stripes",
            price : 849,
            offer : null,
            category : "women"
        },
        {
            id : 25,
            name : "Gym Vest",
            image : men_gym_vest2,
            desc : "Gym Vest For Men",
            price : 769,
            offer : null,
            category : "men"
        },
        {
            id : 26,
            name : "Green Maxi",
            image : green_maxi,
            desc : "Green Maxi For Women",
            price : 849,
            offer : null,
            category : "women"
        },
        {
            id : 27,
            name : "Orange Frock(Kids)",
            image : girl_frock_orange,
            desc : "Orange Frock For Girl Kids",
            price : 799,
            offer : null,
            category : "kids"
        },
        {
            id : 28,
            name : "T-shirt",
            image : imageId10,
            desc : "Grey Low Neck T-Shirt",
            price : 799,
            offer : null,
            category : "men"
        },
        {
            id : 29,
            name : "Fancy Frock",
            image : fancy_frock,
            desc : "Glitter Fancy Frock",
            price : 21999,
            offer : null,
            category : "women"
        },
        {
            id : 30,
            name : "Sweat T-Shirt",
            image : men_full_sleeve,
            desc : "Sweat T-Shirt Full Sleeve For Men",
            price : 399,
            offer : null,
            category : "men"
        },
        {
            id : 31,
            name : "Women T-Shirt",
            image : women_tshirt_blue,
            desc : "Navy Blue T-Shirt For Women",
            price : 449,
            offer : null,
            category : "women"
        },
        {
            id : 32,
            name : "T-shirt",
            image : imageId11,
            desc : "Over sized T-shirt For Men",
            price : 889,
            offer : null,
            category : "men"
        },
        {
            id : 33,
            name : "Kid T-shirt",
            image : boy_kid_tshirt,
            desc : "T-Shirt For Boy Kid",
            price : 399,
            offer : null,
            category : "kids"
        },
        {
            id : 34,
            name : "Gym Vest",
            image : men_gym_vest1,
            desc : "Black Gym Vest For Men",
            price : 799,
            offer : null,
            category : "men"
        },
        {
            id : 35,
            name : "Women",
            image : women_tshirt_pink,
            desc : "Pink Printed T-Shirt For Women",
            price : 499,
            offer : null,
            category : "women"
        },
        {
            id : 36,
            name : "T-shirt",
            image : imageId13,
            desc : "V-Neck Pink Half-Hand T-Shirt",
            price : 499,
            offer : null,
            category : "men"
        },
        {
            id : 37,
            name : "Modeling Frock",
            image : model_frock,
            desc : "Modeling Frock For Women",
            price : 17499,
            offer : null,
            category : "women"
        },
        {
            id : 38,
            name : "Hoodie",
            image : imageId14,
            desc : "Hoodie for Men",
            price : 920,
            offer : null,
            category : "men"
        },
        {
            id : 39,
            name : "Half Frock",
            image : girl_half_frock,
            desc : "Peach Half Frock For Girl Kid",
            price : 2145,
            offer : null,
            category : "kids"
        },
        {
            id : 40,
            name : "Women Jeans",
            image : women_jeans2,
            desc : "Dusted Black Jeans For Women",
            price : 1149,
            offer : null,
            category : "women"
        },
        {
            id : 41,
            name : "Men Jeans",
            image : men_jean_grey,
            desc : "Ash Jeans For Men",
            price : 999,
            offer : null,
            category : "men"
        },
        {
            id : 42,
            name : "Boy Kid Combo",
            image : boy_full_set_blue,
            desc : "Shirt, Trouser, Tshirt, Shoe, Glass",
            price : 1999,
            offer : null,
            category : "kids"
        },
        {
            id : 43,
            name : "Kids Jeans",
            image : boy_kid_jeans1,
            desc : "Blue Jeans For Boy Kids",
            price : 565,
            offer : null,
            category : "kids"
        },
        {
            id : 44,
            name : "Men Vest",
            image : men_vest_maroon,
            desc : "Maroon Vest For Men",
            price : 400,
            offer : null,
            category : "men"
        },
        {
            id : 45,
            name : "Kids",
            image : girl_kid_mixed_frock,
            desc : "Blue and Peach Frock For Kids",
            price : 1499,
            offer : null,
            category : "kids"
        },
        {
            id : 46,
            name : "Shirt",
            image : men_shirt_half_sleeve,
            desc : "Half Hand Shirt For Men",
            price : 1488,
            offer : null,
            category : "men"
        },
        {
            id : 47,
            name : "Denim Shirt",
            image : men_denim_jacket,
            desc : "Blue Denim Shirt For Men",
            price : 1599,
            offer : null,
            category : "men"
        },
        {
            id : 48,
            name : "Anarkali",
            image : women_anarkali,
            desc : "Navy Blue Anarkali For Women",
            price : 1299,
            offer : null,
            category : "women"
        },
        {
            id : 49,
            name : "Umbrella Frock",
            image : girl_kid_fancy_frock1,
            desc : "Pink Umbrella Frock For Girl Kids",
            price : 2799,
            offer : "(15% off)",
            category : "kids"
        },
        {
            id : 50,
            name : "Men Vest",
            image : men_vest_navy,
            desc : "Navy Blue Vest For Men",
            price : 398,
            offer : null,
            category : "men"
        },
        {
            id : 51,
            name : "Printed T-Shirt",
            image : women_tshirts,
            desc : "Printed T-Shirt For Women",
            price : 499,
            offer : null,
            category : "women"
        },
        {
            id : 52,
            name : "Men Jeans",
            image : men_jean_black,
            desc : "Dark Blue Jeans For Men",
            price : 999,
            offer : "(10% off)",
            category : "men"
        },
        {
            id : 53,
            name : "Glitter Frock",
            image : grand_frock,
            desc : "Grand Glitter Frock For Women",
            price : 11499,
            offer : null,
            category : "women"
        },
        {
            id : 54,
            name : "Full Suit(Kids)",
            image : boy_kid_full_suit,
            desc : "Black Full Suit For Kids",
            price : 1999,
            offer : null,
            category : "kids"
        },
        {
            id : 55,
            name : "T-Shirt",
            image : men_tshirt_yellow,
            desc : "Half-Hand Yellow T-Shirt For Men",
            price : 449,
            offer : null,
            category : "men"
        },
        {
            id : 56,
            name : "Kid Shirt",
            image : boy_kid_shirt1,
            desc : "Multi-Color Shirt For Kids",
            price : 399,
            offer : null,
            category : "kids"
        },
        {
            id : 57,
            name : "Men Jeans",
            image : men_jean_blue,
            desc : "Slim-Fit Blue Jeans For Men",
            price : 999,
            offer : null,
            category : "men"
        },
        {
            id : 58,
            name : "T-Shirt",
            image : men_tshirts_plain,
            desc : "Half-Sleeve Plain T-Shirts",
            price : 499,
            offer : null,
            category : "men"
        },
        {
            id : 59,
            name : "Men Jeans",
            image : men_jean_black2,
            desc : "Slim-Fit Black Jeans For Men",
            price : 999,
            offer : null,
            category : "men"
        },
        {
            id : 60,
            name : "T-Shirt",
            image : men_grey_tshirt,
            desc : "Grey T-Shirt For Men",
            price : 449,
            offer : null,
            category : "men"
        },
        {
            id : 61,
            name : "Coat Maxi",
            image : women_coat_maxi,
            desc : "Red-Black Maxi Of Coat Model",
            price : 1499,
            offer : null,
            category : "women"
        },
        {
            id : 62,
            name : "Men Jeans",
            image : men_jean_blue2,
            desc : "Black And Grey Jeans For Men",
            price : 999,
            offer : null,
            category : "men"
        },
        {
            id : 63,
            name : "T-Shirt",
            image : tshirt_white,
            desc : "Half-Hand White T-Shirt",
            price : 499,
            offer : null,
            category : "men"
        }
        
 
]

export default fashionData


        // {
        //     id : 64,
        //     name : null,
        //     image : null,
        //     desc : null,
        //     price : 499,
        //     offer : null,
        //     category : "men"
        // }