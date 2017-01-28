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

function getStream(name) {
  return fetchData({},
    `https://wind-bow.gomix.me/twitch-api/streams/${name}`);
}

function getChannel(name) {
  return fetchData({},
    `https://wind-bow.gomix.me/twitch-api/channels/${name}`);
}

function parseDate(stream, channel) {
  let game;
  let status;
  let description = '';
  let src = '';

  const link = channel.url;
  const alt = channel.name;
  const title = channel.display_name;

  if (stream === null) {
    game = 'Offline';
    status = 'offline';
  } else if (stream === undefined) {
    game = 'Account Closed';
    status = 'offline';
  } else {
    game = stream.game;
    status = 'online';
  }

  if (status === 'online') {
    description = `${game}: ${channel.status}`;
    src = channel.logo;
  } else {
    description = game;
    src = 'https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0xFF';
  }

  items.push({
    status: `twitch-item_${status}`,
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
    channels.forEach((name) => {
      $.when(getStream(name), getChannel(name)).done((stream, channel) => {
        parseDate(stream[0].stream, channel[0]);
      });
    });
    return {
      items,
    };
  },
};
