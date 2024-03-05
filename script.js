// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/10417821_10152854252614316_7471145872190254167_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=bd3046&_nc_ohc=aluAaUY1_yUAX_ZD4dI&_nc_ht=scontent-atl3-1.xx&oh=00_AfAWLG9loLr1eShob9gAX2k6g-1vd8g8smr4h--K8aEGSw&oe=660E83C9',
  'https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/218888114_4217203654966816_8549295732802917926_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f25831&_nc_ohc=bAlhGY8TtWcAX94j2Yr&_nc_ht=scontent-atl3-2.xx&oh=00_AfAVaAi_H9P8c-cMAer_b22HdqCK07-S5BgzYxl86iKfNQ&oe=65ECF969',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/219105036_4217203838300131_3270505001934198726_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f25831&_nc_ohc=xZk1uQaBTWsAX-rVNfd&_nc_ht=scontent-atl3-1.xx&oh=00_AfDe1zqbXYtuS_nfnFMlTXRwO_Yqhr6-lZwLTaBLY2S1_Q&oe=65EB5E42',
  'https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/218987672_4217203881633460_8642508422445550400_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f25831&_nc_ohc=CYV7dsE-BmUAX82PFXk&_nc_ht=scontent-atl3-2.xx&oh=00_AfAwP33YSyaYHuSZ7-X6EHDC0-OkgKyY6IpmoT0ArA3p7w&oe=65ECC070',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/218815740_4217203924966789_8430953779388232942_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f25831&_nc_ohc=WZVo0ZljQ_EAX-AX5Pp&_nc_ht=scontent-atl3-1.xx&oh=00_AfDD9xh_bf4PawSdr1zQZlYq_Z1nKoTUvTS5AlDNqH40og&oe=65EC68EF',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/219011585_4217204074966774_2760673738557394212_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f25831&_nc_ohc=pHGFueAaNuYAX8V4LAd&_nc_ht=scontent-atl3-1.xx&oh=00_AfAhfU7oPJHDhl8HRIWtVi5vqHgi4PKK-0ZVSlRwWPtXEg&oe=65EB8744',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/219411618_4217204041633444_4651790567406297453_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f25831&_nc_ohc=nmEL9Y1cyC4AX-C_Kwz&_nc_ht=scontent-atl3-1.xx&oh=00_AfDJXGH8Uae2YJ9ntCtQ0XSyeM_M_I9ZvpYTdaAIjlNLLA&oe=65EC020B',
  'https://scontent-atl3-2.xx.fbcdn.net/v/t1.18169-9/10483277_10202859281468335_4068247980397493338_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=bd3046&_nc_ohc=sa58PjpeArQAX-tn0FK&_nc_ht=scontent-atl3-2.xx&oh=00_AfCjTU1cxPg0Fy8V9FPOuY5HtLQo9Y6k4D7XqkMCm7t5pA&oe=660EAF47',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/18485299_10209525764326240_4922216157180352844_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=bd3046&_nc_ohc=hs3PhIzNZ_cAX98KgS-&_nc_ht=scontent-atl3-1.xx&oh=00_AfBKotprLoSSmBp_2g1gIGIIApx3owSFeJznZaHWQLl-sQ&oe=660EB0DB',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/10417821_10152854252614316_7471145872190254167_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=bd3046&_nc_ohc=aluAaUY1_yUAX_ZD4dI&_nc_ht=scontent-atl3-1.xx&oh=00_AfAWLG9loLr1eShob9gAX2k6g-1vd8g8smr4h--K8aEGSw&oe=660E83C9',
  
  
];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 10],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
  appendNewCard();
}

/*	CHECK FOR PREFERED REDUCED MOTION
		AND IF SO, DO NOT RUN ANY OF THE SCRIPTS
		SPLITTING THE LIST ELEMENT INTO MULTIPLE
		LISTS OR APPLYING THE SCROLL ANIMATION
*/
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
if (mediaQuery && !mediaQuery.matches) {
	const tagScroller = document.querySelector(".tag-scroller");
	const allTags = tagScroller.querySelectorAll("li");
	
	function createElement(tagName, className = "") {
		const elem = document.createElement(tagName);
		elem.className = className;
		return elem;
	}

	function scrollersFrom(elements, numColumns = 2) {
		const fragment = new DocumentFragment();
		elements.forEach((element, i) => {
			const column = i % numColumns;
			const children = fragment.children;
			if (!children[column]) fragment.appendChild(createElement("ul", "tag-list"));
			children[column].appendChild(element);
		});
		return fragment;
	}
	
	/*	SPLIT THE LIST ELEMENT INTO TWO LISTS
			AND CALL THE ANIMATION
	*/
	const scrollers = scrollersFrom(allTags, 2);
	tagScroller.innerHTML = "";
	tagScroller.appendChild(scrollers);
	addScrolling();

	/*	ADD scrolling CLASS TO THE WRAPPER ELEMENT,
			CLONE EACH LIST ITEM TO MAKE THE LIST LONG ENOUGH
			FOR INFINITE SCROLL AND THEN CALCULATE THE DURATION
			BASED ON WIDTH OF EACH SCROLLER TO MAKE THEM
			MOVE AT THE SAME RATE OF SPEED
			
			DEPENDING ON THE WIDTH OF .tag-scrollers, THE NUMBER OF
			LIST ITEMS AND THEIR INDIVIDUAL WIDTH, YOU MIGHT NEED
			TO CLONE THEM TWO TIMES EACH TO BE SURE EACH .tag-scroller
			WILL BE WIDE ENOUGH TO SUPPORT INFINITE SCROLL
			
			THIS COULD OF COURSE BE ADDED TO THE SCRIPT
			BUT FOR OUR USE CASE, WE KNOW THE MINIMUM NUMBER OF
			LIST ELEMENTS WILL BE ENOUGH FOR ONE CLONE EACH
	*/
	function addScrolling() {
		tagScroller.classList.add("scrolling");
		document.querySelectorAll(".tag-list").forEach((tagList) => {
			const scrollContent = Array.from(tagList.children);
			scrollContent.forEach((listItem) => {
				const clonedItem = listItem.cloneNode(true);
				clonedItem.setAttribute("aria-hidden", true);
				tagList.appendChild(clonedItem);
			});
			tagList.style.setProperty("--duration", (tagList.clientWidth / 100) + "s");
		});
	}
}
gsap.to("p", {
	fontWeight: 900,
	ease: "sine.in",
	duration: 1,
	stagger: {
	  each: 0.05,
	  yoyo: true,
	  repeat: -1
	}
  });
  
