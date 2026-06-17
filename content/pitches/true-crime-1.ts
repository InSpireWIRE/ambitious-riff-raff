import type { Pitch } from './types'

// PLACEHOLDER CONTENT — Craig will replace copy, media, and stats with the real pitch.
const trueCrime1: Pitch = {
  slug: 'true-crime-1',
  title: 'Untitled True Crime Podcast',
  subtitle: 'A limited-series true crime podcast',
  logline:
    'What happens when love, addiction, and denial blind you to the truth — and the truth is five women are dead?',
  coverImage: '/pitch/true-crime-1/cover.jpg',
  chapters: [
    {
      id: 'logline',
      number: '01',
      title: 'Logline',
      blocks: [
        {
          type: 'pullquote',
          content:
            "[Untitled Podcast] follows one woman's harrowing journey — through denial, realization, and grief — as she confronts the possibility that the man she loved is a serial killer, and that she may have been closer to it than she ever let herself know.",
        },
        {
          type: 'gallery',
          images: [
            {
              src: '/pitch/true-crime-1/Krista%20and%20Jesse%20Lake.jpg',
              alt: 'Krista and Jesse at the beach',
            },
            {
              src: '/pitch/true-crime-1/Krista%20and%20Jesse%20Love.jpg',
              alt: 'Krista and Jesse at home',
            },
            {
              src: '/pitch/true-crime-1/Jesse_Krista_Bed_No_Shirt_.jpg',
              alt: 'Krista and Jesse',
            },
          ],
        },
      ],
    },
    {
      id: 'the-story',
      number: '02',
      title: 'The Story',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Between November 2022 and April 2023, five women vanished.',
        },
        {
          type: 'paragraph',
          content:
            'Kristin Smith. Joanna Speaks. Charity Lynn Perry. Bridget Leanne Webster. Ashley Real. Close in age. Alike in look. The same type. One after another, they disappeared — and one after another, they were found murdered.',
        },
        {
          type: 'paragraph',
          content:
            'During those same months, another woman was watching the man she loved and fearing the ordinary thing: that he was cheating. She started looking. What she found was not an affair.',
        },
        {
          type: 'paragraph',
          content:
            'It was the names. The vanished women had one thing in common — they led back to the man she lived with. The man who shared her bed, her life, and the raising of her children.',
        },
        {
          type: 'paragraph',
          content:
            "This is her story, told from inside it — recorded across three years, beginning the day Jesse Lee Calhoun was arrested. It is the story of a woman moving through denial, realization, and grief, circling the question she still can't fully answer: how much did she not see — and how much did she choose not to?",
        },
        {
          type: 'paragraph',
          content:
            'Five women are dead. Calhoun stands indicted for all five murders. And the woman who loved him is left to live with what she knew, when she knew it, and what it cost her not to ask.',
        },
      ],
    },
    {
      id: 'why-now',
      number: '03',
      title: 'Why Now',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Placeholder. The cultural moment: the news peg, the anniversary, the court date, the reopened file — whatever makes this land in 2026 rather than five years ago or five years from now.',
        },
        {
          type: 'paragraph',
          content:
            'Placeholder. The audience appetite: why this specific story fits where true crime is heading, and the white space it occupies that the current hits do not.',
        },
        { type: 'stat', value: '12M', label: 'True crime listeners in the US' },
        { type: 'stat', value: '73%', label: 'Female audience skew' },
      ],
    },
    {
      id: 'listen',
      number: '04',
      title: 'Listen',
      blocks: [
        {
          type: 'audio',
          src: '/pitch/true-crime-1/audio/sizzle.mp3',
          title: 'Sizzle reel',
          description: 'Placeholder — 90-second proof-of-concept cut.',
        },
        {
          type: 'audio',
          src: '/pitch/true-crime-1/audio/host-sample.mp3',
          title: 'Host voice sample',
          description: 'Placeholder — the host carrying a scene.',
        },
        {
          type: 'audio',
          src: '/pitch/true-crime-1/audio/music-bed.mp3',
          title: 'Music bed',
          description: 'Placeholder — the score and sonic palette.',
        },
        {
          type: 'paragraph',
          content:
            'Placeholder. Describe the sound: the pace, the silence, the texture. How the mix makes a listener feel like they are in the room, and how the music carries the dread without tipping into pastiche.',
        },
      ],
    },
    {
      id: 'format-episodes',
      number: '05',
      title: 'Format & Episodes',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Placeholder. The shape of the series: a six-part limited run, serialized and built to binge, with a structure that withholds and pays off. Note any recurring segments or the spine that holds the arc together.',
        },
        {
          type: 'list',
          items: [
            'Episode 1 — Placeholder title: the night it happened.',
            'Episode 2 — Placeholder title: the first suspect.',
            'Episode 3 — Placeholder title: the detail everyone missed.',
            'Episode 4 — Placeholder title: the witness who changed everything.',
            'Episode 5 — Placeholder title: the system on trial.',
            'Episode 6 — Placeholder title: what we owe the truth.',
          ],
        },
        { type: 'stat', value: '6 × 40 min', label: 'Episodes, weekly drop' },
      ],
    },
    {
      id: 'voice-host',
      number: '06',
      title: 'Voice & Host',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Placeholder. Who the host is and why only they can tell this story — the access they hold, the credibility they bring, the relationship they have to the material.',
        },
        {
          type: 'image',
          src: '/pitch/true-crime-1/host.jpg',
          alt: 'Placeholder — host portrait',
          caption: 'Placeholder — host portrait.',
        },
        {
          type: 'audio',
          src: '/pitch/true-crime-1/audio/host-intro.mp3',
          title: 'Host introduces themselves',
          description: 'Placeholder — the host in their own words.',
        },
        {
          type: 'pullquote',
          content:
            'A one-line host bio that tells a network exactly who is steering this. [Placeholder.]',
          attribution: 'Host name, credential',
        },
      ],
    },
    {
      id: 'access-sources',
      number: '07',
      title: 'Access & Sources',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Placeholder. What is exclusive here — the doors that are open to us and closed to everyone else. Make the moat obvious.',
        },
        {
          type: 'list',
          items: [
            'Lead detective on the original case',
            'Family of the victim',
            'Court documents under seal until 2026',
          ],
        },
      ],
    },
    {
      id: 'comps',
      number: '08',
      title: 'Comps',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Placeholder. The comps that frame the opportunity — the shows a buyer already trusts and the audiences they proved.',
        },
        {
          type: 'gallery',
          images: [
            { src: '/pitch/true-crime-1/comp-1.jpg', alt: 'Placeholder — comp show cover art 1' },
            { src: '/pitch/true-crime-1/comp-2.jpg', alt: 'Placeholder — comp show cover art 2' },
            { src: '/pitch/true-crime-1/comp-3.jpg', alt: 'Placeholder — comp show cover art 3' },
          ],
        },
        {
          type: 'paragraph',
          content:
            'Placeholder. ...but ours is different because — the single sentence that separates this from every comp above.',
        },
      ],
    },
    {
      id: 'team',
      number: '09',
      title: 'Team',
      blocks: [
        {
          type: 'list',
          items: [
            'Executive Producer — Placeholder Name',
            'Showrunner — Placeholder Name',
            'Producer — Placeholder Name',
          ],
        },
        {
          type: 'paragraph',
          content: 'In partnership with [Placeholder partner / production company].',
        },
      ],
    },
    {
      id: 'the-ask',
      number: '10',
      title: 'The Ask',
      blocks: [
        {
          type: 'paragraph',
          content:
            'Placeholder. The ask, stated plainly: development funding / distribution / a talent attachment / a production deal. Say exactly what a yes looks like and what it unlocks.',
        },
        {
          type: 'pullquote',
          content:
            'A closing line that makes them want to be part of it. [Placeholder.]',
        },
      ],
    },
  ],
  footer: {
    contact: 'craig@inspirewire.me',
    representation: 'Representation — Placeholder Agency / Agent',
  },
}

export default trueCrime1
