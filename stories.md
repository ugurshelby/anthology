import { Story } from '../types';

// OPTIMIZATION NOTE:
// Added '?q=80&w=1600&auto=format&fit=crop' to all Unsplash URLs.
// This forces WebP format, reduces quality slightly for speed, and limits width to 1600px.

export const mockStories: Story[] = [
  // 1. THE SENNA LEGEND
  {
    id: 'senna-monaco',
    title: 'The Divine Lap',
    subtitle: 'Ayrton Senna’s transcendental qualification lap at Monaco, 1988. A moment where man and machine became one, before the crash that brought him back to earth.',
    year: '1988',
    category: 'Legend',
    // Abstract Speed/Blur - Yellow tones
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/1988%20McLaren-Honda%20MP4%204%20Goodwood,%202009.JPG', 
    content: [
      { type: 'paragraph', text: 'Monaco is not a race track; it is a cage. To drive fast here is to dance with a knife. In 1988, Ayrton Senna did not just drive; he entered a state of consciousness that few athletes ever reach. The car was an extension of his nervous system.' },
      { type: 'quote', text: 'I was no longer driving the car consciously. I was driving it by a kind of instinct, only I was in a different dimension.', author: 'Ayrton Senna' },
      { type: 'paragraph', text: 'He was two seconds faster than his teammate, Alain Prost. In Formula 1, two seconds is not a gap; it is a lifetime. It is the difference between talent and divinity.' },
      // Close up of a vintage wheel/cockpit
      { type: 'image', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ayrton%20Senna%201988%20Canada.jpg', caption: 'MP4/4, Senna 1988.', layout: 'full' },
      { type: 'heading', text: 'The Crash' },
      { type: 'paragraph', text: 'And then, silence. At Portier, just before the tunnel, the concentration broke. The McLaren hit the barrier. Senna did not return to the pits. He walked straight to his apartment in Monaco and disappeared for hours. Perfection is fragile.' }
    ]
  },

  // 2. HUNT VS LAUDA
  {
    id: 'hunt-lauda',
    title: 'Fire & Ice',
    subtitle: 'The 1976 season was not just a championship battle; it was a philosophical war between James Hunt and Niki Lauda.',
    year: '1976',
    category: 'Rivalry',
    // Vintage grain, dark atmosphere
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/James%20Hunt%20-%20Dutch%20GP%201976.jpg',
    content: [
      { type: 'heading', text: 'Blueprints and Cigarettes' },
      { type: 'paragraph', text: 'Lauda calculated risk with a pencil; Hunt calculated pleasure with a cigarette. In 1976, the paddock felt like a courtroom. The cars were loud, but the verdicts were louder.' },
      { type: 'image', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/James%20Hunt%20-%20Dutch%20GP%201976.jpg', caption: 'Hunt in the rain, Zandvoort.', layout: 'landscape' },
      { type: 'paragraph', text: 'On Sunday mornings, Hunt wore chaos like a suit. Lauda wore discipline. Their laps were the same sentence written in two handwritings.' },
      { type: 'heading', text: 'The Ring' },
      { type: 'paragraph', text: 'At the Nürburgring, the track bit back. Steel met fire. Lauda\'s return six weeks later was not heroic in the Hollywood sense—it was a negotiation with pain, a handshake with mortality.' },
      { type: 'image', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Niki%20Lauda%20-%20Ferrari%20312T2%20heads%20towards%20the%20swimming%20pool%20complex%20at%20the%201977%20Monaco%20GP.jpg', caption: 'Lauda Ferrari 312T2.', layout: 'portrait' },
      { type: 'heading', text: 'Championship as Philosophy' },
      { type: 'paragraph', text: 'The title did not crown the faster man; it crowned the framework. Hunt won the points. Lauda won the argument that bravery is not stupidity. The season wrote itself into F1\'s bones.' }
    ]
  },

  // 3. MASSA 2008
  {
    id: 'massa-2008',
    title: 'The 39-Second Champion',
    subtitle: 'Interlagos, 2008. Felipe Massa crossed the line as the World Champion. Thirty-nine seconds later, history was rewritten in the final corner.',
    year: '2008',
    category: 'Tragedy',
    // Rain, Lights, Blur
    heroImage: 'https://images.unsplash.com/photo-1619563935866-429cb468c892?q=80&w=1600&auto=format&fit=crop',
    content: [
      { type: 'heading', text: 'Interlagos Weather Front' },
      { type: 'paragraph', text: 'São Paulo hung heavy with rain. The grandstands shook when the engines fired—wet air carrying petrol and electricity. Ferrari red glowed against the slate sky. Men in ponchos banged the hoardings. Mothers covered children\'s ears. The circuit was a lung breathing water.' },
      { type: 'image', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Massa%20Brazil%202008.jpg', caption: 'Interlagos grid in the rain.', layout: 'landscape' },
      { type: 'paragraph', text: 'Felipe Massa launched clean. Visibility was a rumor, grip a superstition. Through the Senna S, he felt the car bite and release, a heartbeat rhythm under his hands. Each lap cut a groove into the storm.' },
      { type: 'heading', text: 'The Switch' },
      { type: 'paragraph', text: 'On worn slicks, Timo Glock became a question mark. Hamilton, visor speckled with rain, was not chasing a driver—he was chasing a destiny that kept slipping two car lengths ahead. The penultimate corners turned into a courtroom.' },
      { type: 'image', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Raikkonen%20Brazil%202008.jpg', caption: 'Ferrari cutting through spray.', layout: 'portrait' },
      { type: 'quote', text: 'Is that Glock? Is that Glock going slowly?', author: 'Martin Brundle' },
      { type: 'paragraph', text: 'Massa crossed the line a champion. Thirty-nine seconds later, Hamilton slipped past Glock at the last turn. The garage stopped breathing. The noise collapsed into a single syllable of disbelief.' },
      { type: 'heading', text: 'Dignity' },
      { type: 'paragraph', text: 'On the podium, rain streaked his face like film grain. He beat his chest once, not in anger but in affirmation. The crowd did not chant points; they chanted a name. History measured him not by the trophy but by the manner in which he carried defeat.' },
      { type: 'image', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Massa%20Brazil%202008%20Podium.jpg', caption: 'Massa on the podium, rain and light.', layout: 'full' }
    ]
  },

  // 4. SCHUMACHER ERA
  {
    id: 'schumacher-ferrari',
    title: 'The Red Baron',
    subtitle: 'How Michael Schumacher rebuilt the church of Ferrari and turned it into an empire of efficiency.',
    year: '2000',
    category: 'Dynasty',
    // Red Car, Speed
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/F1%20Ferrari%20Chantilly%20Arts%20et%20Elegance%20Richard%20Mille%202016.jpg',
    content: [
      { type: 'paragraph', text: 'Before 2000, Ferrari was a chaotic legend. After Schumacher, it was a machine. The emotion of Italy met the precision of Germany.' },
      { type: 'quote', text: 'I’ve always believed that you should never, ever give up and you should always keep fighting even when there’s only the slightest chance.', author: 'Michael Schumacher' },
      // Crowd / Tifosi vibe
      { type: 'image', src: 'https://images.unsplash.com/photo-1532525204946-15b960c08c9a?q=80&w=1200&auto=format&fit=crop', caption: 'The Tifosi at Monza.', layout: 'full' }
    ]
  },

  // 5. SPA 2000
  {
    id: 'hakkinen-schumacher',
    title: 'The Zonta Overtake',
    subtitle: 'Spa-Francorchamps. 200mph. A backmarker in the middle. Two of the greatest drivers in history made a choice.',
    year: '2000',
    category: 'Combat',
    // Eau Rouge / Track vibe
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mika%20H%C3%A4kkinen%202000%20United%20States%20Grand%20Prix.jpg',
    content: [
      { type: 'paragraph', text: 'The Kemmel Straight is fast. Terrifyingly fast. Mika Häkkinen had been stalking Michael Schumacher for laps. Approaching Ricardo Zonta, a lapped car, they arrived at over 300 km/h.' },
      { type: 'heading', text: 'The Split' },
      { type: 'paragraph', text: 'Schumacher went left. Häkkinen went right. Poor Zonta was the meat in a high-speed sandwich. It remains the definitive overtaking maneuver of the modern era.' }
    ]
  },

  // 6. HAMILTON 2021
  {
    id: 'hamilton-silverstone',
    title: 'Copse Corner',
    subtitle: 'Lewis Hamilton vs Max Verstappen. A rivalry reaching its boiling point at 180mph on British soil.',
    year: '2021',
    category: 'Modern Era',
    // Carbon fiber, modern tech
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lewis%20Hamilton%20on%20his%20victory%20lap%20(14634946913).jpg',
    content: [
      { type: 'paragraph', text: 'The collision heard around the world. It wasn\'t just an accident; it was inevitable. Two immovable objects colliding at high velocity.' },
      { type: 'quote', text: 'This is not tennis. This is life and death.', author: 'Toto Wolff' }
    ]
  },

  // 7. CANADA 2011
  {
    id: 'button-canada',
    title: 'The Longest Race',
    subtitle: 'Last place. Punctures. Collisions. Rain delays. And yet, Jenson Button refused to lose.',
    year: '2011',
    category: 'Miracle',
    // Heavy Rain / Wet Asphalt
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/2011%20Canadian%20GP%20-%20Winner.jpg',
    content: [
      { type: 'paragraph', text: 'The 2011 Canadian Grand Prix took over four hours. It rained so hard the track became a river. Jenson Button crashed with his teammate, got a puncture, and dropped to dead last.' },
      { type: 'heading', text: 'The Hunt' },
      { type: 'paragraph', text: 'On the final lap, Sebastian Vettel cracked under pressure. Button slid past. From last to first. The impossible became reality.' }
    ]
  },

  // 8. FANGIO 1957
  {
    id: 'fangio-nurburgring',
    title: 'The Green Hell',
    subtitle: 'Juan Manuel Fangio was 46 years old. He was racing against boys. He taught them a lesson they would never forget.',
    year: '1957',
    category: 'Myth',
    // Black and White / Vintage
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maserati%20250F%20(Juan%20Fangio).jpg',
    content: [
      { type: 'heading', text: 'The Pit Gamble' },
      { type: 'paragraph', text: 'The Nürburgring was a cathedral of trees and fear. When the pit stop went wrong, Fangio returned to the track with the sort of silence only great men carry. The car spoke through vibration rather than sound.' },
      { type: 'image', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maserati%20250F%20at%20Goodwood%202010.jpg', caption: 'Maserati 250F lines and muscle.', layout: 'landscape' },
      { type: 'paragraph', text: 'The 250F danced on the edge of the tires. He carved the forest with nine straight lap records, not a fury but a precision—each apex a signature, each exit a threat.' },
      { type: 'heading', text: 'The Chase' },
      { type: 'paragraph', text: 'Hawthorn and Collins were boys sprinting ahead of a storm. Fangio was the weather. In the Karussell, he laid the car on its side, chalk dust and rubber stinging his throat. The crowd felt the air pressure change.' },
      { type: 'image', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maserati%20250F%20(Juan%20Fangio).jpg', caption: 'Fangio and the 250F.', layout: 'portrait' },
      { type: 'quote', text: 'I have never driven that fast before in my life and I don’t think I will ever be able to do it again.', author: 'Juan Manuel Fangio' },
      { type: 'heading', text: 'The Echo' },
      { type: 'paragraph', text: 'When he made the pass, the forest did not explode; it exhaled. Decades later, drivers still speak of the lap as if it were a myth told by campfire. It was not bravado. It was geometry with blood in it.' }
    ]
  }
];
