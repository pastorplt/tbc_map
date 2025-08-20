<!-- include-nav.js -->
<script>
  (function injectNavbar(){
    const mount = document.getElementById('navbar-include');
    if (!mount) return;
    fetch('navbar.html', { cache: 'no-cache' })
      .then(r => r.text())
      .then(html => { mount.innerHTML = html; })
      .catch(err => { mount.innerHTML = '<!-- navbar failed to load -->'; console.error(err); });
  })();
</script>
