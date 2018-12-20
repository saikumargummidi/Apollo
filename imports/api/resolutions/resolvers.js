import Resolutions from './resolutions';


const res = Resolutions.find({}).fetch();

const resolvers = {
    Query: {
        resolutions(obj, args, context) {
            console.log(context);
            console.log(res);
            return res;
        }
    },
   Mutation:{
       createResolution(obj, { name }, context){
        const ResolutionId = Resolutions.insert(
            {
                name,
            }
        )
        return Resolutions.findOne(ResolutionId)
       }
   } 
}

export default resolvers;