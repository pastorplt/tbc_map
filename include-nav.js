// include-nav.js  (no <script> tags in this file)
(function injectNavbar(){
  var mount = document.getElementById('navbar-include');
  if (!mount) return;

  fetch('navbar.html', { cache: 'no-cache' })
    .then(function(r){ return r.text(); })
    .then(function(html){
      mount.innerHTML = html;

      // Ensure any <script> inside navbar.html runs
      var scripts = mount.querySelectorAll('script');
      scripts.forEach(function(oldScript){
        var s = document.createElement('script');
        if (oldScript.src) s.src = oldScript.src;
        if (oldScript.type) s.type = oldScript.type;
        s.text = oldScript.text || oldScript.textContent;
        oldScript.replaceWith(s);
      });
    })
    .catch(function(err){
      console.error('Navbar include failed:', err);
      mount.innerHTML = '<div style="background:#bf3426;color:#fff;padding:8px 12px;">Navigation failed to load</div>';
    });
})();
