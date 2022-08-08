export class CONST {
    public static readonly TITLE = 'muaythai360';
    public static readonly PATH = 'assets/img/';

    public static readonly HOME_IMG = 'assets/img/home.png';
    public static readonly ABOUT_IMG = 'assets/img/about.png'; 
    public static readonly HEADER_IMG = 'assets/img/home.png'; 
    public static readonly PATH_IMG = 'assets/img/home.png';
    public static readonly BOXE_VIDEO = 'assets/video/boxe.mp4';
    public static readonly LOGO_IMG = 'assets/img/logo.png';
    public static readonly FB_LOGO = 'assets/img/facebook.png';
    public static readonly IG_LOGO = 'assets/img/ig.png';

    public static readonly GALLERY1 = 'assets/img/gallery1.jpg';
    public static readonly GALLERY2 = 'assets/img/gallery2.jpg';
    public static readonly GALLERY3 = 'assets/img/gallery3.jpg';
    public static readonly GALLERY4 = 'assets/img/gallery4.jpg';
    public static readonly GALLERY5 = 'assets/img/gallery5.jpg';
    public static readonly GALLERY6 = 'assets/img/gallery6.jpg';
    public static readonly GALLERY7 = 'assets/img/gallery7.jpg';
    public static readonly GALLERY8 = 'assets/img/gallery8.jpg';
    public static readonly GALLERY9 = 'assets/img/gallery9.jpg';
    public static readonly GALLERY10 = 'assets/img/gallery10.jpg';
    public static readonly GALLERY11 = 'assets/img/gallery11.jpg';

    public static readonly GUANTONI_IMG = 'assets/img/guantoni.jpeg';
    public static readonly TEAM_IMG = 'assets/img/gallery1.jpg';
}

    const TITLE = 'muaythai360';
    const PATH = 'assets/img/';

    const HOME_IMG = 'assets/img/home.png';
    const ABOUT_IMG = 'assets/img/about.png'; 
    const HEADER_IMG = 'assets/img/home.png'; 
    const PATH_IMG = 'assets/img/home.png';
    const BOXE_VIDEO = 'assets/video/boxe.mp4';
    const LOGO_IMG = 'assets/img/logo.png';
    const FB_LOGO = 'assets/img/facebook.png';
    const IG_LOGO = 'assets/img/ig.png';

    const GALLERY1 = 'assets/img/gallery1.jpg';
    const GALLERY2 = 'assets/img/gallery2.jpg';
    const GALLERY3 = 'assets/img/gallery3.jpg';
    const GALLERY4 = 'assets/img/gallery4.jpg';
    const GALLERY5 = 'assets/img/gallery5.jpg';
    const GALLERY6 = 'assets/img/gallery6.jpg';
    const GALLERY7 = 'assets/img/gallery7.jpg';
    const GALLERY8 = 'assets/img/gallery8.jpg';
    const GALLERY9 = 'assets/img/gallery9.jpg';
    const GALLERY10 = 'assets/img/gallery10.jpg';
    const GALLERY11 = 'assets/img/gallery11.jpg';

    const GUANTONI_IMG = 'assets/img/guantoni.jpeg';

    const NULLVAL = '';

    const TEAM_IMG = 'assets/img/gallery1.jpg';
    
    type Container = {
    'NULLVAL': typeof NULLVAL;
    'TITLE': typeof TITLE;
    'PATH': typeof PATH;
    'HOME_IMG': typeof HOME_IMG;
    'ABOUT_IMG': typeof ABOUT_IMG;
    'HEADER_IMG': typeof HEADER_IMG;
    'PATH_IMG': typeof PATH_IMG;
    'BOXE_VIDEO': typeof BOXE_VIDEO;
    'LOGO_IMG': typeof LOGO_IMG;
    'FB_LOGO': typeof FB_LOGO;
    'IG_LOGO': typeof IG_LOGO;
    'GALLERY1': typeof GALLERY1;
    'GALLERY2': typeof GALLERY2;
    'GALLERY3': typeof GALLERY3;
    'GALLERY4': typeof GALLERY4;
    'GALLERY5': typeof GALLERY5;
    'GALLERY6': typeof GALLERY6;
    'GALLERY7': typeof GALLERY7;
    'GALLERY8': typeof GALLERY8;
    'GALLERY9': typeof GALLERY9;
    'GALLERY10': typeof GALLERY10;
    'GALLERY11': typeof GALLERY11;
    'GUANTONI_IMG': typeof GUANTONI_IMG;
    'TEAM_IMG': typeof TEAM_IMG;
};

const container: Container = { TITLE, PATH, HOME_IMG, ABOUT_IMG, HEADER_IMG,
                               PATH_IMG, BOXE_VIDEO, LOGO_IMG, FB_LOGO, IG_LOGO,
                               GALLERY1, GALLERY2, GALLERY3, GALLERY4, GALLERY5,
                               GALLERY6, GALLERY7, GALLERY8, GALLERY9, GALLERY10,
                               GALLERY11, TEAM_IMG, GUANTONI_IMG, NULLVAL };


export function getConstant(name: String | undefined) {
    let val = name as keyof Container;
    return container[val];
 }


 const navigation = {
    mapperNext: new Map<string, string>([
      ['MUAY THAI SPORTIVA', 'MUAY BORAN'],
      ['MUAY BORAN','MUAY THAI BAMBINI'],
      ['MUAY THAI BAMBINI','PERSONAL TRAINING'],
      ['PERSONAL TRAINING','MUAY LERT RIT'],
    ]),
    mapperPrev: new Map<string, string>([
      ['MUAY BORAN', 'MUAY THAI SPORTIVA'],
      ['MUAY THAI BAMBINI','MUAY BORAN'],
      ['PERSONAL TRAINING','MUAY THAI BAMBINI'],
      ['MUAY LERT RIT','PERSONAL TRAINING'],
    ])
};

export function getConstantNext<K extends keyof typeof navigation>(key: K): (typeof navigation)[K]  {
    return navigation[key];
 }
  