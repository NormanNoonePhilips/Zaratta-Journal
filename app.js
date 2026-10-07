(function () {
    var pages = [["index.html", "Welcome"], ["tourist.html", "Tourist's Bible"], ["rights.html", "People's Rights"], ["wrongs.html", "People's Wrongs"], ["monkey.html", "Monkey's Business"]];
    var cur = document.body.dataset.page;
    var h = document.createElement("div"); h.className = "sheet";
    var main = document.querySelector("main"); main.parentNode.insertBefore(h, main); h.appendChild(main);
    var top = document.createElement("div");
    top.innerHTML = '<div class="masthead"><div class="tag">* A Journal of the Old Dry Oasis *</div><h1>Lis Populis</h1></div><div class="dateline"><span>Year 516 after the War of the Hundred Armies</span><span>Jaang Desert</span><span>Banknotes only</span></div><div class="topnav">' + pages.map(function (p) { return '<a href="' + p[0] + '" class="' + (p[0] == cur ? 'on' : '') + '">' + p[1] + '</a>' }).join("") + '</div>';
    h.insertBefore(top, main);
    var f = document.createElement("footer"); f.textContent = "Don't die in Zaratta. Don't die in Zaratta."; h.appendChild(f);
    var nav = document.createElement("nav"); nav.className = "marks"; nav.setAttribute("aria-label", "Section bookmarks");
    var hs = [].slice.call(main.querySelectorAll("h2[id]"));
    hs.forEach(function (e) { var a = document.createElement("a"); a.href = "#" + e.id; a.textContent = e.dataset.mark || e.firstChild.textContent; nav.appendChild(a) });
    document.body.appendChild(nav);
    var rn = document.createElement("nav"); rn.className = "pages"; rn.setAttribute("aria-label", "All pages"); pages.forEach(function (p) { var a = document.createElement("a"); a.href = p[0]; a.textContent = p[1]; if (p[0] == cur) a.className = "on"; rn.appendChild(a) }); document.body.appendChild(rn);
    var links = [].slice.call(nav.children);
    function spy() { var y = scrollY + 140, i = 0; hs.forEach(function (e, k) { if (e.offsetTop <= y) i = k }); links.forEach(function (a, k) { a.classList.toggle("on", k == i) }) }
    addEventListener("scroll", spy); spy();
    if (window.tippy) tippy(".tip", { theme: "light", animation: "shift-away", maxWidth: 280 });
})();
