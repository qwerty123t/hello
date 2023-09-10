import { animate, scroll } from "motion";
// сжал на 34кб убрав скроллтаймлайн
// сейчас весит 35кб min файл

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
)

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

setTimeout(
	document.body.removeAttribute("class"), 
3000);

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// 700+ PX
if (window.matchMedia("(min-width: 700px)").matches) {
	if (isSafari === true) {
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

// 700+ PX
if (window.matchMedia("(min-width: 700px)").matches) {
	scroll(
		animate(
			[document.querySelector(".s6"), document.querySelector(".s7") ],
			{ 
				backgroundColor: ["#010516", "#EBECF0"], 
			}), 
			{
				target: document.querySelector(".s7"),
				offset: ["0.5 0.7", "end end"]
			}
	);

	scroll(
		animate(
			document.querySelector(".s7__header"), 
			{ 
				color: ["white", "black"], 
			}), 
			{
				target: document.querySelector(".s7"),
				offset: ["0.5 0.7", "end end"]
			}
	);
	scroll(
		animate(
			document.querySelector(".s7__text"), 
			{ 
				color: ["white", "black"], 
			}), 
			{
				target: document.querySelector(".s7"),
				offset: ["0.5 0.7", "end end"]
			}
	);
} else {
// <700 px
	scroll(
		animate(
			[document.querySelector(".s6"), document.querySelector(".s7") ],
			{ 
				backgroundColor: ["#010516", "#EBECF0"], 
			}), 
			{
				target: document.querySelector(".s7"),
				offset: ["0.5 0.9", "end end"]
			}
	);

	scroll(
		animate(
			document.querySelector(".s7__header"), 
			{ 
				color: ["white", "black"], 
			}), 
			{
				target: document.querySelector(".s7"),
				offset: ["0.5 end", "end 0.9"]
			}
	);
	scroll(
		animate(
			document.querySelector(".s7__text"), 
			{ 
				color: ["white", "black"], 
			}), 
			{
				target: document.querySelector(".s7"),
				offset: ["0.5 end", "end 0.9"]
			}
	);
}
