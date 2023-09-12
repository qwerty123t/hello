import Parallax from 'parallax-js'

const scene1 = document.getElementById('scene1'); 
const scene2 = document.getElementById('scene2');
const scene3 = document.getElementById('scene3');  
const scene4 = document.getElementById('scene4');
const scene5 = document.getElementById('scene5');  
const scene6 = document.getElementById('scene6');
const scene7 = document.getElementById('scene7');  
const scene8 = document.getElementById('scene8');
const scene9 = document.getElementById('scene9'); 
const scene10 = document.getElementById('scene10'); 



const parallax1 = new Parallax(scene1, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
const parallax2 = new Parallax(scene2, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
const parallax3 = new Parallax(scene3, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
const parallax4 = new Parallax(scene4, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
const parallax5 = new Parallax(scene5, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
const parallax6 = new Parallax(scene6, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
const parallax7 = new Parallax(scene7, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
const parallax8 = new Parallax(scene8, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
const parallax9 = new Parallax(scene9, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
const parallax10 = new Parallax(scene10, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});

if (window.matchMedia("(min-width: 700px)").matches) {  
	pivot.init({
		selector: '#scene1',
		scale: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene2',
		scale: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene3',
		scale: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene4',
		scale: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene5',
		scale: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene6',
		scale: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene7',
		scale: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene8',
		scale: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene9',
		scale: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene10',
		scale: true,
		perspective: 1500,
	})
} 
