/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.gg/jASszHTTXD                           ║
║  ## YouTube : https://www.youtube.com/channel/UCopUn1EsL60mA65_bG3TT-Q ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.gg/jASszHTTXD";
      const InviteBot = "https://discord.com/oauth2/authorize?client_id=1221847619953889370&permissions=8&scope=bot":
      const youtubeLink = "https://www.youtube.com/channel/UCopUn1EsL60mA65_bG3TT-Q";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://media.discordapp.net/attachments/1223287062384607303/1242925221472632904/dawww.png?ex=66543911&is=6652e791&hm=0a98b309a036a4c8770c1875c046c24524e5591586bde61ea66058a7bee20c0f&=&format=webp&quality=lossless&width=840&height=473', 
              url: 'https://discord.gg/jASszHTTXD'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- Replit - ${replitLink}\n- YouTube - ${youtubeLink}`)
              .setImage('https://media.discordapp.net/attachments/1223287062384607303/1242925221472632904/dawww.png?ex=66543911&is=6652e791&hm=0a98b309a036a4c8770c1875c046c24524e5591586bde61ea66058a7bee20c0f&=&format=webp&quality=lossless&width=840&height=473')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};

/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.gg/jASszHTTXD                           ║
║  ## YouTube : https://www.youtube.com/channel/UCopUn1EsL60mA65_bG3TT-Q ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
