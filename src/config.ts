import { assets } from "$app/paths";

export const config = {
	mainPage: {
		heading: "Дианочкинс мой любимкинс",
		invitation: "ты будешь со мной на веки вечные?👉👈🥺",
		yesText: "да",
		noText: "нет",
		topImage: `${assets}/Assets/Top_picture/Cute_pic2.jpg`,
		leftHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
		rightHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
	},
	noPage: {
		message: '"нет" ваще не варик😁',
		image: `${assets}/Assets/No_picture/kermit-shooting.gif`,
	},
	yesPage: {
		message: "умничка, любики тя❤❤❤😄",
		image: `${assets}/Assets/Yes_picture/Yes.gif`,
	},
};
