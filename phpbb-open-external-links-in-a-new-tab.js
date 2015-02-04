(function(w, d) {

    var clickHandler = function(e) {
	e.preventDefault();
	w.open(e.currentTarget.href);
    }, links = d.querySelectorAll("a.postlink"), length = links.length;

    while (length--) {
	if (links[length].hostname != w.location.hostname) {
	    links[length].onclick = clickHandler;
	}
    }

})(window, document);