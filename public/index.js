// forms
const metaForm = document.querySelector('.meta-form');

// output elements
const description = document.querySelector('.description p');
const tags = document.querySelector('.tags p');

// description and tags
metaForm.addEventListener('submit', async e => {
  e.preventDefault();

  const res = await fetch('/openai/meta', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: metaForm.title.value }),
  });
  const data = await res.json();

  //   console.log(data);

  description.textContent = data.description;
  tags.textContent = data.tags.replace(/\n/g, ', '); // Replace newlines with commas
});
