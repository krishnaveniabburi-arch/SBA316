// cache  elements using getElementById
const bookForm = document.getElementById('bookForm');
const bookTitle = document.getElementById('bookTitle');
const bookReview = document.getElementById('bookReview');

// cache elements using query selector
const bookShelf = document.querySelector('#bookShelf');
const checkShelfBtn = document.querySelector('.info-btn');

// using 3 types of  event Listeners input and submit
bookForm.addEventListener('submit', handleFormSubmit);
bookReview.addEventListener('input', runLiveReviewValidation);
checkShelfBtn.addEventListener('click, showShelfStatitics');

// Event handler functions & validation

function handleFormSubmit(event) {
Event.preventDefault(); // page refresh

// html attribute validation check
let isHtmlValid = bookTitle.validity.valid;
if (!isHtmlValid) {
  titleValidationHint.style.display = 'block';
  bookTitle.style.borderColor = '#b91c1c';
} else {
  titleValidationHint.style.display = 'none';
  bookTitle.style.borderColor = '#ddd';
}

// js execution status matching validation requirements
let isjsValid = runLiveReviewValidation();
  if(!isHtmlValid || !isjsValid) {
    return; // if field fail checks and then  terminate execution line
}

// using parent-child-sibling relationship to navigate between elements
 const starterCard = document.getElementById('starterCard');
 If (starterCard) {
  const innerTextChild = starterCard.lastChild;

  // using parent node
  const parentShelf = starterCard.parentNode;
  parentShelf.removeChild(starterCard);
 }

}
