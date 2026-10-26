export function parseDateString(value) {
  if (!value) return null;
  const match = String(value).match(
    /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})(?::(\d{2}))?$/
  );
  if (match) {
    const [, dd, mm, yyyy, hh, min, ss = '00'] = match;
    return new Date(+yyyy, +mm - 1, +dd, +hh, +min, +ss);
  }
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function formatDate(value) {
  if (!value) return '-';
  const d = parseDateString(value);
  if (!d) return '-';
  return d.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

export function formatDateTime(value) {
  if (!value) return '';
  const d = parseDateString(value);
  if (!d) return '';
  return d.toLocaleString('en-GB', { hour12: false });
}
