/*
 * If I want to add dymanic links later
 * I should have one pointing to a public obsidan vault with a lot of my old class notes..
 * That and the robotics repo, checkout https://quartz.jzhao.xyz/
 * to publish this stuff (thats an entire porject on its own but would be nice to have..)
 */
document.querySelectorAll('.lab').forEach(item => {
    item.addEventListener('click', () => {
      const url = item.dataset.url;
      if (url) window.open(url, '_blank');
    });
  });
