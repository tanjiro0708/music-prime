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
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

const queueNames = [];

async function play(client, interaction) {
    try {
        const query = interaction.options.getString('name'); 

        const player = client.riffy.createConnection({
            guildId: interaction.guildId,
            voiceChannel: interaction.member.voice.channelId,
            textChannel: interaction.channelId,
            deaf: true
        });

     
        await interaction.deferReply();

   
        const resolve = await client.riffy.resolve({ query: query, requester: interaction.user });
        const { loadType, tracks, playlistInfo } = resolve;

        if (loadType === 'playlist') {
            for (const track of resolve.tracks) {
                track.info.requester = interaction.user;
                player.queue.add(track);
                queueNames.push(track.info.title); 
            }

            if (!player.playing && !player.paused) player.play();

        } else if (loadType === 'search' || loadType === 'track') {
            const track = tracks.shift();
            track.info.requester = interaction.user;

            player.queue.add(track);
            queueNames.push(track.info.title);

            if (!player.playing && !player.paused) player.play();
        } else {
            const errorEmbed = new EmbedBuilder()
                .setColor('#ff0000')
                .setTitle('Error')
                .setDescription('There are no results found.');

        
            await interaction.editReply({ embeds: [errorEmbed] });
            return;
        }

       
        await new Promise(resolve => setTimeout(resolve, 500));
        
     
const { EmbedBuilder } = require("discord.js");


const embeds = [
  
    new EmbedBuilder()
        .setColor('#4d9fd6')
        .setAuthor({
            name: 'Request Update!',
            iconURL: 'https://media.discordapp.net/attachments/1231610244459790338/1242905195604738158/standard.gif?ex=6654266a&is=6652d4ea&hm=c8314dfece411afa464bfcc16e0ce5dea1c7bb93e06d622c1e1b930e7803b4ff&=', 
            url: 'https://discord.gg/jASszHTTXD'
        })
        .setDescription('➡️ **Your request has been successfully processed.**\n➡️** Please use the buttons to control the queue**'),

 
    new EmbedBuilder()
    .setColor('#ffea00')
    .setAuthor({
        name: 'Request Update!',
        iconURL: 'https://media.discordapp.net/attachments/1231610244459790338/1242905195604738158/standard.gif?ex=6654266a&is=6652d4ea&hm=c8314dfece411afa464bfcc16e0ce5dea1c7bb93e06d622c1e1b930e7803b4ff&=', 
        url: 'https://discord.gg/jASszHTTXD'
    })
    .setDescription('➡️ **Your request has been successfully processed.**\n➡️** Please use the buttons to control the queue**'),

  
    new EmbedBuilder()
    .setColor('#ff2300')
    .setAuthor({
        name: 'Request Update!',
        iconURL: 'https://media.discordapp.net/attachments/1231610244459790338/1242905195604738158/standard.gif?ex=6654266a&is=6652d4ea&hm=c8314dfece411afa464bfcc16e0ce5dea1c7bb93e06d622c1e1b930e7803b4ff&=', 
        url: 'https://discord.gg/jASszHTTXD'
    })
    .setDescription('➡️ **Your request has been successfully processed.**\n➡️** Please use the buttons to control the queue**')
];


const randomIndex = Math.floor(Math.random() * embeds.length);


await interaction.followUp({ embeds: [embeds[randomIndex]] });

    } catch (error) {
        console.error('Error processing play command:', error);
        const errorEmbed = new EmbedBuilder()
            .setColor('#ff2300')
            .setTitle('Error')
            .setDescription('An error occurred while processing your request.');

     
        await interaction.editReply({ embeds: [errorEmbed] });
    }
}

module.exports = {
    name: "play",
    description: "Add options too",
    permissions: "0x0000000000000800",
    options: [{
        name: 'name',
        description: 'enter song name / link or playlist',
        type: ApplicationCommandOptionType.String,
        required: true
    }],
    run: play,
    queueNames: queueNames
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
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
