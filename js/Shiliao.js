/*
* @Author: Administrator
* @Date:   2017-10-07 22:43:39
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-09 21:13:13
*/
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

	// let shiliao1=document.querySelector(".shiliao1");
	// let tu=document.querySelector(".shiliao1-left");
	// tu.onmouseover=function(){
	// 	shiliao1.innerHTML+=`
	// 		<div class="yidong">那边你你</div>
	// 	`;
	// }
	// let yidong=document.querySelector(".yidong");
	// console.log(yidong)
	// tu.onmouseout=function(){
	// 	yidong.style.display="none";
	// }




}