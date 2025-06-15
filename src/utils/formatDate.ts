export function formatDate(date: string | Date, locale = 'pt-BR'): string {
    const parsedDate = typeof date === 'string' ? new Date(date) : date;
  
    if (isNaN(parsedDate.getTime())) return 'Data inválida';
  
    return parsedDate.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }