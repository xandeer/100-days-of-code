// import data from '../assets/data';

const channels = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp',
  'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas',
];

const items = [];

function fetchData(params, url, headers) {
  return $.ajax({
    data: params,
    url,
    headers,
    dataType: 'json',
  });
}

function getStream(channel) {
  return fetchData({},
    `https://wind-bow.gomix.me/twitch-api/streams/${channel}`);
}

function parseDate(data) {
  let channel;
  let game;
  let status;
  let link;
  let src;
  let alt;
  let title;
  let description;

  if (data.stream === null) {
    game = 'Offline';
    status = 'offline';
  } else if (data.stream === undefined) {
    game = 'Account Closed';
    status = 'offline';
  } else {
    channel = data.stream.channel;
    game = data.stream.game;
    status = 'online';
    src = channel.logo;
    link = channel.url;
    alt = channel.name;
    title = channel.display_name;
    description = `${channel.game}: ${channel.status}`;
  }

  src = data.stream ? channel.logo :
    'https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x7F';

  items.push({
    link,
    src,
    alt,
    title,
    description,
  });
}

export default {
  name: 'item',
  data: () => {
    channels.forEach((channel) => {
      getStream(channel).done((data) => {
        parseDate(data);
      });
    });
    return {
      items,
    };
  },
};
