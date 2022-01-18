import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    memes: 'thiccmemes testing app state',
    token: '',
    loggedIn: false,
    username: '',
    accountList: [
      "faceit.com/en",
      "whatsapp.com",
      "snapchat.com",
      "etsy.com",
      "okcupid.com",
      "kickstarter.com",
      "app.codesignal.com",
      "wattpad.com",
      "ifunny.co",
      "imgur.com",
      "livejournal.com",
      "skyrock.com",
      "sarahah.com",
      "tumblr.com",
      "gog.com",
      "9gag.com",
      "reddit.com",
      "tradingview.com",
      "instagram.com",
      "facebook.com",
      "twitter.com",
      "vsco.co",
      "kik.me",
      "vk.com",
      "telegram.me",
      "myspace.com",
      "gab.ai",
      "ask.fm",
      "pscp.tv",
      "mix.com",
      "psnprofiles.com",
      "pinterest.com",
      "funnyordie.com",
      "github.com",
      "genius.com",
      "medium.com/@",
      "tinder.com/@",
      "deviantart.com",
      "fotolog.com",
      "youtube.com",
      "steamcommunity.com"
    ],
    logoList: {
      "faceit.com": 'https://corporate.faceit.com/wp-content/uploads/icon-pheasant-preview-2.png',
      // https://whatsappbrand.com/wp-content/themes/whatsapp-brc/images/WhatsApp_Logo_2.pn
      "whatsapp.com": '/img/whatsapp.png',
      "snapchat.com": '/img/snapchat.png',
      "etsy.com": 'https://pbs.twimg.com/profile_images/613742962095341568/VGmQvBw8.png',
      // https://www.etsy.com/images/mobile-landing/icon-etsy-app@2x.png
      "okcupid.com": 'https://cdn.okccdn.com/media/img/hub/mediakit/okcupid_app_icon_circle.png',
      "kickstarter.com": 'https://d3mlfyygrfdi2i.cloudfront.net/kickstarter-logo-k-color.png',
      "app.codesignal.com": 'https://pbs.twimg.com/profile_images/877076407104356352/xPDfUHI1.jpg',
      "wattpad.com": 'https://pbs.twimg.com/profile_images/1093161784448638976/79DlMMEw_400x400.jpg',
      "ifunny.co": 'https://i.kym-cdn.com/entries/icons/facebook/000/013/747/logo_ifunny.jpg',
      "imgur.com": '/img/imgur.png',
      "livejournal.com": 'http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Livejournal-icon.png',
      "skyrock.com": 'https://cdn1.iconfinder.com/data/icons/essentials-thick-lines/128/block-disable-unavailable-512.png',
      "sarahah.com":'https://www.sarahah.com/img/Sarahahrich.png',
      "tumblr.com": '/img/tumblr.png',
      "gog.com": 'https://timedotcom.files.wordpress.com/2014/08/gog-logo.jpg?quality=85',
      "9gag.com": 'https://images-cdn.9gag.com/photo/azL60YN_460swp.webp',
      "reddit.com": '/img/reddit.png',
      "tradingview.com": 'https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/nlt0pllhpf3dpeqmeqcr',
      "instagram.com": '/img/instagram.png',
      "facebook.com": '/img/facebook.png',
      "twitter.com": '/img/twitter.png',
      "vsco.co": '/img/vsco.png',
      "kik.me": 'https://cdn.imgbin.com/4/7/2/imgbin-social-media-kik-messenger-logo-computer-icons-social-media-WMTZn23ATix4yKHud6Y1RmtQn.jpg',
      "vk.com": 'https://vk.cc/9pGGpm',
      "telegram.me": 'https://www.seoclerk.com/pics/598668-1nU4nm1524050327.png',
      "myspace.com": 'https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2010/08/myspace.logo_.png',
      "gab.ai": 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Gab_Logo.svg/1280px-Gab_Logo.svg.png',
      "ask.fm": '/img/ask.fm.png',
      "pscp.tv": 'https://www.periscope.tv/v/images/press_assets/largeicon.png',
      "mix.com": 'https://pbs.twimg.com/profile_images/881639508378136576/N4u254KE_400x400.jpg',
      "psnprofiles.com": 'https://pbs.twimg.com/profile_images/676408953287278593/DmVW8OUU.png',
      "pinterest.com": 'https://business.pinterest.com/sites/default/files/flex_img/2019-02/1-brand-guidelines-01-logo_0.jpg',
      "funnyordie.com": 'https://cdn.vox-cdn.com/uploads/chorus_image/image/61034031/FOD_Placeholder.52.180.0.jpg',
      "github.com": 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      "genius.com": 'https://images.genius.com/69333b682fca131dfc5cc94d072ab2f9.750x750x1.png',
      "medium.com": 'https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png',
      "tinder.com": 'https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png',
      "deviantart.com": 'http://logok.org/wp-content/uploads/2014/12/DeviantArt-logo-880x654.png',
      // "fotolog.com": '',
      "youtube.com": '/img/youtube.png',
      "steam.com": '/img/steam.png'
    },
    supportedAccounts: [
      'Reddit',
      'Facebook',
      'Tumblr',
      'Youtube',
      'Steam'
    ],
    interestTagItems: [
      '3D printing',
      'Acting',
      'Art',
      'Astrology',
      'Astronomy',
      'Automobiles',
      'Business',
      'Community',
      'Computer programming',
      'Cooking',
      'Couponing',
      'DIY',
      'Dance',
      'Drawing',
      'Electronics',
      'Fashion',
      'Film',
      'Fitness And Exercise',
      'Gaming',
      'Gardening',
      'Graphic Design',
      'Hiking',
      'History',
      'Magic',
      'Mathematics',
      'Music',
      'Painting',
      'Pets',
      'Philosophy',
      'Photography',
      'Playing musical instruments',
      'Politics',
      'Programming',
      'Reading',
      'Role-play',
      'Science',
      'Singing',
      'Sports',
      'Stand-up comedy',
      'Vacation',
      'Writing',
      'All'
    ],
    categories: [
      {
          name: 'Popular', icon: 'emoji_people',
          accounts: [
              {name: 'Snapchat', logo: '/img/snapchat.png'},
              {name: 'Instagram', logo: '/img/instagram.png'},
              {name: 'Facebook', logo: '/img/facebook.png'},
              {name: 'YouTube', logo: '/img/youtube.png'},
              {name: 'Twitter', logo: '/img/twitter.png'},
              {name: 'LinkedIn', logo: '/img/linkedin.png'},
              {name: 'Whatsapp', logo: '/img/whatsapp.png'},
              {name: 'Amazon Wishlist', logo: '/img/amazon.png'},
              {name: 'Sarahah', logo: '/img/sarahah.png'},
              {name: 'Skype', logo: '/img/skype.png'},
              {name: 'Discord', logo: '/img/discord.png'},
              {name: 'SoundCloud', logo: '/soundcloud.png'},
              {name: 'Reddit', logo: '/reddit.png'},
              {name: 'Vsco', logo: '/vsco.png'}
          ]
      },
      {
          name: 'Communication', icon: 'mood',
          accounts: [
              {name: 'Facebook', logo: '/img/facebook.png'},
              {name: 'Twitter', logo: '/img/twitter.png'},
              {name: 'Instagram', logo: '/img/instagram.png'},
              {name: 'YouTube', logo: '/img/youtube.png'},
              {name: 'LinkedIn', logo: '/img/linkedin.png'},
              {name: 'Discord', logo: '/img/discord.png'},
              {name: 'Sarahah', logo: '/img/sarahah.png'},
              {name: 'Reddit', logo: '/img/reddit.png'},
              {name: 'Kik', logo: '/img/kik.png'},
              {name: 'WhatsApp', logo: '/img/whatsapp.png'},
              {name: 'WeChat', logo: '/img/wechat.png'},
              {name: 'Qzone', logo: '/img/qzone.png'},
              {name: 'Tumblr', logo: '/img/tumblr.png'},
              {name: 'Baidu', logo: '/img/baidu.png'},
              {name: 'Yandex', logo: '/img/yandex.png'},
              {name: 'Viber', logo: '/img/viber.png'},
              {name: 'Snapchat', logo: '/img/snapchat.png'},
              {name: 'VK', logo: '/img/vk.png'},
              {name: 'Telegram', logo: '/img/telegram.png'},
              {name: 'Teamspeak 3 Server', logo: '/img/teamspeak.png'},
              {name: 'MySpace', logo: '/img/myspace.png'},
              {name: 'TradingView', logo: '/img/tradingview.png'},
              {name: 'HouseParty', logo: '/img/houseparty.png'},
              {name: 'Gab', logo: '/img/gab.png'},
              {name: 'Ask.FM', logo: '/img/askfm.png'},
              {name: 'Periscope', logo: '/img/periscope.png'},
              {name: 'Mix', logo: '/img/mix.png'},
              {name: 'Badoo', logo: '/img/badoo.png'},
              {name: 'Cloob', logo: '/img/cloob.png'},
              {name: 'Mastodon', logo: '/img/mastodon.png'},
              {name: 'MeetMe', logo: '/img/meetme.png'},
              {name: 'OK', logo: '/img/ok.png'},
              {name: 'Signal', logo: '/img/signal.png'},
              {name: 'Slack', logo: '/img/slack.png'},
              {name: 'Taringa', logo: '/img/taringa.png'},
              {name: 'Tellonym', logo: '/img/tellonym.png'},
              {name: 'YOLO', logo: '/img/yolo.png'}


          ]
      },
      {
          name: 'Gaming', icon: 'mood',
          accounts: [
              {name: 'FACEIT', logo: '/img/faceit.png'},
              {name: 'PSN', logo: '/img/psn.png'},
              {name: 'Discord', logo: '/img/discord.png'},
              {name: 'Xbox Live', logo: '/img/xboxlive.png'},
              {name: 'Steam', logo: '/img/steam.png'},
              {name: 'Mixer', logo: '/img/mixer.png'},
              {name: 'Origin', logo: '/img/origin.png'},
              {name: 'Uplay', logo: '/img/uplay.png'},
              {name: 'Battle.net', logo: '/img/blizzard.png'},
              {name: 'GoG', logo: '/img/gog.png'},
              {name: 'League Of Legends', logo: '/img/lol.png'},
              {name: 'ROBLOX', logo: '/img/roblox.png'},
              {name: 'Unity', logo: '/img/unity.png'},
              {name: 'Kongregate', logo: '/img/kongregate.png'},
              {name: 'Itch.io', logo: '/img/itchio.png'},
              {name: 'Backpack.TF', logo: '/img/backpacktf.png'},
              {name: 'Trade.TF', logo: '/img/tradetf.png'},
              {name: 'Teamspeak 3 Server', logo: '/img/teamspeak.png'},
              {name: 'NameMC', logo: '/img/namemc.png'},
              {name: 'Newgrounds', logo: '/img/newgrounds.png'},
              {name: 'Pokemon Showdown', logo: '/img/pokemonshowdown.png'},
              {name: 'Star Citizen', logo: '/img/starcitizen.png'},
              {name: 'Twitch', logo: '/img/twitch.png'},
              {name: 'Osu!', logo: '/img/osu.png'}
          ]
      },
      {
          name: 'Utility', icon: 'mood',
          accounts: [
              {name: 'Dropbox', logo: '/img/dropbox.png'},
              {name: 'Pinterest', logo: '/img/pinterest.png'},
              {name: 'Livejournal', logo: '/img/livejournal.png'},
              {name: 'IFTTT', logo: '/img/ifttt.png'},
              {name: 'Keybase', logo: '/img/keybase.png'},
              {name: 'Launchpad', logo: '/img/launchpad.png'},
              {name: 'Leetcode', logo: '/img/leetcode.png'},
              {name: 'Trakt', logo: '/img/trakt.png'},
              {name: 'Trip', logo: '/img/trip.png'},
              {name: 'VirusTotal', logo: '/img/virustotal.png'},
              {name: 'Wikipedia', logo: '/img/wikipedia.png'},
              {name: 'Wordpress', logo: '/img/wordpress.png'}
          ]
      },
      {
          name: 'Entertainment', icon: 'mood',
          accounts: [
              {name: 'Wattpad', logo: '/img/wattpad.png'},
              {name: 'FanFiction', logo: '/img/fanfiction.png'},
              {name: 'Instagram', logo: '/img/instagram.png'},
              {name: 'Twitter', logo: '/img/twitter.png'},
              {name: 'YouTube', logo: '/img/youtube.png'},
              {name: 'iFunny', logo: '/img/ifunny.png'},
              {name: 'Reddit', logo: '/img/reddit.png'},
              {name: 'Tumblr', logo: '/img/tumblr.png'},
              {name: 'Pinterest', logo: '/img/pinterest.png'},
              {name: 'Funny Or Die', logo: '/img/funnyordie.png'},
              {name: '9gag', logo: '/img/9gag.png'},
              {name: 'Periscope', logo: '/img/periscope.png'},
              {name: 'BuzzFeed', logo: '/img/buzzfeed.png'},
              {name: 'Crunchyroll', logo: '/img/crunchyroll.png'},
              {name: 'DailyMotion', logo: '/img/dailymotion.png'}
          ]
      },
      {
          name: 'Dating', icon: 'mood',
          accounts: [
              {name: 'PlentyOFish', logo: '/img/plentyofish.png'},
              {name: 'OKCupid', logo: '/img/okc.png'},
              {name: 'Tinder', logo: '/img/tinder.png'},
              {name: 'Badoo', logo: '/img/badoo.png'}
          ]
      },
      {
          name: 'Community-Based', icon: 'mood',
          accounts: [
              {name: 'Quora', logo: '/img/quora.png'},
              {name: 'Wattpad', logo: '/img/wattpad.png'},
              {name: 'FanFiction', logo: '/img/fanfiction.png'},
              {name: 'iFunny', logo: '/img/ifunny.png'},
              {name: 'Reddit', logo: '/img/reddit.png'},
              {name: 'Pinterest', logo: '/img/pinterest.png'},
              {name: 'Imgur', logo: '/img/imgur.png'},
              {name: 'GitHub', logo: '/img/github.png'},
              {name: 'Gab', logo: '/img/gab.png'},
              {name: 'Genius', logo: '/img/genius.png'},
              {name: 'SoundCloud', logo: '/img/soundcloud.png'},
              {name: 'Skyrock', logo: '/img/skyrock.png'},
              {name: 'Stackoverflow', logo: '/img/stackoverflow.png'},
              {name: 'Mix', logo: '/img/mix.png'},
              {name: 'Badoo', logo: '/img/badoo.png'},
              {name: 'BitBucket', logo: '/img/bitbucket.png'},
              {name: 'BitcoinForum', logo: '/img/bitcoinforum.png'},
              {name: 'Blogger', logo: '/img/blogger.png'},
              {name: 'CodeChef', logo: '/img/codechef.png'},
              {name: 'Codepen', logo: '/img/codepen.png'},
              {name: 'DEV', logo: '/img/dev.png'},
              {name: 'Fandom', logo: '/img/fandom.png'},
              {name: 'Flipboard', logo: '/img/flipboard.png'},
              {name: 'HackerNews', logo: '/img/hackernews.png'},
              {name: 'SlideShare', logo: '/img/slideshare.png'},
              {name: 'Virgool', logo: '/img/virgool.png'},
              {name: 'BoingBoing', logo: '/img/boingboing.png'},
              {name: 'Zhihu', logo: '/img/zhihu.png'}
          ]
      },
      {
          name: 'Crowd-Based', icon: 'mood',
          accounts: [
              {name: 'Kickstarter', logo: '/img/kickstarter.png'},
              {name: 'GoFundMe', logo: '/img/gofundme.png'},
              {name: 'Unbound', logo: '/img/unbound.png'},
              {name: 'Wikipedia', logo: '/img/wikipedia.png'},
              {name: 'Patreon', logo: '/img/patreon.png'},
              {name: 'Fandom', logo: '/img/fandom.png'}
          ]
      },
      {
          name: 'Professional', icon: 'mood',
          accounts: [
              {name: 'Facebook', logo: '/img/facebook.png'},
              {name: 'LinkedIn', logo: '/img/linkedin.png'},
              {name: 'Instagram', logo: '/img/instagram.png'},
              {name: 'Medium', logo: '/img/medium.png'},
              {name: 'Academia.edu', logo: '/img/academia.png'},
              {name: 'AngelList', logo: '/img/angel.png'},
              {name: 'Arc', logo: '/img/arc.png'},
              {name: 'Coroflot', logo: '/img/coroflot.png'},
              {name: 'Foursquare', logo: '/img/foursquare.png'},
              {name: 'Gumroad', logo: '/img/gumroad.png'},
              {name: 'HackerOne', logo: '/img/hackerone.png'},
              {name: 'ProductHunt', logo: '/img/producthunt.png'},
              {name: 'Research Gate', logo: '/img/researchgate.png'}
          ]
      },
      {
          name: 'Pictures, Video', icon: 'mood',
          accounts: [
              {name: 'Instagram', logo: '/img/instagram.png'},
              {name: 'YouTube', logo: '/img/youtube.png'},
              {name: 'Vsco', logo: '/img/vsco.png'},
              {name: 'Snapchat', logo: '/img/snapchat.png'},
              {name: 'Funny Or Die', logo: '/img/funnyordie.png'},
              {name: 'DeviantArt', logo: '/img/deviantart.png'},
              {name: 'Flickr', logo: '/img/flickr.png'},
              {name: 'Imgur', logo: '/img/imgur.png'},
              {name: '9gag', logo: '/img/9gag.png'},
              {name: 'Fotolog', logo: '/img/fotolog.png'},
              {name: '500PX', logo: '/img/500px.png'},
              {name: 'Behance', logo: '/img/behance.png'},
              {name: 'Canva', logo: '/img/canva.png'},
              {name: 'CreativeMarket', logo: '/img/creativemarket.png'},
              {name: 'DailyMotion', logo: '/img/dailymotion.png'},
              {name: 'Designspiration', logo: '/img/designspiration.png'},
              {name: 'Dribbble', logo: '/img/dribbble.png'},
              {name: 'EyeEm', logo: '/img/eyeem.png'},
              {name: 'Giphy', logo: '/img/giphy.png'},
              {name: 'ImageShack', logo: '/img/imageshack.png'},
              {name: 'Pexels', logo: '/img/pexels.png'},
              {name: 'Photobucket', logo: '/img/photobucket.png'},
              {name: 'Pixabay', logo: '/img/pixabay.png'},
              {name: 'Rajce', logo: '/img/rajce.png'},
              {name: 'SmashCast', logo: '/img/smashcast.png'},
              {name: 'Unsplash', logo: '/img/unsplash.png'},
              {name: 'Vimeo', logo: '/img/vimeo.png'},
              {name: 'YouNow', logo: '/img/younow.png'},
              {name: 'YouPic', logo: '/img/youpic.png'},
              {name: 'Gfycat', logo: '/img/gfycat.png'},
              {name: 'iMGSRC', logo: '/img/imgsrc.png'}
          ]
      },
      {
          name: 'Creative', icon: 'mood',
          accounts: [
              {name: 'Wattpad', logo: '/img/wattpad.png'},
              {name: 'FanFiction', logo: '/img/fanfiction.png'},
              {name: 'YouTube', logo: '/img/youtube.png'},
              {name: 'Tumblr', logo: '/img/tumblr.png'},
              {name: 'Pinterest', logo: '/img/pinterest.png'},
              {name: 'Livejournal', logo: '/img/livejournal.png'},
              {name: 'DeviantArt', logo: '/img/deviantart.png'},
              {name: 'Skyrock', logo: '/img/skyrock.png'},
              {name: 'About.me', logo: '/img/aboutme.png'},
              {name: 'Blogger', logo: '/img/blogger.png'},
              {name: 'Carbonmade', logo: '/img/carbonmade.png'},
              {name: 'Codepen', logo: '/img/codepen.png'},
              {name: 'ColourLovers', logo: '/img/colourlovers.png'},
              {name: 'CreativeMarket', logo: '/img/creativemarket.png'},
              {name: 'Designspiration', logo: '/img/designspiration.png'},
              {name: 'Disqus', logo: '/img/disqus.png'},
              {name: 'Dribbble', logo: '/img/dribbble.png'},
              {name: 'Ello', logo: '/img/ello.png'},
              {name: 'Flipboard', logo: '/img/flipboard.png'},
              {name: 'Gravatar', logo: '/img/gravatar.png'},
              {name: 'HubPages', logo: '/img/hubpages.png'},
              {name: 'Instructables', logo: '/img/instructables.png'},
              {name: 'Issuu', logo: '/img/issuu.png'},
              {name: 'We Heart It', logo: '/img/weheartit.png'}
          ]
      },
      {
          name: '1 To 1 Communication', icon: 'mood',
          accounts: [
              {name: 'Discord', logo: '/img/discord.png'},
              {name: 'Kik', logo: '/img/kik.png'},
              {name: 'WeChat', logo: '/img/wechat.png'},
              {name: 'Skype', logo: '/img/skype.png'},
              {name: 'Snapchat', logo: '/img/snapchat.png'},
              {name: 'Telegram', logo: '/img/telegram.png'}
          ]
      },
      {
          name: 'Music', icon: 'mood',
          accounts: [
              {name: 'YouTube', logo: '/img/youtube.png'},
              {name: 'Spotify', logo: '/img/spotify.png'},
              {name: 'Genius', logo: '/img/genius.png'},
              {name: 'SoundCloud', logo: '/img/soundcloud.png'},
              {name: 'Blip.FM', logo: '/img/blipfm.png'},
              {name: 'Bandcamp', logo: '/img/bandcamp.png'},
              {name: 'Discogs', logo: '/img/discogs.png'},
              {name: 'House-mixes', logo: '/img/housemixes.png'},
              {name: 'Mixcloud', logo: '/img/mixcloud.png'},
              {name: 'Plug.DJ', logo: '/img/plugdj.png'},
              {name: 'Rate Your Music', logo: '/img/rateyourmusic.png'},
              {name: 'ReverbNation', logo: '/img/reverbnation.png'},
              {name: 'Last.FM', logo: '/img/lastfm.png'}
          ]
      },
      {
          name: 'Buy/Sell', icon: 'mood',
          accounts: [
              {name: 'Letgo', logo: '/img/letgo.png'},
              {name: 'Etsy', logo: '/img/etsy.png'},
              {name: 'Ebay', logo: '/img/ebay.png'},
              {name: 'Amazon Wishlist', logo: '/img/amazon.png'},
              {name: 'CashApp', logo: '/img/cashapp.png'},
              {name: 'Houzz', logo: '/img/houzz.png'},
              {name: 'PayPal', logo: '/img/paypal.png'},
              {name: 'Venmo', logo: '/img/venmo.png'}
          ]
      },
      {
          name: 'Events', icon: 'mood',
          accounts: [
              {name: 'TripAdvisor', logo: '/img/tripadvisor.png'}
          ]
      },
      {
          name: 'File Sharing', icon: 'mood',
          accounts: [
              {name: 'Dropbox', logo: '/img/dropbox.png'},
              {name: 'GitHub', logo: '/img/github.png'},
              {name: 'Aptoide', logo: '/img/aptoide.png'},
              {name: 'DockerHub', logo: '/img/dockerhub.png'},
              {name: 'Pastebin', logo: '/img/pastebin.png'}
          ]
      },
      {
          name: 'Hobby', icon: 'mood',
          accounts: [
              {name: 'Wattpad', logo: '/img/wattpad.png'},
              {name: 'FanFiction', logo: '/img/fanfiction.png'},
              {name: 'Instagram', logo: '/img/instagram.png'},
              {name: 'YouTube', logo: '/img/youtube.png'},
              {name: 'Pinterest', logo: '/img/pinterest.png'},
              {name: 'Teamspeak 3 Server', logo: '/img/teamspeak.png'},
              {name: 'Livejournal', logo: '/img/livejournal.png'},
              {name: 'Codefights', logo: '/img/codefights.png'},
              {name: 'TradingView', logo: '/img/tradingview.png'},
              {name: 'DeviantArt', logo: '/img/deviantart.png'},
              {name: 'GitHub', logo: '/img/github.png'},
              {name: 'Stackoverflow', logo: '/img/stackoverflow.png'},
              {name: 'BitBucket', logo: '/img/bitbucket.png'},
              {name: 'Carbonmade', logo: '/img/carbonmade.png'},
              {name: 'CodeChef', logo: '/img/codechef.png'},
              {name: 'Codepen', logo: '/img/codepen.png'},
              {name: 'ColourLovers', logo: '/img/colourlovers.png'},
              {name: 'Contently', logo: '/img/contently.png'},
              {name: 'Coroflot', logo: '/img/coroflot.png'},
              {name: 'DEV', logo: '/img/dev.png'},
              {name: 'DockerHub', logo: '/img/dockerhub.png'},
              {name: 'Dribbble', logo: '/img/dribbble.png'},
              {name: 'GitLab', logo: '/img/gitlab.png'},
              {name: 'GoodReads', logo: '/img/goodreads.png'},
              {name: 'Investing.com', logo: '/img/investing.png'},
              {name: 'Jimdo', logo: '/img/jimdo.png'},
              {name: 'Kaggle', logo: '/img/kaggle.png'},
              {name: 'KanoWorld', logo: '/img/kano.png'},
              {name: 'Letterboxd', logo: '/img/letterboxd.png'},
              {name: 'Repl.it', logo: '/img/replit.png'},
              {name: 'Scribd', logo: '/img/scribd.png'},
              {name: 'WebNode', logo: '/img/webnode.png'},
              {name: 'MyAnimeList', logo: '/img/myanimelist.png'},
              {name: 'DevRant', logo: '/img/devrant.png'}
          ]
      },
      {
          name: 'Open Uploading and Sharing', icon: 'mood',
          accounts: [
              {name: 'Dropbox', logo: '/img/dropbox.png'},
              {name: 'Pinterest', logo: '/img/pinterest.png'},
              {name: 'GitHub', logo: '/img/github.png'},
              {name: 'Gab', logo: '/img/gab.png'},
              {name: 'Aptoide', logo: '/img/aptoide.png'},
              {name: 'SourceForge', logo: '/img/sourceforge.png'},
              {name: 'Reddit', logo: '/img/reddit.png'},
          ]
      }
  ]
  },
  mutations: {
    setToken: (state, payload) => {
      state.token = payload
      state.loggedIn = true
    },
    unsetToken: (state) => {
      state.token = ''
      state.loggedIn = false
    },
    setUsername: (state, payload) => {
      state.username = payload
    },

  },
  actions: {}
})

export default store
