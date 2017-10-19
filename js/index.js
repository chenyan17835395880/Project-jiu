/*
* @Author: Administrator
* @Date:   2017-10-01 21:29:48
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-04 22:19:16
*/
/*let header_lis=document.querySelectorAll("li");
for(let i=0;i<header_lis.length;i++){
	header_lis[i].onmouseover=function(){
		header_lis[i].style.border="2px solid #fff";
	}
	header_lis[i].onmouseout=function(){
		header_lis[i].style.border="0";
	}
}*/
//////////////////////////////////////////////////////////////头部
window.onload=function(){
	let ul=document.querySelector(".ul");
	let ul_box=document.querySelector(".ul-hei");
	console.log(ul_box)
	window.onscroll=function(){
		let scroll=document.documentElement.scrollTop;
		if(scroll>=130){
			ul_box.style.display="block";
			// animate(ul_box,{opacity:1});
		}
		if(scroll<=130){
			ul_box.style.display="none";
			// animate(ul_box,{opacity: 0});
		}
	}


///////////////////////////////////////////////////////////////热销产品
	// let rexiao_lis=document.querySelectorAll(".li");
	// let rexiao_yin=document.querySelectorAll(".rexiao-yin");
	// let rexiao_xian=document.querySelectorAll(".rexiao-xian");
	// console.log(rexiao_lis)
	// for(let i=0;i<rexiao_lis.length;i++){
	// 	rexiao_lis[i].onmouseover=function(){
	// 		rexiao_yin[i].style.display="block";
	// 		// rexiao_yin[i].style.transform="translateY(-100px)";
	// 		// animate(rexiao_yin[i],{top:-100});
	// 		rexiao_xian[i].style.display="none";

	// 	}
	// 	rexiao_lis[i].onmouseout=function(){
	// 		rexiao_yin[i].style.display="none";
	// 		// rexiao_yin[i].style.transform="translateY(100px)";
	// 		// animate(rexiao_yin[i],{transform:translateY(100)});
	// 		rexiao_xian[i].style.display="block";

	// 	}
	// }




}
	