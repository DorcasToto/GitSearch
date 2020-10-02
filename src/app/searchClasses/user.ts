export class User {
    constructor(public username: string,
        public image: string,
        public followers: number,
        public following: number,
        public bio: string,
        public location: string,
        public emailaddress: string,
        public repos: string
    ) {

    }
}
