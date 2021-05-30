export class Project {
    identifier: string;
    name: string;
    website: string;
    intro: string;
    shortDescription: string;
    requirements: string[];
    overview: string;
    challenge: string;
    solution: string;
    results: string;
    previewImageName: string;

    constructor(){
        this.identifier = "";
        this.name = "";
        this.website = "";
        this.intro = "";
        this.shortDescription = "";
        this.requirements = [""];
        this.overview = "";
        this.challenge = "";
        this.solution = "";
        this.results = "";
        this.previewImageName = "";
    }
}