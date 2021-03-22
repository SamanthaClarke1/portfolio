export interface Project {
  id: number;
  status: string;
  title: string; // title for the project, eg "Artic"
  images: string[]; // urls
  blurb: string; // a little blurb about the project
}