/**
 * General data formatters for climate and dashboard metrics
 */

export function formatMetric(value, unit = '', decimals = 1) {
  if (value === null || value === undefined) return '--';
  const num = typeof value === 'number' ? value : parseFloat(value);
  if (isNaN(num)) return '--';
  return `${num.toFixed(decimals)} ${unit}`.trim();
}

export function formatDate(dateString) {
  if (!dateString) return '--';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch {
    return dateString;
  }
}
