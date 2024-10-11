export const verifyEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";
  const words = name.split(" ");
  let initinals = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initinals += words[i][0];
  }

  return initinals.toUpperCase();
};
