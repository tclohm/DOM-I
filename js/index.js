const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// navigation
let nav = document.querySelectorAll("nav a");
const navValues = Object.values(siteContent["nav"]); 
Array.from(nav).forEach((element, index) => {
  element.textContent = navValues[index];
});

// call to action
let ctah1 = document.querySelector(".cta-text h1");
ctah1.textContent = siteContent["cta"].h1;

let ctabutton = document.querySelector(".cta-text button");
ctabutton.textContent = siteContent["cta"].button;

let ctaimage = document.querySelector("#cta-img");
ctaimage.setAttribute('src', siteContent["cta"]["img-src"]);

// top content
let topContentFeatureH4 = document.querySelector(".top-content .text-content h4");
topContentFeatureH4.textContent = siteContent["main-content"]["features-h4"];

let topContentFeatureParagraph = document.querySelector(".top-content .text-content p");
topContentFeatureParagraph.textContent = siteContent["main-content"]["features-content"];


let topContentAboutH4 = document.querySelector(".top-content .text-content:last-child h4");
topContentAboutH4.textContent = siteContent["main-content"]["about-h4"];

let topContentAboutParagraph = document.querySelector(".top-content .text-content:last-child p");
topContentAboutParagraph.textContent = siteContent["main-content"]["about-content"];

// image
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
middleImage.alt = "code"

// bottom content
let bottomContentServicesH4 = document.querySelector(".bottom-content .text-content h4");
bottomContentServicesH4.textContent = siteContent["main-content"]["services-h4"];

let bottomContentServicesParagraph = document.querySelector(".bottom-content .text-content p");
bottomContentServicesParagraph.textContent = siteContent["main-content"]["services-content"];

let bottomContentProductH4 = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
bottomContentProductH4.textContent = siteContent["main-content"]["product-h4"];

let bottomContentProductParagraph = document.querySelector(".bottom-content .text-content:nth-child(2) p");
bottomContentProductParagraph.textContent = siteContent["main-content"]["product-content"];

let bottomContentVisionH4 = document.querySelector(".bottom-content .text-content:nth-child(3) h4");
bottomContentVisionH4.textContent = siteContent["main-content"]["vision-h4"];

let bottomContentVisionParagraph = document.querySelector(".bottom-content .text-content:nth-child(3) p");
bottomContentVisionParagraph.textContent = siteContent["main-content"]["vision-content"];


let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactParagraphs = document.querySelectorAll(".contact p");
const contactValues = Object.values(siteContent["contact"]);
const contactValuesWOFirst = contactValues.splice(1, contactValues.length)

Array.from(contactParagraphs).forEach((element, index) => {
  element.textContent = contactValuesWOFirst[index];
});

let footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;


Array.from(nav).forEach((element) => {
  element.style.color = "green";
});

const sourcecode = document.createElement("a");
sourcecode.style.color = "purple";
sourcecode.textContent = "Github";

let navi = document.querySelector("nav");
navi.append(sourcecode);

const magic = document.createElement("a");
magic.textContent = "Magic";
magic.style.color = "orange";
navi.prepend(magic);