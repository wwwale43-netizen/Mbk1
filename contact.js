(() => {
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#contact-status');

  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const name = String(values.get('name') || '').trim();
    const email = String(values.get('email') || '').trim();
    const subject = String(values.get('subject') || '').trim();
    const message = String(values.get('message') || '').trim();

    const body = [
      `الاسم: ${name}`,
      `البريد الإلكتروني: ${email}`,
      '',
      message,
    ].join('\n');

    const mailto = new URL('mailto:pc.libya@proton.me');
    mailto.searchParams.set('subject', subject);
    mailto.searchParams.set('body', body);

    status.textContent = 'نحاول فتح تطبيق البريد. راجع الرسالة وأرسلها من تطبيقك؛ إذا لم يفتح، استخدم رابط البريد المباشر أعلاه.';
    window.location.href = mailto.toString();
  });
})();
