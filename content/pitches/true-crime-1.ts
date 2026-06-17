import type { Pitch } from './types'

// PLACEHOLDER CONTENT — Craig will replace copy, media, and stats with the real pitch.
const trueCrime1: Pitch = {
  slug: 'true-crime-1',
  title: 'Untitled True Crime Podcast',
  subtitle: 'A limited-series true crime podcast',
  logline:
    'What happens when love, addiction, and denial blind you to the truth —\nand the truth is\nfive women are dead…',
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
            "One woman's harrowing journey —\nthrough denial, realization, and grief —\nas she confronts the possibility that\nthe man she loved is a serial killer,\nand that she may have been\ncloser to it than she ever let herself know.",
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
            'Kristin Smith. Joanna Speaks. Charity Lynn Perry. Bridget Leanne Webster. Ashley Real.',
        },
        {
          type: 'accent',
          content: 'Close in age. Alike in look. The same type.',
        },
        {
          type: 'paragraph',
          content:
            'One after another, they disappeared — and one after another, they were found murdered.',
        },
        {
          type: 'paragraph',
          content:
            'During those same months, another woman was watching the man she loved and fearing the ordinary thing: that he was cheating. She started looking. What she found was not an affair.',
        },
        {
          type: 'paragraph',
          content: 'It was the names.',
        },
        {
          type: 'accent',
          content: 'The vanished women had one thing in common',
        },
        {
          type: 'paragraph',
          content:
            'They led back to the man she lived with. The man who shared her bed, her life, and the raising of her children.',
        },
        {
          type: 'paragraph',
          content:
            "This is her story, told from inside it — recorded across three years, beginning the day Jesse Lee Calhoun was arrested. It is the story of a woman moving through denial, realization, and grief, circling the question she still can't fully answer:",
        },
        {
          type: 'accent',
          content: 'how much did she not see —\nand how much did she choose not to?',
        },
        {
          type: 'paragraph',
          content:
            'Five women are dead. Calhoun stands indicted for all five murders. And the woman who loved him is left to live with what she knew, when she knew it, and what it cost her not to ask.',
        },
      ],
    },
    {
      id: 'victims',
      number: '03',
      title: 'Victims',
      blocks: [
        {
          type: 'victims',
          victims: [
            {
              name: 'Kristin Smith',
              age: 22,
              found: 'February 19, 2023',
              photo: '/pitch/true-crime-1/victim-kristin-smith.jpg',
              bio: 'Kristin was creative and playful, forever keeping her mom and sister on their toes with new wigs and reinvented looks. She loved animals — grew up riding horses with her grandparents and last worked at an animal hospital — and she dreamed of launching her own press-on nail business built around her bold, artistic designs. That future was cut short after she got involved with a boyfriend who introduced her to fentanyl, abused her, and isolated her from her family.',
            },
            {
              name: 'Joanna Speaks',
              age: 32,
              found: 'April 8, 2023',
              photo: '/pitch/true-crime-1/victim-joanna-speaks.jpg',
              bio: "Joanna was vivid company — quick-laughing, sharp-tongued, never shy with an opinion. When fentanyl swept through Portland, addiction pulled her under and her life came apart; she served three years in prison for her part in a robbery. After her release she found a stretch of sobriety, but a new boyfriend drew her back into using. Her sister Ariel took in Joanna's two sons, and Joanna gradually went quiet. The family learned of her death in April 2023.",
            },
            {
              name: 'Charity Perry',
              age: 24,
              found: 'April 24, 2023',
              photo: '/pitch/true-crime-1/victim-charity-perry.jpg',
              bio: 'Charity was generous and driven from childhood, the kind of kid who ran fundraisers for hurricane victims and gathered dog food for the Humane Society. She had a sweet tooth — cotton candy above all — and when she died, her mother, Diana, made certain it was there at her memorial. Her life was also marked by hardship: signs of mental illness surfaced when she was just seven, and she was later diagnosed with schizophrenia. In time she ended up living on the street, where drugs became a way to self-medicate.',
            },
            {
              name: 'Bridget Webster',
              age: 31,
              found: 'April 30, 2023',
              photo: '/pitch/true-crime-1/victim-bridget-webster.jpg',
              bio: 'Bridget is remembered for loyalty and a smile that caught on with everyone around her. A standout student and a genuinely kind person, she was the friend who turned up exactly when things fell apart, steady when steadiness was what you needed most. Those who knew her say her warmth and dependability still set the example they measure themselves against.',
            },
            {
              name: 'Ashley Real',
              age: 22,
              found: 'May 7, 2023',
              photo: '/pitch/true-crime-1/victim-ashley-real.jpg',
              bio: "Ashley was adventurous and refreshingly direct — black hair, a nose piercing, and no hesitation about saying what she thought. That boldness stuck with the people she met. She'd been a strong student before falling in with the wrong crowd. In the period before her death, she had filed a domestic violence complaint against the man who would later become the prime suspect in the murders.",
            },
          ],
        },
      ],
    },
    {
      id: 'why-now',
      number: '04',
      title: 'Why Now',
      blocks: [
        {
          type: 'paragraph',
          content: "This isn't a cold case waiting to be revived.",
        },
        {
          type: 'accent',
          content: "It's a live story building toward its peak.",
        },
        {
          type: 'paragraph',
          content:
            'The case has reached the national press in escalating waves — and the headlines themselves tell the story of a body count that keeps climbing:',
        },
        {
          type: 'list',
          items: [
            'The New York Times — Oregon Man Accused of Killing 3 Women Is Now Charged With Murdering a Fourth',
            'NBC News — Oregon man accused of killing 3 women and dumping bodies is indicted on fourth murder charge',
            'People — Suspected Serial Killer Already Accused of Murdering 4 Women Is Charged with a Fifth Death',
            'The Associated Press — Man accused of killing women in Portland area arraigned on a 5th second-degree murder charge',
            'USA Today — Murder charges stack up against accused serial killer',
            'NewsNation — Suspected serial killer Jesse Lee Calhoun tied to 5th victim',
            'CBS News — Deaths of 4 women found in Oregon linked and person of interest identified, authorities say',
            "Fox News — Portland murder suspect hit with fourth homicide charge as victims' families demand justice",
          ],
        },
        {
          type: 'accent',
          content: 'Three victims became four. Four became five.',
        },
        {
          type: 'paragraph',
          content:
            'Investigators have signaled the count may not be final. Each indictment has pulled the story back into the national conversation — bigger every time.',
        },
        {
          type: 'paragraph',
          content:
            'And the trajectory runs straight toward a 2027 trial: a built-in news engine that will return this case to the front page on a schedule, with the audience larger at every turn.',
        },
        {
          type: 'paragraph',
          content:
            'Every one of these outlets covered the case — the charges, the courtroom, the victims. Not one of them has the story behind the story, and not one of them can get it.',
        },
        {
          type: 'accent',
          content:
            'No one else was inside the home, inside the relationship, recording in real time as the woman who loved Jesse Lee Calhoun moved from denial to realization to grief.',
        },
        {
          type: 'paragraph',
          content:
            'That is the exclusive. And it arrives in the one window when national attention is guaranteed to be at its highest — the run-up to trial.',
        },
        {
          type: 'pullquote',
          content:
            'Release into the 2027 proceedings, and the show rides a news cycle it never has to manufacture.',
        },
      ],
    },
    {
      id: 'listen',
      number: '05',
      title: 'Listen',
      blocks: [
        {
          type: 'audio',
          src: '/pitch/true-crime-1/audio/voices.m4a',
          title: 'Voices',
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
      number: '06',
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
      number: '07',
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
      number: '08',
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
      number: '09',
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
      number: '10',
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
      number: '11',
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
