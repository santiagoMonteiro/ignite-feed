import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

function getPublishedDateFormatted(publishedAt) {
  return format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
}

function getPublishedDateRelativeFromNow(publishedAt) {
  return formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
}

export const dateFns = {
  getPublishedDateFormatted,
  getPublishedDateRelativeFromNow
}