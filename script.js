window.addEventListener("scroll",function(){

		var triggerPoint = Math.round(window.innerHeight/4);
		if(window.scrollY > triggerPoint){
			document.body.classList.add("scrolled");
		}else{
			document.body.classList.remove("scrolled");
		}

	})
