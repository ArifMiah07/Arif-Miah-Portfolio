interface ISong {
    duration: string;
    title: string;
    artist: string;
    album: string;
    src: string;
    url: string;
}

const songsList : ISong[] = [
  {
    duration: "2:05",
    title: "aquatic ambience",
    artist: "scizzie",
    album: "dreamscape",
    src: "/audios/aquatic_ambience.mp3",
    url: "https://www.youtube.com/results?search_query=scizzie+aquatic+ambience"
  },
  {
    duration: "5:59",
    title: "losing",
    artist: "lonnex",
    album: "dreamscape",
    src: "/audios/losing.mp3",
    url: "https://www.youtube.com/results?search_query=lonnex+losing"
  },
  {
    duration: "1:58",
    title: "apathy",
    artist: "øneheart",
    album: "dreamscape",
    src: "/audios/apathy.mp3",
    url: "https://www.youtube.com/results?search_query=øneheart+apathy"
  },
  {
    duration: "3:20",
    title: "drifting",
    artist: "blut own",
    album: "dreamscape",
    src: "/audios/drifting.mp3",
    url: "https://www.youtube.com/results?search_query=blut+own+drifting"
  },
  {
    duration: "2:18",
    title: "we will never be the same",
    artist: "antent",
    album: "Antent",
    src: "/audios/we_will_never_be_the_same.mp3",
    url: "https://www.youtube.com/results?search_query=antent+we+will+never+be+the+same"
  },
  {
    duration: "3:05",
    title: "Comfort Chain",
    artist: "Instupendo",
    album: "Instupendo",
    src: "/audios/comfort_chain.mp3",
    url: "https://www.youtube.com/results?search_query=Instupendo+Comfort+Chain"
  },
  {
    duration: "5:45",
    title: "Echo In The Wind (Slowed + Rain)",
    artist: "Aaron Cherof",
    album: "ZeeKayBee",
    src: "/audios/echo_in_the_wind_slowed_rain.mp3",
    url: "https://www.youtube.com/results?search_query=Aaron+Cherof+Echo+In+The+Wind+(Slowed++Rain)"
  },
  {
    duration: "2:41",
    title: "do it all over again",
    artist: "mrnotyet",
    album: "dreamscape",
    src: "/audios/do_it_all_over_again.mp3",
    url: "https://www.youtube.com/results?search_query=mrnotyet+do+it+all+over+again"
  },
  {
    duration: "2:31",
    title: "snowfall (slowed)",
    artist: "øneheart x reidenshi",
    album: "dreamscape",
    src: "/audios/snowfall_slowed.mp3",
    url: "https://www.youtube.com/results?search_query=øneheart+x+reidenshi+snowfall+(slowed)"
  },
  {
    duration: "2:01",
    title: "vertigo (slowed)",
    artist: "insensible, énouement",
    album: "dreamscape",
    src: "/audios/vertigo_slowed.mp3",
    url: "https://www.youtube.com/results?search_query=insensible+énouement+vertigo+(slowed)"
  },
  {
    duration: "2:36",
    title: "nostalgia (slowed)",
    artist: "Azure - Topic",
    album: "dreamscape",
    src: "/audios/nostalgia_slowed.mp3",
    url: "https://www.youtube.com/results?search_query=Azure+-+Topic+nostalgia+(slowed)"
  },
  {
    duration: "2:08",
    title: "weakness",
    artist: "antent",
    album: "Antent",
    src: "/audios/weakness.mp3",
    url: "https://www.youtube.com/results?search_query=antent+weakness"
  },
  {
    duration: "2:03",
    title: "arctic dream",
    artist: "Ødyzon",
    album: "dreamscape",
    src: "/audios/arctic_dream.mp3",
    url: "https://www.youtube.com/results?search_query=Ødyzon+arctic+dream"
  },
  {
    duration: "2:28",
    title: "hope to see you again",
    artist: "antent",
    album: "dreamscape",
    src: "/audios/hope_to_see_you_again.mp3",
    url: "https://www.youtube.com/results?search_query=antent+hope+to+see+you+again"
  },
  {
    duration: "2:10",
    title: "you not the same",
    artist: "tilekid",
    album: "dreamscape",
    src: "/audios/you_not_the_same.mp3",
    url: "https://www.youtube.com/results?search_query=tilekid+you+not+the+same"
  },
  {
    duration: "2:05",
    title: "nostalgia",
    artist: "øneheart",
    album: "dreamscape",
    src: "/audios/nostalgia.mp3",
    url: "https://www.youtube.com/results?search_query=øneheart+nostalgia"
  },
  {
    duration: "2:43",
    title: "memory reboot (ambient remix)",
    artist: "vøj, narvent, .diedlonely",
    album: "dreamscape",
    src: "/audios/memory_reboot_ambient_remix.mp3",
    url: "https://www.youtube.com/results?search_query=vøj+narvent+.diedlonely+memory+reboot+(ambient+remix)"
  },
  {
    duration: "3:50",
    title: "snowfield",
    artist: "hozuki",
    album: "dreamscape",
    src: "/audios/snowfield.mp3",
    url: "https://www.youtube.com/results?search_query=hozuki+snowfield"
  },
  {
    duration: "2:23",
    title: "just close your eyes (slowed)",
    artist: "Azure - Topic",
    album: "dreamscape",
    src: "/audios/just_close_your_eyes_slowed.mp3",
    url: "https://www.youtube.com/results?search_query=Azure+-+Topic+just+close+your+eyes+(slowed)"
  },
  {
    duration: "2:27",
    title: "the same place",
    artist: "antent",
    album: "dreamscape",
    src: "/audios/the_same_place.mp3",
    url: "https://www.youtube.com/results?search_query=antent+the+same+place"
  },
  {
    duration: "2:01",
    title: "numb (slowed + reverb)",
    artist: "my head is empty",
    album: "dreamscape",
    src: "/audios/numb_slowed_reverb.mp3",
    url: "https://www.youtube.com/results?search_query=my+head+is+empty+numb+(slowed++reverb)"
  },
  {
    duration: "2:39",
    title: "moments",
    artist: "leadwave",
    album: "dreamscape",
    src: "/audios/moments.mp3",
    url: "https://www.youtube.com/results?search_query=leadwave+moments"
  },
  {
    duration: "2:09",
    title: "your eyes",
    artist: "antent",
    album: "dreamscape",
    src: "/audios/your_eyes.mp3",
    url: "https://www.youtube.com/results?search_query=antent+your+eyes"
  },
  {
    duration: "3:05",
    title: "desolation",
    artist: "reapify",
    album: "dreamscape",
    src: "/audios/desolation.mp3",
    url: "https://www.youtube.com/results?search_query=reapify+desolation"
  },
  {
    duration: "2:36",
    title: "i'll be your reason (slowed + reverb)",
    artist: "antent",
    album: "dreamscape",
    src: "/audios/ill_be_your_reason_slowed_reverb.mp3",
    url: "https://www.youtube.com/results?search_query=antent+ill+be+your+reason+(slowed++reverb)"
  },
  {
    duration: "2:29",
    title: "never see you again",
    artist: "antent",
    album: "dreamscape",
    src: "/audios/never_see_you_again.mp3",
    url: "https://www.youtube.com/results?search_query=antent+never+see+you+again"
  },
  {
    duration: "2:12",
    title: "one wish",
    artist: "unnholy",
    album: "dreamscape",
    src: "/audios/one_wish.mp3",
    url: "https://www.youtube.com/results?search_query=unnholy+one+wish"
  },
  {
    duration: "2:27",
    title: "sleepless",
    artist: "ødyzon",
    album: "dreamscape",
    src: "/audios/sleepless.mp3",
    url: "https://www.youtube.com/results?search_query=ødyzon+sleepless"
  },
  {
    duration: "2:06",
    title: "saudade",
    artist: "futureville",
    album: "dreamscape",
    src: "/audios/saudade.mp3",
    url: "https://www.youtube.com/results?search_query=futureville+saudade"
  },
  {
    duration: "2:09",
    title: "Farewell",
    artist: "Antent & Nectry",
    album: "Antent",
    src: "/audios/farewell.mp3",
    url: "https://www.youtube.com/results?search_query=Antent++Nectry+Farewell"
  },
  {
    duration: "2:10",
    title: "childhood",
    artist: "daniel.mp3 - Topic",
    album: "dreamscape",
    src: "/audios/childhood.mp3",
    url: "https://www.youtube.com/results?search_query=daniel.mp3+-+Topic+childhood"
  },
  {
    duration: "1:42",
    title: "nostalgia '95",
    artist: "unnholy",
    album: "dreamscape",
    src: "/audios/nostalgia_95.mp3",
    url: "https://www.youtube.com/results?search_query=unnholy+nostalgia+95"
  },
  {
    duration: "4:23",
    title: "you not the same (deep version)",
    artist: "tilekid",
    album: "dreamscape",
    src: "/audios/you_not_the_same_deep_version.mp3",
    url: "https://www.youtube.com/results?search_query=tilekid+you+not+the+same+(deep+version)"
  },
  {
    duration: "1:55",
    title: "this feeling (slowed + reverb)",
    artist: "øneheart",
    album: "dreamscape",
    src: "/audios/this_feeling_slowed_reverb.mp3",
    url: "https://www.youtube.com/results?search_query=øneheart+this+feeling+(slowed++reverb)"
  }
];
export default songsList;