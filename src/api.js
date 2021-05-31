const base_url = (ENV) => {
  if (ENV === "PROD") {
    return "https://admin.movebot.ng/api";
  } else if (ENV === "DEV") {
    return "https://admin.movebot.ng/prod_sup/api";
  }
};
export default base_url("DEV");
