(() => {
  const form = document.querySelector('#counselling-form');
  const message = document.querySelector('#form-message');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const data = Object.fromEntries(new FormData(form).entries());
    const digits = String(data.phone || '').replace(/\D/g, '');
    if (digits.length < 10) { message.textContent = 'Please enter a valid phone number.'; return; }
    const text = [
      'Vidyasankalpa Academy — Counselling Enquiry',
      '', `Name: ${data.name}`, `Phone: ${data.phone}`, `Student/Class: ${data.studentClass}`,
      `Program: ${data.program}`, data.time ? `Preferred time: ${data.time}` : '', data.notes ? `Message: ${data.notes}` : ''
    ].filter(Boolean).join('\n');
    const url = `https://wa.me/918123441586?text=${encodeURIComponent(text)}`;
    message.textContent = 'Opening WhatsApp…';
    window.open(url, '_blank', 'noopener');
  });
})();
