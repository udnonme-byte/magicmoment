import { assets } from "$app/paths";

export const config = {
	mainPage: {
		heading: "Дианчик мой любимкинс!",
		invitation: "будешь ли ты моей на веки вечные?👉👈🥺",
		yesText: "Да",
		noText: "Нет",
		topImage: `${assets}/Assets/Top_picture/Cute_pic2.jpg`,
		leftHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
		rightHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
	},
	noPage: {
		message: '"нет" ваще не варик😁',
		image: `${assets}/Assets/No_picture/kermit-shooting.gif`,
	},
	yesPage: {
		message: "умница, любимкинс❤❤❤😄",
		image: `${assets}/Assets/Yes_picture/Yes.gif`,
	},
};
