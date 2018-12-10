import { GitHubAPIService } from "./GitHubAPIService";
import { User } from "./User";
import { Repo } from "./Repo";
import * as _ from 'lodash';

/**
 * npm install request lodash --save
 * npm install @types/lodash @types/request --save-dev
 */

let service=new GitHubAPIService();
if(process.argv.length<3){
    console.log('Please pass the username as an argument');
}else{
    let username=process.argv[2];
    service.getUserInfo(username,(user:User) => {
        //console.log(user);
        service.getRepos(username,(repos:Repo[]) => {
            //console.log(repos);
            let sortedRepos=_.sortBy(repos,[(repo:Repo)=>-1*repo.size]);
            let filteredRepos=_.take(sortedRepos,5);
            user.repos=filteredRepos;
            console.log(user);
        });
    });
}

