
function main() {
	window.addEventListener('DOMContentLoaded', injectTargetAll, true);
	// setTimeout(function(){
	// 	injectTargetAll();
	// },1000);
}

function injectTargetAll(opt) {
	console.log('injectTargetAll');
	var opt = opt || {};
	each(document.getElementsByTagName("a"), function(el) {
		injectTarget(el, opt);
	});
}

function injectTarget(el, opt) {
	if (el.target != '' || isSameDomain(el)) { return; }
	var label = opt.label || '_blank';
	if(el.target != label){
		el.target = label;
	}
}

function getHref(anchor) {
	return anchor.href;
}

function isSameDomain(el) {
	var href = getHref(el);
	var host = location.protocol + "//" + location.hostname;
	return href === '' ||
		href.indexOf("javascript:") === 0 || 
		href.indexOf(host) === 0;
}

function each(ar, cb){
	var len = ar.length;
	for(var i = 0; i < len; i++){
		cb(ar[i]);
	}
}

main();

