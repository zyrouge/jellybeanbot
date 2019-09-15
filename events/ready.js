module.exports = (client) => {
  
  const text = `-------------------------------------------
I am Ready!
Logged in as ${client.user.tag} in ${client.guilds.size} Server.
-------------------------------------------`
  console.log(text);
};