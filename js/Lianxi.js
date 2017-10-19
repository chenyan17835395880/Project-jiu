/*
* @Author: Administrator
* @Date:   2017-10-07 21:24:18
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-10 23:18:23
*/
/////////////////////////////////////////////////////////////////头部
window.onload=function(){
	let ul1=document.querySelector(".ul-xian");
	let ul_box=document.querySelector(".yin-box");
	window.onscroll=function(){
		let scroll=document.documentElement.scrollTop;
		if(scroll>=130){
			ul_box.style.opacity="1";
			// animate(ul_box,{opacity:1});
		}
		if(scroll<=130){
			ul_box.style.opacity="0";
			// animate(ul_box,{opacity: 0});
		}
	}
//////////////////////////////////////////////////////////地图
	let lianxi_left=document.querySelector(".lianxi-left");
	lianxi_left.addEventListener("mousewheel",function(e){
		let gun=e.wheelDelta;
		// if(gun)
	})
	let img=document.querySelector(".img");
	let yidong=document.querySelector(".yidong");
	yidong.onmousedown=function(e){
		let cx=e.offsetX,cy=e.offsetY;
		yidong.onmousemove=function(e){
			let ox=e.offsetX,oy=e.offsetY;
			img.style.top=`${ox}px`;
			img.style.left=`${oy}px`;
		}
	}



}