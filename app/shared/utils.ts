export const maskAmount = (value: string) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const onlyNumbers = value.replace(/\D/g, "");
  const formattedValue = formatter.format(Number(onlyNumbers) / 100);
  return formattedValue;
};

export const maskIdentifier = (value: string) => {
  if (value.length > 14) {
    return value.slice(0, 14);
  }

  if (value.length <= 14) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2");
  } else {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }
};

export const redirectLoan = () =>
  window.setTimeout(() => {
    window.location.href = "/painel";
  }, 2000);
