document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('select');
  const options = document.querySelectorAll('option');
  instances = M.FormSelect.init(elems, options);
});
