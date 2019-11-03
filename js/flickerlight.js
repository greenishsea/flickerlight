/**
 * flickerlight
 *
 * Copyright 2017-01-01 greenishsea
 * Dual licensed under MIT and GPL.
 *
 * @description generate specific amounts of flicker light in the target element
 * @version 1.0
 * @param {Object} target: target element
 *                 amount: of flicker light
 * @return None
 *
 */
window.addEventListener("DOMContentLoaded", function(){

  var defaults = {
    amount: 90
  };

  var nodeList = document.querySelectorAll('[data-flickerlight-target]');
  if (nodeList[0] === undefined) {
    return false;
  }
  var el = nodeList[0]; // currently firstTarget only (TODO: forEach)

  var amountString = el.dataset.flickerlightAmount;
  var amount = amountString ? parseInt(amountString, 10) : defaults.amount;

  var flickerRenderer = {
    render: function(){
      for (var i = 0; i < amount; i++) {
        var flicker = this.getNewFlicker();
        flicker.style.top = this.rand() * 100 + "%";
        flicker.style.left = this.rand() * 100 + "%";
        flicker.style.webkitAnimationDelay = this.rand() + "s";
        flicker.style.mozAnimationDelay = this.rand() + "s";
        el.appendChild(flicker);
      };
    },
    
    rand: function(){
      return Math.random();
    },

    getNewFlicker: function(){
      var d = document.createElement('div');
      d.innerHTML = '<figure class="flickerlight"></figure>';
      return d.firstChild;
    },
  };
  
  flickerRenderer.render();

}, false);
