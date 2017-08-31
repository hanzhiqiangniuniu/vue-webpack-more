/**
 * COPYRIGHT 2014 Jobvite, Inc. All rights reserved. This copyright notice is Copyright Management
 * Information under 17 USC 1202 and is included to protect this work and deter copyright infringement.
 * Removal or alteration of this Copyright Management Information without the express written permission
 * of Jobvite, Inc. is prohibited, and any such unauthorized removal or alteration will be a violation of
 * federal law.
 *
 * Usage:
 *
 * Place this element where you want the iframe to be rendered:
 * <div class="jv-careersite" data-careersite="your-careersite-name"></div>
 *
 * Place this script before the closing body tag:
 * <script src="https://jobs.jobvite.com/__assets__/scripts/careersite/public/iframe.js?v=01486090696"></script>
 *
 * Optional Attributes:
 *
 * - data-category: filter job list by category name
 * - data-department: filter job list by department name
 * - data-location: filter job list by location name
 * - data-region: filter job list by region name
 * - data-subsidiary: filter job list by subsidiary name
 * - data-type: filter job list by type name
 * - data-page: internal page to load, e.g. job/<jobId>/apply
 * - data-force-redirect: always redirect to mobile site when mobile browser is detected
 * - data-no-redirect: if on data-page, don't redirect to mobile site when mobile browser is detected
 *
 * Mobile Support:
 *
 * If a supported mobile browser is detected, the iframe will be replaced with a
 * link to your mobile site. To provide your own link, place it inside the div.
 * For example:
 *
 * <div class="jv-careersite" data-careersite="your-careersite-name">
 *     <a href="http://jobs.jobvite.com/your-careersite-name">View our open jobs.</a>
 * </div>
 *
 */

(function(win) {

  var anchor, el, src, baseUrl, optionMap, path;

  optionMap = {
    'data-category': 'c',
    'data-department': 'd',
    'data-location': 'l',
    'data-region': 'r',
    'data-subsidiary': 's',
    'data-type': 't'
  };

  el = document.querySelector('.jv-careersite');
  if (!el) {
    return;
  }
  if (!el.getAttribute('data-careersite')) {
    warn('Jobvite: no careersite detected!');
    return;
  }

  win.Jobvite = win.Jobvite || {};
  baseUrl = win.Jobvite.baseUrl || '//jobs.jobvite.com';
  path = getPath(win.location.search, el.getAttribute('data-page'));
  src = [
    baseUrl,
    el.getAttribute('data-careersite'),
    path
  ].join('/');

  if (!detectMobile(win.navigator.userAgent)) {
    renderIframe();
  }
  else if (shouldRedirect()) {
    win.location.href = src;
  }
  else if (!el.firstChild) {
    renderLink();
  }

// functions -------------------------------------------------------------------

  function renderLink () {
    var link = document.createElement('a');
    link.innerHTML = 'View Open Positions';
    link.href = src;
    el.appendChild(link);
  }

  function renderIframe () {
    var iframe, actions;
    iframe = document.createElement('iframe');
    iframe.frameBorder = 0;
    iframe.style.width = '100%';
    iframe.src = src;
    iframe.className = 'jv-careersite-iframe';
    iframe.name = 'jobvite_careersite_iframe';

    while(el.firstChild) {
      el.removeChild(el.firstChild);
    }
    el.appendChild(iframe);

    actions = {
      action_resize: function(data) {
        // adding 25px to prevent iframe scrollbars from appearing
        iframe.style.height = (data.height + 25) + 'px';
      },
      action_navigate: function(data) {
        if (data.href.match(/^(https?:)?\/\//)) {
          win.location = data.href;
        }
        else {
          win.location.search = updateQueryStringParameter(win.location.search, 'p', encodeURIComponent(data.href));
        }
      },
      action_scrollToFrame: function() {
        iframe.scrollIntoView();
      }
    };

    addEvent(win, 'message', function(e) {
      var action;
      if (e.source !== iframe.contentWindow) {
        return;
      }
      try {
        action = JSON.parse(e.data);
      }
      catch (err) {
        action = {};
      }
      if (actions['action_'+action.name]) {
        actions['action_'+action.name](action.data);
      }
    }, false);
  }

  function getPath (search, page) {
    var parts = (search ? search.substr(1).split('&') : []),
      defaultPage = '',
      len = parts.length,
      extra = ['nl=1'],
      path = page || defaultPage,
      pathParts,
      param,
      prop,
      propValue,
      i;

    for (i = 0; i < len; i++) {
      param = parts[i].split('=');
      if (param[0] === 'p') {
        pathParts = decodeURIComponent(param[1]).split('?');
        path = pathParts[0];
        if (pathParts[1]) {
          extra.push(pathParts[1]);
        }
      }
      else {
        extra.push(parts[i]);
      }
    }

    for (prop in optionMap) {
      if (optionMap.hasOwnProperty(prop)) {
        propValue = el.getAttribute(prop);
        if (propValue) {
          extra.push(optionMap[prop] + '=' + propValue);
        }
      }
    }

    if (decodeURI(path).match(/\.[\s\n\r]*\./)) {
      path = defaultPage;
    }

    return path + (extra.length ? '?' + extra.join('&') : '');
  }

  function shouldRedirect () {
    var forceRedirect = (el.getAttribute('data-force-redirect') !== null);
    var noRedirect = (el.getAttribute('data-no-redirect') !== null);
    var page = el.getAttribute('data-page');

    if (forceRedirect) {
      return true;
    }
    if (noRedirect && page && path.indexOf(page) === 0) {
      return false;
    }
    if (path.charAt(0) !== '?') {
      return true;
    }
    return false;
  }

  function addEvent (obj, ev, fn) {
    if (obj.addEventListener) {
      obj.addEventListener(ev, fn, false);
      return true;
    }
    else if (obj.attachEvent) {
      return obj.attachEvent('on' + ev, fn);
    }
  }

  function warn (message) {
    if (typeof console !== 'undefined' && console !== null) {
      if (typeof console.warn === 'function') {
        console.warn(message);
      }
    }
  }

  function updateQueryStringParameter(queryString, key, value) {
    var regex = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
    var separator = (queryString.indexOf('?') !== -1) ? '&' : '?';
    if (queryString.match(regex)) {
      return queryString.replace(regex, '$1' + key + '=' + value + '$2');
    }
    else {
      return queryString + separator + key + '=' + value;
    }
  }

  function detectMobile (useragent) {
    if (useragent.match(/^(?=.*Android)(?=.*Mobile).*/)) {
      return true;
    }
    if (useragent.match(/.*iphone.*/i)) {
      return true;
    }
    return false;
  }

})(window);
