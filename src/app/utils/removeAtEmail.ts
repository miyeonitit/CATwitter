export const removeAtEmail = (email: string): string => {
  return email.split("@")[0];
};
