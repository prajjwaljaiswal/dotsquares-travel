(function () {
  'use strict';

  /**
   * Toggles the open/closed state of a single FAQ accordion item.
   * Exposed separately so it can be unit tested without a full DOM render.
   *
   * @param {HTMLElement} item - The .faq-item element to toggle
   * @param {boolean} [forceClose] - If true, forces the item closed regardless of current state
   */
  function toggleFaqItem(item, forceClose) {
    if (!item) {
      return;
    }

    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    const isOpen = item.classList.contains('open');
    const shouldOpen = forceClose ? false : !isOpen;

    if (shouldOpen) {
      item.classList.add('open');
      if (button) {
        button.setAttribute('aria-expanded', 'true');
      }
      if (answer) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    } else {
      item.classList.remove('open');
      if (button) {
        button.setAttribute('aria-expanded', 'false');
      }
      if (answer) {
        answer.style.maxHeight = '0px';
      }
    }
  }

  function initFaqAccordion(root) {
    if (!root) {
      return;
    }

    const items = root.querySelectorAll('.faq-item');

    items.forEach(function (item) {
      const button = item.querySelector('.faq-question');
      if (!button) {
        return;
      }

      button.addEventListener('click', function () {
        toggleFaqItem(item);
      });
    });
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
      const accordion = document.getElementById('faq-accordion');
      initFaqAccordion(accordion);
    });
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toggleFaqItem: toggleFaqItem, initFaqAccordion: initFaqAccordion };
  }
})();
