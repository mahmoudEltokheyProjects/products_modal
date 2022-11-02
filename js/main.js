/* ============================= Variables ============================= */
var imgSlider = document.getElementById("slideImgId"),
	modalEl = document.getElementById("overlayId"),
	productHead = document.getElementById("productH2Id") ,
	productDesc = document.getElementById("productParaId"),
	imgCounter = 0 ,
	leftArrow = document.getElementById("leftArrow"),
	rightArrow = document.getElementById("rightArrow"),
/* ++++++++++++++++++++++++++ Watches link  +++++++++++++++++++ */
link1 = document.getElementById("link1"),
/* ++++++++++++++++++++++++++ Cars link  ++++++++++++++++++++++ */
link2 = document.getElementById("link2"),
/* ++++++++++++++++++++++++++ Headphones link +++++++++++++++++ */
link3 = document.getElementById("link3"),
/* ++++++++++++++++++++++++++ Joystick link +++++++++++++++++++ */
link4 = document.getElementById("link4"),
/* ++++++++++++++++++++++++++ labtop link +++++++++++++++++++++ */
link5 = document.getElementById("link5"),
/* ++++++++++++++++++++++++++ Motocycles link +++++++++++++++++ */
link6 = document.getElementById("link6"),
/* ++++++++++++++++++++++++++ Phones link +++++++++++++++++++++ */
link7 = document.getElementById("link7"),
/* ++++++++++++++++++++++++++ Phones link +++++++++++++++++++++ */
link8 = document.getElementById("link8"),

