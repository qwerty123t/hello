import { animate, scroll } from "motion";
import { scrollTimeline } from "./scrollTimeline.js";

animate(
	".preloader",
	{
		opacity: 0,
		display: "none",
	},
	{
		duration: 0.2,
		delay: 3,
	},
).finished.then(() => {
	enableScroll2();
});

animate(
	".header",
	{
		opacity: ["0", "1"],
	},
	{
		duration: 1,
		delay: 3.6,
	},
);
animate(
	".s1__wrapper",
	{
		transform: ["scale(0.4)", "scale(1)"],
	},
	{
		duration: 1,
		delay: 3,
	},
);


const s2Logo = new ScrollTimeline({
	source: document.documentElement,
	scrollSource: document.documentElement, // For legacy implementations
	orientation: "block",
	scrollOffsets: [
		{ target: document.querySelector(".s2"), edge: "start", threshold: 1 },
		{
			target: document.querySelector(".s2__header"),
			edge: "start",
			threshold: 1,
		},
	],
});
const s2BgColor = new ScrollTimeline({
	source: document.documentElement,
	scrollSource: document.documentElement, // For legacy implementations
	orientation: "block",
	scrollOffsets: [
		{
			target: document.querySelector(".s2__posters"),
			edge: "end",
			threshold: 0.05,
		},
		{
			target: document.querySelector(".s2__posters"),
			edge: "end",
			threshold: 0.1,
		},
	],
});
const s2BgColorMobile = new ScrollTimeline({
	source: document.documentElement,
	scrollSource: document.documentElement, // For legacy implementations
	orientation: "block",
	scrollOffsets: [
		{
			target: document.querySelector(".s2__posters"),
			edge: "end",
			threshold: 0.05,
		},
		{
			target: document.querySelector(".s2__posters"),
			edge: "end",
			threshold: 0.1,
		},
	],
});

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// 700+ PX
if (window.matchMedia("(min-width: 700px)").matches) {
	if (isSafari === true) {
		// document.querySelector(".overlay2").animate(
		// 	{
		// 		transform: ["scale(0.2)", "scale(16)"],
		// 	},
		// 	{
		// 		duration: 1,
		// 		fill: "forwards",
		// 		timeline: s2Logo,
		// 		easing: "cubic-bezier(.86,.09,.83,.67)",
		// 	},
		// );

		scroll(
			animate(
				document.querySelector(".overlay2"), 
				{ 
					transform: ["scale(0.2)", "scale(16)"], 
				}), 
				{
					target: document.querySelector(".s2"),
					offset: ["start start", "0.3 start"]
				}
		);
	} else {
		scroll(
			animate(
				document.querySelector(".overlay2"), 
				{ 
					transform: ["scale(1)", "scale(80)"], 
				}), 
				{
					target: document.querySelector(".s2"),
					offset: ["start start", "0.3 start"]
				}
		);
	}
	scroll(
		animate(
			document.querySelector(".s2__bg"), 
			{ 
				opacity: [1, 0],
			}), 
			{
				target: document.querySelector(".s2"),
				offset: ["start start", "0.2 start"]
			}
	);
} else {
	// <700 PX
	scroll(
		animate(
			document.querySelector(".overlay2"), 
			{ 
				transform: ["scale(1)", "scale(80)"], 
			}), 
			{
				target: document.querySelector(".s2"),
				offset: ["start start", "0.1 start"]
			}
	);
	scroll(
		animate(
			document.querySelector(".s2__bg"), 
			{ 
				opacity: [1, 0],
			}), 
			{
				target: document.querySelector(".s2"),
				offset: ["start start", "0.1 start"]
			}
	);
}

// const s6 = document.querySelector(".s6");
// const s7 = document.querySelector(".s7");
// const s7__header = document.querySelector(".s7__header");
// const s7__text = document.querySelector(".s7__text");

// const options = {
// 	root: null,
// 	rootMargin: "0px 0px", 
// 	threshold: 1,
// };

// const ob = new IntersectionObserver(obCallback, options);

// function obCallback(payload) {
// 	if (payload[0].boundingClientRect.y < 0) {
// 		s6.classList.add("white");
// 		s7.classList.add("white");
// 		s7__header.classList.add("black");
// 		s7__text.classList.add("black");
// 	} else {
// 		s6.classList.remove("white");
// 		s7.classList.remove("white");
// 		s7__header.classList.remove("black");
// 		s7__text.classList.remove("black");
// 	}
// }

// ob.observe(s7);


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
	e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
	window.addEventListener(
		"test",
		null,
		Object.defineProperty({}, "passive", {
			get: function () {
				supportsPassive = true;
			},
		}),
	);
} catch (e) {}

const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent =
	"onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
function disableScroll() {
	window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
	window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
	window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
	window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
	window.removeEventListener("DOMMouseScroll", preventDefault, false);
	window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
	window.removeEventListener("touchmove", preventDefault, wheelOpt);
	window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}

disableScroll();

function enableScroll2() {
	enableScroll();
}
