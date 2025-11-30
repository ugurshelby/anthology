export const baseNameFromUrl = (url: string) => {
  try {
    const u = new URL(url, 'http://local');
    const last = (u.pathname || '').split('/').pop() || '';
    const name = decodeURIComponent(last);
    if (/\.(jpg|jpeg|png|webp)$/i.test(name)) return name;
    return (name || 'image') + '.jpg';
  } catch {
    return 'image.jpg';
  }
};

export const toLocalImage = (url: string) => `/${baseNameFromUrl(url)}`;

export const buildLocalCandidates = (url: string) => {
  const name = baseNameFromUrl(url);
  const m = name.match(/^(.*?)(\.(jpg|jpeg|png|webp))$/i);
  const stem = m ? m[1] : name.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  const ext = m ? m[2] : '.jpg';
  const exts = [ext, '.jpg', '.jpeg', '.png', '.webp'];
  const candidates: string[] = [];
  const add = (n: string, e: string) => candidates.push(`/${n}${e}`);
  const stemUnderscore = stem.replace(/\s+/g, '_');
  exts.forEach((e) => {
    add(stem, e);
    add(stemUnderscore, e);
  });
  return Array.from(new Set(candidates));
};

export const localHeroAliases: Record<string, string[]> = {
  'schumacher-ferrari': [
    'Michael_Schumacher_Ferrari_2004.jpg',
    'Scuderia_Ferrari_F2004.jpg'
  ],
  'dijon-1979': [
    '640px-Dijon-Prenois1.jpg',
    'Ford_GT40_Tour_Auto_2014_Circuit_de_Dijon_Prenois_04.jpg'
  ],
  'imola-1994': [
    'Imola_Circuit,_1998_-_Pit_and_main_straight.jpg',
    'Autodromo_aerea_poster.jpg',
    'AyrtonSennaMemorialAtImola.jpg'
  ],
  'brawn-2009': [
    '640px-Jenson_Button_(Brawn_BGP_001)_on_Sunday_at_2009_Abu_Dhabi_Grand_Prix.jpg'
  ]
};

export const buildHeroCandidates = (url: string, storyId: string) => {
  const base = buildLocalCandidates(url);
  const aliases = (localHeroAliases[storyId] || []).map((n) => `/${n}`);
  return Array.from(new Set([...base, ...aliases]));
};

export const localContentCaptionAliases: Record<string, string[]> = {
  'Schumacher era, red dominance.': ['Michael_Schumacher_Ferrari_2004.jpg'],
  'The Tifosi at Monza.': ['Italian_F1_-_Monza_-_Ank_Kumar_05.jpg'],
  'Häkkinen, focus through Eau Rouge.': ['Mika_Häkkinen_1.jpg'],
  'Schumacher, the constant adversary.': ['Michael_Schumacher,_Ferrari_F2001_(8968595731)_(cropped).jpg'],
  "Button, soaked and relentless.": ['2011_Canadian_GP_-_Winner.jpg'],
  "Villeneuve's 312T4.": ['Ferrari_312T4_-_Jody_Scheckter_at_the_1979_Belgian_Grand_Prix,_Zolder_(51632958993).jpg'],
  'Arnoux in the RS10.': ['Renault_RS10,_GIMS_2019,_Le_Grand-Saconnex_(GIMS1205).jpg'],
  'Senna memorial, Parco delle Acque Minerali.': ['AyrtonSennaMemorialAtImola.jpg'],
  'Imola, old flow, new scars.': ['Autodromo_aerea_poster.jpg'],
  'BGP001 lines, white and neon.': ['640px-Jenson_Button_(Brawn_BGP_001)_on_Sunday_at_2009_Abu_Dhabi_Grand_Prix.jpg'],
  "Button's 2009 motif.": ['Barrichello_2009_British_GP_2.jpg']
};

export const buildContentCandidates = (url: string, caption: string) => {
  const base = buildLocalCandidates(url);
  const aliases = (localContentCaptionAliases[caption] || []).map((n) => `/${n}`);
  return Array.from(new Set([...base, ...aliases]));
};

export const buildLocalResponsiveSrcSet = (url: string) => {
  const name = baseNameFromUrl(url);
  const stem = name.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  const small = `/${stem}-480.webp 480w`;
  const medium = `/${stem}-1024.webp 1024w`;
  const large = `/${stem}-1920.webp 1920w`;
  return [small, medium, large].join(', ');
};

export const defaultSizes = {
  archive: '(max-width:1024px) 50vw, (max-width:1600px) 33vw, 33vw',
  modal: '(max-width:640px) 95vw, (max-width:1024px) 80vw, 60vw'
};

export const aspectForLayout = (layout: 'full' | 'portrait' | 'landscape') => {
  if (layout === 'portrait') return { width: 1200, height: 1600 };
  return { width: 1600, height: 900 };
};
