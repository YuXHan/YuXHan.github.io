/* Language switch logic */
(function () {
  var lang = localStorage.getItem('lang') || 'zh';
  document.documentElement.setAttribute('lang', lang);

  var tabLabels = {
    zh: { about: '关于我', study: '学习', journal: '日记', achievements: '成果与荣誉' },
    en: { about: 'About', study: 'Study', journal: 'Journal', achievements: 'Achievements' }
  };

  function updateNavLabels(l) {
    var tabs = tabLabels[l];
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href') || '';
      var keys = Object.keys(tabs);
      for (var j = 0; j < keys.length; j++) {
        if (href.indexOf('/' + keys[j] + '/') !== -1) {
          var span = links[i].querySelector('span');
          if (span) span.textContent = tabs[keys[j]].toUpperCase();
        }
      }
    }
  }

  updateNavLabels(lang);

  window.switchLang = function (l) {
    document.documentElement.setAttribute('lang', l);
    localStorage.setItem('lang', l);
    updateNavLabels(l);
  };
})();
