function toggleRead() {
  var moreText = document.querySelector('#more');
  var btnText = document.getElementById('#myBtn');

  if (moreText.style.display === 'none') {
    moreText.style.display = 'inline';
    btnText.textContent = 'Read More';
  } else {
    moreText.style.display = 'none';
    btnText.textContent = 'Read More';
  }
}