/* ++++++++++++++++++++++++++ Cars info ++++++++++++++++++++++++ */
carImgs = ['img/cars/item-1.jpg','img/cars/item-2.jpg','img/cars/item-3.jpg'] ,
carHeaders = ["car1","cars2","car3"] ,
carParagraphs = ["car1 is smart and fast Lorem ipsum dolor sit amet , consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				   "car2 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				   "car3 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				  ] ,
/* ++++++++++++++++++++++++++ headphones info ++++++++++++++++++++++++ */
headphoneImgs = ['img/headphones/item-1.jpg','img/headphones/item-2.jpg','img/headphones/item-3.jpg'] ,
headphoneHeaders = ["headphone1","headphone2","headphone3"] ,
headphoneParagraphs = ["headphone1 is smart and fast Lorem ipsum dolor sit amet , consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				       "headphone2 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				       "headphone3 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				  	  ] ,
/* ++++++++++++++++++++++++++ joystick info ++++++++++++++++++++++++ */
joystickImgs = ['img/joystick/item-1.jpg','img/joystick/item-2.jpg','img/joystick/item-3.jpg'] ,
joystickHeaders = ["Joystick1","Joystick2","Joystick3"] ,
joystickParagraphs = ["Joystick1 is smart and fast Lorem ipsum dolor sit amet , consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				      "Joystick2 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				      "Joystick3 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				     ] ,
/* ++++++++++++++++++++++++++ Laptop info ++++++++++++++++++++++++ */
laptopImgs = ['img/labtop/item-1.jpg','img/labtop/item-2.jpg','img/labtop/item-3.jpg'] ,
laptopHeaders = ["labtop1","labtop2","labtop3"] ,
laptopParagraphs = ["labtop1 is smart and fast Lorem ipsum dolor sit amet , consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				    "labtop2 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				    "labtop3 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				   ] ,
/* ++++++++++++++++++++++++++ motocycles info ++++++++++++++++++++++++ */
motocycleImgs = ['img/motocycles/item-1.jpg','img/motocycles/item-2.jpg','img/motocycles/item-3.jpg'] ,
motocycleHeaders = ["motocycle1","motocycle2","motocycle3"] ,
motocycleParagraphs = [ "motocycle1 is smart and fast Lorem ipsum dolor sit amet , consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				        "motocycle2 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				        "motocycle3 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				      ] ,
/* ++++++++++++++++++++++++++ phones info ++++++++++++++++++++++++ */
phoneImgs = ['img/phones/item-1.jpg','img/phones/item-2.jpg','img/phones/item-3.jpg'] ,
phoneHeaders = ["phone1","phone2","phone3"] ,
phoneParagraphs = [ "phone1 is smart and fast Lorem ipsum dolor sit amet , consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				        "phone2 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				        "phone3 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				      ] ,
/* ++++++++++++++++++++++++++ Tv info ++++++++++++++++++++++++ */
tvImgs = ['img/tv/item-1.jpg','img/tv/item-2.jpg','img/tv/item-3.jpg'] ,
tvHeaders = ["television1","television2","television3"] ,
tvParagraphs = [ "television1 is smart and fast Lorem ipsum dolor sit amet , consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				        "television2 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				        "television3 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				      ] ,
/* ++++++++++++++++++++++++++ Watches info ++++++++++++++++++++++++ */
watchImgs = ['img/watches/item-1.jpg','img/watches/item-2.jpg','img/watches/item-3.jpg'] ,
watchHeaders = ["watch1","watch2","watch3"] ,
watchParagraphs = ["watch1 is smart and fast Lorem ipsum dolor sit amet , consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				   "watch2 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				   "watch3 is big and intelligence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores amet iste repellendus similique reiciendis.",
				  ]; 
// ============================= Open Modal  =============================
// +++++++ 1- When Click on "Watch link" , Open "Watches" Modal +++++++
link1.onclick = function()
{
	// 1- Appear Overlay Layer
	modalEl.style.transform  = "scale(1,1)";
	// 2- change default image of slider 
	slideShowImg.src = carImgs[0] ;
	// 3- set the "previous image header" in "slider"
	productHead.innerHTML = carHeaders[0];
	// 4- set the "previous image paragraph" in "slider"
	productDesc.innerHTML = carParagraphs[0];
	// 5- Call Slider function
	slider(carImgs,carHeaders,carParagraphs);
};
// +++++++ 2- When Click on "headphone link" , Open "headphones" Modal +++++++
link2.onclick = function()
{
	// 1- Appear Overlay Layer
	modalEl.style.transform  = "scale(1,1)";
	// 2- change default image of slider 
	slideShowImg.src = headphoneImgs[0] ;
	// 3- set the "previous image header" in "slider"
	productHead.innerHTML = headphoneHeaders[0];
	// 4- set the "previous image paragraph" in "slider"
	productDesc.innerHTML = headphoneParagraphs[0];
	// 5- Call Slider function
	slider(headphoneImgs,headphoneHeaders,headphoneParagraphs);
};
// +++++++ 3- When Click on "joystick link" , Open "joystickes" Modal +++++++
link3.onclick = function()
{
	// 1- Appear Overlay Layer
	modalEl.style.transform  = "scale(1,1)";
	// 2- change default image of slider 
	slideShowImg.src = joystickImgs[0] ;
	// 3- set the "previous image header" in "slider"
	productHead.innerHTML = joystickHeaders[0];
	// 4- set the "previous image paragraph" in "slider"
	productDesc.innerHTML = joystickParagraphs[0];
	// 5- Call Slider function
	slider(joystickImgs,joystickHeaders,joystickParagraphs);
};
// +++++++ 4- When Click on "joystick link" , Open "joystickes" Modal +++++++
link4.onclick = function()
{
	// 1- Appear Overlay Layer
	modalEl.style.transform  = "scale(1,1)";
	// 2- change default image of slider 
	slideShowImg.src = laptopImgs[0] ;
	// 3- set the "previous image header" in "slider"
	productHead.innerHTML = laptopHeaders[0];
	// 4- set the "previous image paragraph" in "slider"
	productDesc.innerHTML = laptopParagraphs[0];
	// 5- Call Slider function
	slider(laptopImgs,laptopHeaders,laptopParagraphs);
};
// +++++++ 5- When Click on "motocycles link" , Open "joystickes" Modal +++++++
link5.onclick = function()
{
	// 1- Appear Overlay Layer
	modalEl.style.transform  = "scale(1,1)";
	// 2- change default image of slider 
	slideShowImg.src = motocycleImgs[0] ;
	// 3- set the "previous image header" in "slider"
	productHead.innerHTML = motocycleHeaders[0];
	// 4- set the "previous image paragraph" in "slider"
	productDesc.innerHTML = motocycleParagraphs[0];
	// 5- Call Slider function
	slider(motocycleImgs,motocycleHeaders,motocycleParagraphs);
};
// +++++++ 6- When Click on "phones link" , Open "phones" Modal +++++++
link6.onclick = function()
{
	// 1- Appear Overlay Layer
	modalEl.style.transform  = "scale(1,1)";
	// 2- change default image of slider 
	slideShowImg.src = phoneImgs[0] ;
	// 3- set the "previous image header" in "slider"
	productHead.innerHTML = phoneHeaders[0];
	// 4- set the "previous image paragraph" in "slider"
	productDesc.innerHTML = phoneParagraphs[0];
	// 5- Call Slider function
	slider(phoneImgs,phoneHeaders,phoneParagraphs);
};
// +++++++ 7- When Click on "phones link" , Open "tv" Modal +++++++
link7.onclick = function()
{
	// 1- Appear Overlay Layer
	modalEl.style.transform  = "scale(1,1)";
	// 2- change default image of slider 
	slideShowImg.src = tvImgs[0] ;
	// 3- set the "previous image header" in "slider"
	productHead.innerHTML = tvHeaders[0];
	// 4- set the "previous image paragraph" in "slider"
	productDesc.innerHTML = tvParagraphs[0];
	// 5- Call Slider function
	slider(tvImgs,tvHeaders,tvParagraphs);
};
// +++++++ 8- When Click on "phones link" , Open "watches" Modal +++++++
link8.onclick = function()
{
	// 1- Appear Overlay Layer
	modalEl.style.transform  = "scale(1,1)";
	// 2- change default image of slider 
	slideShowImg.src = watchImgs[0] ;
	// 3- set the "previous image header" in "slider"
	productHead.innerHTML = watchHeaders[0];
	// 4- set the "previous image paragraph" in "slider"
	productDesc.innerHTML = watchParagraphs[0];
	// 5- Call Slider function
	slider(watchImgs,watchHeaders,watchParagraphs);
};
/* ============================= Sldier function ============================= */
function slider(imgsArr,h2Arr,paragraphsArr) 
{
	// ************** left Arrow slider **************
	leftArrow.onclick = function()
	{
		// console.log(imgCounter); 
		imgCounter--;
		if( imgCounter < 0 )
		{
			imgCounter= imgsArr.length - 1 ;
		}
		// set the "next image" in "slider"
		slideShowImg.src = imgsArr[imgCounter];
		// set the "next image header" in "slider"
		productHead.innerHTML = h2Arr[imgCounter];
		// set the "next image paragraph" in "slider"
		productDesc.innerHTML = paragraphsArr[imgCounter];
		
	};
	// ************** Right Arrow slider **************
	rightArrow.onclick = function()
	{
		// console.log(imgCounter); 
		imgCounter++ ;
		if( imgCounter >= imgsArr.length )
		{
			imgCounter = 0 ;
		}
		
		// set the "previous image" in "slider"
		slideShowImg.src = imgsArr[imgCounter];
		// set the "previous image header" in "slider"
		productHead.innerHTML = h2Arr[imgCounter];
		// set the "previous image paragraph" in "slider"
		productDesc.innerHTML = paragraphsArr[imgCounter];
	};    
}
/* ============================= Close Modal ============================= */
var overlayEl = document.getElementById("overlayId");
function closeDiv()
{
	overlayEl.style.transform = "scale(0,0)" ;
}




