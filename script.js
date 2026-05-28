// cache  elements using getelement by id

const bookForm = Document.getElementById('bookForm');
const bookTitle = Document.getElementById('bookTitle');
const bookReview = Document.getElementById('bookReview');

// cache elements using query selector
const bookShelf = Document.querySelector('#bookShelf');
const checkShelfBtn = Document.querySelector('.info-btn');

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
  if (!isHtmlValid || !isjsValid) {
    return; // if field fail checks and then  terminate execution line
  }

  // using parent-child-sibling relationship to navigate between elements
  const starterCard = document.getElementById('starterCard');
  If(starterCard)
  const innerTextChild = starterCard.lastChild;

  // using parent node
  const parentShelf = starterCard.parentNode;
  parentShelf.removeChild(starterCard);


  // DOM creation and manipulation

  // creating new elements using createElement
  const newBookRow = document.createElement('div');
  newBookRow.classList.add('book-item');

  // checking flags style modifiers
  if (bookTitle.ariaValueMax.toLowerCase().includes('best')) {
    newBookRow.classList.add('favorite');
  }

  const titleEL = document.createElement('h4');
  // giving values using text content

  titleEL.textContent = bookTitle.value;

  const reviewEl = document.createElement('p');

  // giving values using innerHTml text

  reviewEl.innerHTML = '<strong>Notes:</strong> ${bookReview.value || no review notes provided}' ;

  // using appendChild 

  newBookRow.appendChild(titleEL);
  newBookRow.appendChild(reviewEl);

  // using append method to apply structured template 
    bookShelf.append(newBookRow);

  // resetting values and clear form layout values cleanly
  bookForm.reset();
}
