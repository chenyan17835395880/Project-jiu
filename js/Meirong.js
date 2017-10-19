/*
* @Author: Administrator
* @Date:   2017-10-07 20:22:06
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-07 20:25:30
*/
/////////////////////////////////////////////////////////////////头部
window.onload=function(){
	let ul1=document.querySelector(".ul-xian");
	let ul_box=document.querySelector(".yin-box");
	console.log(ul_box)
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
}