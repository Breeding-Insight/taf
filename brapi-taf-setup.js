import {BiResponse, Response} from "@/breeding-insight/model/BiResponse";
//import * as api from "@/util/api";
import { Result, Err, Success, ResultGenerator } from "@/breeding-insight/model/Result";

//first handle one, then loop
static async setupProgram(programId: string, full : boolean): Promise<Result<Error, BiResponse>> {
    try {
    
      //SQL
      //or execute sql outside and then call script
      //process.argv
    
      const programSetup = {
        "programName": "Snacks",
        "externalReferences": [
          {
            "referenceSource": "breeding-insight.org",
            "referenceID": //from SQL
          }
        ]
      };
      
      //http://<brapi-server url>/brapi/v2/programs
      const { data } = await api.call({
        url: `${process.env.VUE_APP_BI_API_V1_PATH}/brapi/v2/programs`,
        method: 'post',
        data: query,
        params: { full }
      }) as Response;

      return ResultGenerator.success(new BiResponse(data));
        
    } catch (error) {
      return ResultGenerator.err(error);
    }  
}

